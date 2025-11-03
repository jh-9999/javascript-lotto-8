import { Console, Random } from "@woowacourse/mission-utils"
import { 
  validatePurchaseInput,
  validateNumberAndComma, 
  validateNotEmpty,
  validateNumberRange,
  validateWinningNumbersCount,
  validateBonusNumber,
  validateDuplicateWithWinningNumbers,
} from "./validators.js";
import Lotto from "./Lotto.js";


const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";
const PLACEHOLDER_LOTTO_NUMBERS = "\n당첨 번호를 입력해 주세요.\n";
const PLACEHOLDER_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";
const LOTTO_PRICE = 1000;

const MESSAGE = {
  PURCHASE_AMOUNT: "개를 구매했습니다.",
  WINNING_STATISTICS: "\n당첨 통계\n---",
  THREE_MATCH: (n) => `3개 일치 (5,000원) - ${n}개`,
  FOUR_MATCH: (n) => `4개 일치 (50,000원) - ${n}개`,
  FIVE_MATCH: (n) => `5개 일치 (1,500,000원) - ${n}개`,
  FIVE_MATCH_BONUS: (n) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`,
  SIX_MATCH: (n) => `6개 일치 (2,000,000,000원) - ${n}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

const MATCH_COUNT = {
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  FIVE_AND_BONUS: 7,
}

const PRIZE_AMOUNT = {
  THREE_MATCH: 5000,
  FOUR_MATCH: 50000,
  FIVE_MATCH: 1500000,
  FIVE_MATCH_BONUS: 30000000,
  SIX_MATCH: 2000000000,
};

class App {
  async run() {
    const purchaseAmount = await retryUserInput(PLACEHOLDER_BUY_LOTTO, (s) => {
      validatePurchaseInput(s);
      return Number(s);
    })

    const count = purchaseCount(purchaseAmount);
    print(`\n${count}${MESSAGE.PURCHASE_AMOUNT}`);

    let tickets = generateLottoTickets(count);

    const winningNumbers = await retryUserInput(PLACEHOLDER_LOTTO_NUMBERS, (s) => {
      validateNumberAndComma(s);

      let winningNumbersArray = splitNumbers(s);
      validateNotEmpty(winningNumbersArray);

      winningNumbersArray = convertStringToNumbers(winningNumbersArray);
      validateNumberRange(winningNumbersArray);
      validateWinningNumbersCount(winningNumbersArray);

      return winningNumbersArray;
    })

    const bonusNumber = await retryUserInput(PLACEHOLDER_BONUS_NUMBER, (s) => {
      validateBonusNumber(s);
      let number = Number(s);
      validateDuplicateWithWinningNumbers(winningNumbers, number);
      validateNumberRange([number]);
      return number;
    })

    print(MESSAGE.WINNING_STATISTICS);

    const resultCounts = {
      [MATCH_COUNT.THREE]: 0,
      [MATCH_COUNT.FOUR]: 0,
      [MATCH_COUNT.FIVE]: 0,
      [MATCH_COUNT.FIVE_AND_BONUS]: 0,
      [MATCH_COUNT.SIX]: 0,
    }

    for (let ticket of tickets) {
      let count = ticket.compareWithWinningNumbers(winningNumbers);
      if (count === MATCH_COUNT.FIVE && ticket.checkBonusNumber(bonusNumber)) {
       count = MATCH_COUNT.FIVE_AND_BONUS;
      }
      if (count >= MATCH_COUNT.THREE) {
        resultCounts[count]++;
      }
    }

    printResultCounts(resultCounts);
    print(MESSAGE.PROFIT_RATE(calculateProfitRate(resultCounts, purchaseAmount)));
  }
}

async function userInput(placeholder = "") {
  return await Console.readLineAsync(placeholder);
}

export function print(input) {
  Console.print(input);
}

export function purchaseCount(input) {
  return Math.floor(input / LOTTO_PRICE);
}

export function splitNumbers(input) {
  return input.split(",").filter(Boolean);
}

function generateLottoNumbers() {
  const lottoNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return lottoNumbers.sort((a, b) => a - b)
}

export function printResultCounts(resultCounts) {
  print(MESSAGE.THREE_MATCH(resultCounts[MATCH_COUNT.THREE]));
  print(MESSAGE.FOUR_MATCH(resultCounts[MATCH_COUNT.FOUR]));
  print(MESSAGE.FIVE_MATCH(resultCounts[MATCH_COUNT.FIVE]));
  print(MESSAGE.FIVE_MATCH_BONUS(resultCounts[MATCH_COUNT.FIVE_AND_BONUS]));
  print(MESSAGE.SIX_MATCH(resultCounts[MATCH_COUNT.SIX]));
}

function calculateProfitRate(resultCounts, purchaseAmount) {
  const prizeByCount = {
    [MATCH_COUNT.THREE]: PRIZE_AMOUNT.THREE_MATCH,
    [MATCH_COUNT.FOUR]: PRIZE_AMOUNT.FOUR_MATCH,
    [MATCH_COUNT.FIVE]: PRIZE_AMOUNT.FIVE_MATCH,
    [MATCH_COUNT.FIVE_AND_BONUS]: PRIZE_AMOUNT.FIVE_MATCH_BONUS,
    [MATCH_COUNT.SIX]: PRIZE_AMOUNT.SIX_MATCH,
  };

  let totalPrize = 0;
  for (let count in resultCounts) {
    totalPrize += resultCounts[count] * prizeByCount[count];
  }
  return ((totalPrize / purchaseAmount) * 100).toFixed(1);
}

function generateLottoTickets(count) {
  let tickets = [];
  for (let i = 0; i < count; i++) {
    let numbers = generateLottoNumbers();
    let ticket = new Lotto(numbers);
    print(`[${ticket.getNumbers().join(", ")}]`);
    tickets.push(ticket);
  }
  return tickets;
}

export function convertStringToNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    let number = Number(input[i]);
    input[i] = number;
  }
  return input;
}


async function retryUserInput(placeholder, validator) {
  while (true) {
    try {
      const input = await userInput(placeholder);
      return validator(input);
    }catch (error) {
      print(error.message);
    }
  }
}

export default App;

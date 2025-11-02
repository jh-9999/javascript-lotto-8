import { Console, Random } from "@woowacourse/mission-utils"
import { 
  validatePurchaseInput,
  validateNumberAndComma 
} from "./validators.js";
import Lotto from "./Lotto.js";


const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";
const PLACEHOLDER_LOTTO_NUMBERS = "\n당첨 번호를 입력해 주세요.\n";
const PLACEHOLDER_BONUS_NUMBER = "\n보너스 번호를 입력해 주세요.\n";
const LOTTO_PRICE = 1000;

const MESSAGE = {
  PURCHASE_AMOUNT: "개를 구매했습니다.",
}

class App {
  async run() {
    let purchaseAmount = await userInput(PLACEHOLDER_BUY_LOTTO);
    validatePurchaseInput(purchaseAmount);
    purchaseAmount = Number(purchaseAmount);

    const count = purchaseCount(purchaseAmount);
    print(`\n${count}${MESSAGE.PURCHASE_AMOUNT}`);

    let tickets = generateLottoTickets(count);

    let winningNumbers = await userInput(PLACEHOLDER_LOTTO_NUMBERS);
    validateNumberAndComma(winningNumbers);

    let winningNumbersArray = splitNumbers(winningNumbers);
    
    winningNumbersArray = convertStringToNumbers(winningNumbersArray);

    let bonusNumber = await userInput(PLACEHOLDER_BONUS_NUMBER);
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

function generateLottoTickets(count) {
  let tickets = [];
  for (let i = 0; i < count; i++) {
    let numbers = generateLottoNumbers();
    let ticket = new Lotto(numbers);
    print(ticket.getNumbers());
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

export default App;

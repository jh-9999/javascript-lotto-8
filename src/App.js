import { Console, Random } from "@woowacourse/mission-utils"

const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";

class App {
  async run() {
    const buyLotto = await userInput(PLACEHOLDER_BUY_LOTTO);
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

function printLottoNumbers(purchaseCount) {
  for (let i = 0; i < purchaseCount; i++) {
    print(generateLottoNumbers());
  }
}

export function convertStringToNumbers(input) {
  for (let i = 0; i < input.length; i++) {
    let number = Number(input[i]);
    input[i] = number;
  }
  return input;
}

export default App;

import { Console } from "@woowacourse/mission-utils"

const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";
const ERROR_MESSAGE = {
  INVALID_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  INVALID_UNIT_OF_THOUSAND: "[ERROR] 1000원 단위로 입력해 주세요.",
  EMPTY_INPUT: "[ERROR] 값을 입력해주세요.",
  INVALID_NUMBER_AND_COMMA: "[ERROR] 로또 번호는 숫자만, 구분자는 콤마만 입력해주세요."
}
const PATTERN_NUMBER_ONLY = /^[0-9]+$/;
const PATTERN_NUMBER_AND_COMMA = /^[0-9,]$/
const LOTTO_PRICE = 1000;

class App {
  async run() {
    const buyLotto = await userInput(PLACEHOLDER_BUY_LOTTO);
  }
}

async function userInput(placeholder = "") {
  return await Console.readLineAsync(placeholder);
}

export function validateNumberOnly(input) {
  if (!PATTERN_NUMBER_ONLY.test(input)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  }
}

export function validateUnitOfThousand(input) {
  if (input % LOTTO_PRICE !== 0) throw new Error(ERROR_MESSAGE.INVALID_UNIT_OF_THOUSAND);
}

export function validateNotEmpty(input) {
  if(input.trim() === "") throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
}

export function validateNumberAndComma(input) {
  if(!PATTERN_NUMBER_AND_COMMA.test(input)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER_AND_COMMA);
}

export function purchaseCount(input) {
  return Math.floor(input / LOTTO_PRICE);
}

export function splitNumbers(input) {
  return input.split(",").filter(Boolean);
}

export default App;

import { Console } from "@woowacourse/mission-utils"

const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";
const ERROR_MESSAGE = {
  INVALID_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
  INVALID_UNIT_OF_THOUSAND: "[ERROR] 1000원 단위로 입력해 주세요.",
  EMPTY_INPUT: "[ERROR] 값을 입력해주세요."
}
const PATTERN_NUMBER_ONLY = /^[0-9]+$/;

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
  if (input % 1000 !== 0) throw new Error(ERROR_MESSAGE.INVALID_UNIT_OF_THOUSAND);
}

export function validateNotEmpty(input) {
  if(input.trim() === "") throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
}

export default App;

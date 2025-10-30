import { Console } from "@woowacourse/mission-utils"

const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";
const ERROR_MESSAGE = {
  INVALID_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
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

export default App;

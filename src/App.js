import { Console } from "@woowacourse/mission-utils"

const PLACEHOLDER_BUY_LOTTO = "구입금액을 입력해 주세요.\n";

class App {
  async run() {
    const buyLotto = await userInput(PLACEHOLDER_BUY_LOTTO);
  }
}

async function userInput(placeholder = "") {
  return await Console.readLineAsync(placeholder);
}

export default App;

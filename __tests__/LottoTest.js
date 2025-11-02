import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호와 당첨 번호를 비교하여 일치하는 번호의 개수를 반환한다.", () => {
    expect(new Lotto([1, 2, 3, 4, 5, 6]).compareWithWinningNumbers([1, 2, 3, 4, 5, 6])).toBe(6);
  });

  test("보너스 번호와 로또 번호를 비교하여 보너스 번호가 일치하면 true를 반환한다.", () => {
    expect(new Lotto([1,2,3,4,5,6]).checkBonusNumber(6)).toBe(true);
  });

  test("보너스 번호와 로또 번호를 비교하여 보너스 번호가 일치하지 않으면 false를 반환한다.", () => {
    expect(new Lotto([1,2,3,4,5,6]).checkBonusNumber(7)).toBe(false);
  });
});

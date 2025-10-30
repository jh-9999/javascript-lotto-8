import { validateNumberOnly } from "../src/App.js";

describe("App 테스트", () => {

    test("숫자만 입력되면 예외가 발생하지 않는다.", () => {
        expect(() => {
            validateNumberOnly("1000");
        }).not.toThrow();
    })

    test("숫자외에 다른 문자가 입력되면 예외가 발생한다.", () =>{
        expect(() => {
            validateNumberOnly("100!j");
        })
        .toThrow("[ERROR] 숫자만 입력해 주세요.");
    })
})
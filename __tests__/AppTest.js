import { 
    validateNumberOnly,
    validateUnitOfThousand,
    validateNotEmpty,
} from "../src/App.js";

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

    test("입력된 정수가 1000원 단위가 아니면 예외가 발생한다.", () =>{
        expect(() => {
            validateUnitOfThousand(1001);
        })
        .toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    })
    test("사용자가 입력값을 비워두면 예외가 발생한다.", () =>{
        expect(() => {
            validateNotEmpty("")
        })
        .toThrow("[ERROR] 값을 입력해주세요.")
    })
})
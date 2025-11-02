import { 
    validateNumberOnly,
    validateUnitOfThousand,
    validateNotEmpty,
    validateNumberAndComma,
    validateMinimumAmount,
} from "../src/validators.js";

describe("Validator 테스트", () => {

    test("숫자외에 다른 문자가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberOnly("-100");
        })
        .toThrow("[ERROR] 숫자만 입력해 주세요.");
    })

    test("입력된 정수가 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validateUnitOfThousand(1001);
        })
        .toThrow("[ERROR] 1000원 단위로 입력해 주세요.");
    })

    test("사용자가 입력값을 비워두면 예외가 발생한다.", () => {
        expect(() => {
            validateNotEmpty("")
        })
        .toThrow("[ERROR] 값을 입력해주세요.")
    })

    test("사용자가 입력한 금액이 최소금액 1000원 미만이면 예외가 발생한다.", () =>{
        expect(() => {
            validateMinimumAmount(999);
        })
        .toThrow("[ERROR] 최소 금액 1000원 이상을 입력해주세요.")
    })

    test("사용자가 입력한 로또 가격에 숫자와 콤마외에 다른 문자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberAndComma("1000,j")
        })
        .toThrow("[ERROR] 로또 번호는 숫자만, 구분자는 콤마만 입력해주세요.")
    })

})
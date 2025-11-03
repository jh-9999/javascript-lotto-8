import { 
    validateNumberOnly,
    validateUnitOfThousand,
    validateNotEmpty,
    validateNumberAndComma,
    validateMinimumAmount,
    validateBonusNumberCount,
    validateNumberRange,
    validateWinningNumbersCount,
    validateDuplicateWithWinningNumbers,
} from "../src/Validators.js";

describe("Validator 테스트", () => {

    test("숫자외에 다른 문자가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberOnly("-100");
        })
        .toThrow("[ERROR] 숫자만 입력해 주세요.");
    })

    test("입력된 정수가 1000원 단위가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validateUnitOfThousand("1001");
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

    test("사용자가 입력한 당첨 번호가 6개가 아니면 예외가 발생한다.", () => {
        expect(() => {
            validateWinningNumbersCount([1, 2, 3, 4, 5]);
        })
        .toThrow("[ERROR] 당첨 번호는 6개여야 합니다.")
    })

    test("사용자가 입력한 번호가 1미만이면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberRange([0]);
        })
        .toThrow("[ERROR] 번호는 1~45 사이의 숫자여야 합니다.")
    })
    test("사용자가 입력한 번호가 45초과이면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberRange([46]);
        })
        .toThrow("[ERROR] 번호는 1~45 사이의 숫자여야 합니다.")
    })

    test("사용자가 입력한 보너스 번호가 3개 이상이면 예외가 발생한다.", () => {
        expect(() => {
            validateBonusNumberCount("1,2,3");
        })
        .toThrow("[ERROR] 보너스 번호는 1개만 입력해주세요.")
    })

    test("사용자가 입력한 보너스 번호가 당첨 번호에 포함되어 있으면 예외가 발생한다.", () => {
        expect(() => {
            validateDuplicateWithWinningNumbers([1, 2, 3, 4, 5, 6], 5);
        })
        .toThrow("[ERROR] 보너스 번호는 당첨 번호에 포함되어 있으면 안 됩니다.")
    })
})
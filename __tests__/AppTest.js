import { 
    validateNumberOnly,
    validateUnitOfThousand,
    validateNotEmpty,
    validateNumberAndComma,
    purchaseCount,
    splitNumbers,
    convertStringToNumbers,
} from "../src/App.js";

describe("App 테스트", () => {


    test("숫자외에 다른 문자가 입력되면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberOnly("100!j");
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
    
    test("사용자가 입력한 금액을 1000원 단위로 환산하여 개수를 반환한다.", () => {
        expect(purchaseCount(7000)).toBe(7);
    })

    test("사용자가 입력한 로또 가격에 숫자와 콤마외에 다른 문자가 있으면 예외가 발생한다.", () => {
        expect(() => {
            validateNumberAndComma("1000,j")
        })
        .toThrow("[ERROR] 로또 번호는 숫자만, 구분자는 콤마만 입력해주세요.")
    })

    test("사용자가 입력한 로또 번호를 콤마를 기준으로 분리하고, 공백을 제거하여 배열로 반환한다.", () =>{
        expect(splitNumbers("1,,2,3,4,5,,")).toEqual(["1", "2", "3", "4", "5"]);
    })

    test("사용자가 입력한 로또 번호를 문자 타입에서 숫자 타입으로 변환한다.", () => {
        expect(convertStringToNumbers(["1", "2", "3", "4", "5", "6"])).toEqual([1, 2, 3, 4, 5, 6]);
    })
})
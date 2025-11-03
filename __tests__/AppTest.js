import { 
    purchaseCount,
    splitNumbers,
    convertStringToNumbers,
} from "../src/App.js";

describe("App 테스트", () => {
    
    test("사용자가 입력한 금액을 1000원 단위로 환산하여 개수를 반환한다.", () => {
        expect(purchaseCount(7000)).toBe(7);
    })

    test("사용자가 입력한 로또 번호를 콤마를 기준으로 분리하고, 공백을 제거하여 배열로 반환한다.", () =>{
        expect(splitNumbers("1,,2,3,4,5,,")).toEqual(["1", "2", "3", "4", "5"]);
    })

    test("사용자가 입력한 로또 번호를 문자 타입에서 숫자 타입으로 변환한다.", () => {
        expect(convertStringToNumbers(["1", "2", "3", "4", "5", "6"])).toEqual([1, 2, 3, 4, 5, 6]);
    })
})
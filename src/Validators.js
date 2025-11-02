const ERROR_MESSAGE = {
    INVALID_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
    INVALID_UNIT_OF_THOUSAND: "[ERROR] 1000원 단위로 입력해 주세요.",
    INVALID_NUMBER_AND_COMMA: "[ERROR] 로또 번호는 숫자만, 구분자는 콤마만 입력해주세요.",
    INVALID_MINIMUM_AMOUNT: "[ERROR] 최소 금액 1000원 이상을 입력해주세요.",
    EMPTY_INPUT: "[ERROR] 값을 입력해주세요.",
  }

const PATTERN_NUMBER_ONLY = /^[0-9]+$/;
const PATTERN_NUMBER_AND_COMMA = /^[0-9,]+$/

const LOTTO_PRICE = 1000;

export function validateNumberOnly(input) {
    if (!PATTERN_NUMBER_ONLY.test(input)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  }

export function validateUnitOfThousand(input) {
if (input % LOTTO_PRICE !== 0) throw new Error(ERROR_MESSAGE.INVALID_UNIT_OF_THOUSAND);
}

export function validateNotEmpty(input) {
    if(input.trim() === "") throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  }

export function validateMinimumAmount(input) {
  input = Number(input);
  if (input < LOTTO_PRICE) throw new Error(ERROR_MESSAGE.INVALID_MINIMUM_AMOUNT);
}
  
export function validateNumberAndComma(input) {
if(!PATTERN_NUMBER_AND_COMMA.test(input)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER_AND_COMMA);
}

export function validatePurchaseInput(input) {
    validateNumberOnly(input);
    validateNotEmpty(input);
    validateUnitOfThousand(input);
    validateMinimumAmount(input);
}



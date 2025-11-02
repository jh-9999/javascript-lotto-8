const ERROR_MESSAGE = {
    INVALID_NUMBER: "[ERROR] 숫자만 입력해 주세요.",
    INVALID_UNIT_OF_THOUSAND: "[ERROR] 1000원 단위로 입력해 주세요.",
    INVALID_MINIMUM_AMOUNT: "[ERROR] 최소 금액 1000원 이상을 입력해주세요.",
    INVALID_NUMBER_AND_COMMA: "[ERROR] 로또 번호는 숫자만, 구분자는 콤마만 입력해주세요.",
    INVALID_NUMBER_RANGE: "[ERROR] 번호는 1~45 사이의 숫자여야 합니다.",
    INVALID_LENGTH_OF_NUMBERS: "[ERROR] 당첨 번호는 6개여야 합니다.",
    INVALID_BONUS_NUMBER_COUNT: "[ERROR] 보너스 번호는 1개만 입력해주세요.",
    INVALID_DUPLICATE_WITH_WINNING_NUMBERS: "[ERROR] 보너스 번호는 당첨 번호에 포함되어 있으면 안 됩니다.",
    EMPTY_INPUT: "[ERROR] 값을 입력해주세요.",
}

const PATTERN_NUMBER_ONLY = /^[0-9]+$/;
const PATTERN_NUMBER_AND_COMMA = /^[0-9,]+$/

const BONUS_NUMBER_COUNT = 2;

const LOTTO_PRICE = 1000;
const LOTTO_NUMBER_RANGE = [1, 45];
const LOTTO_NUMBER_COUNT = 6;

export function validateNumberOnly(string) {
  if (!PATTERN_NUMBER_ONLY.test(string)) {
    throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
  }
}

export function validateUnitOfThousand(string) {
  let number = Number(string);
  if (number % LOTTO_PRICE !== 0) throw new Error(ERROR_MESSAGE.INVALID_UNIT_OF_THOUSAND);
}

export function validateNotEmpty(input) {
  if (Array.isArray(input)) {
    if (input.length === 0) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    return;
}

  if (typeof input === "string") {
    if (input.trim() === "") throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    return;
}
  
  if (input === null || input === undefined) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
} 

export function validateMinimumAmount(string) {
  let number = Number(string);
  if (number < LOTTO_PRICE) throw new Error(ERROR_MESSAGE.INVALID_MINIMUM_AMOUNT);
}
  
export function validateNumberAndComma(string) {
  if(!PATTERN_NUMBER_AND_COMMA.test(string)) throw new Error(ERROR_MESSAGE.INVALID_NUMBER_AND_COMMA);
}

export function validateNumberRange(Array) {
  for (let number of Array) {
    if (
      number < LOTTO_NUMBER_RANGE[0] ||
      number > LOTTO_NUMBER_RANGE[1]
    ) throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
  }
}

export function validateBonusNumberCount(string) {
  if (string.length > BONUS_NUMBER_COUNT) throw new Error(ERROR_MESSAGE.INVALID_BONUS_NUMBER_COUNT);
}

export function validateWinningNumbersCount(Array) {
  if (Array.length !== LOTTO_NUMBER_COUNT) throw new Error(ERROR_MESSAGE.INVALID_LENGTH_OF_NUMBERS);
}

export function validateDuplicateWithWinningNumbers(winningNumbers, bonusNumber) {
  for (let number of winningNumbers) {
    if (number === bonusNumber) throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_WITH_WINNING_NUMBERS);
  }
}

export function validatePurchaseInput(string) {
    validateNumberOnly(string);
    validateNotEmpty(string);
    validateUnitOfThousand(string);
    validateMinimumAmount(string);
}



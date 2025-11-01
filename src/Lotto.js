const ERROR_MESSAGE = {
  INVALID_LENGTH_OF_NUMBERS: "[ERROR] 로또 번호는 6개여야 합니다.",
  INVALID_DUPLICATE_NUMBERS: "[ERROR] 로또 번호에 중복된 숫자가 있습니다.",
  INVALID_NUMBER_RANGE: "[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다."

}
const LOTTO_NUMBER_COUNT = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.validateLengthOfNumbers(numbers);
    this.validateDuplicateNumbers(numbers);
    this.validateNumberRange(numbers);
  }

  // TODO: 추가 기능 구현

  getNumbers() { return [...this.#numbers]; }

  validateLengthOfNumbers(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.INVALID_LENGTH_OF_NUMBERS);
    }
  }

  validateSameNumber(a, b) {
    if (a === b) {
      throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_NUMBERS);
    }
  }

  validateDuplicateNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        this.validateSameNumber(numbers[i], numbers[j]);
      }
    }
  }
  validateNumberRange(numbers){
    for (let number of numbers){
      number = Number(number);
      if (number < 1 || number > 45) {
        throw new Error(ERROR_MESSAGE.INVALID_NUMBER_RANGE);
      }
    }
  }
}

export default Lotto;

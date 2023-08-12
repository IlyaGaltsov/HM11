function removeChars(inputString, charsToRemove) {
    const charArray = inputString.split('');
    const filteredArray = charArray.filter(char => !charsToRemove.includes(char));
    const result = filteredArray.join('');
    return result;
}

const userInput = prompt("Введите строку:");
const charsToRemoveInput = prompt("Введите символы для удаления через пробел:");

const charsToRemove = charsToRemoveInput.split(" ");
const output = removeChars(userInput, charsToRemove);
console.log("Результат:", output);
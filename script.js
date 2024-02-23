const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultElement = document.getElementById('result');

checkButton.addEventListener('click', () => {
    if (textInput.value !== '') {
        resultElement.textContent =
            checkIfPalindrome(textInput.value) ?
                `${textInput.value} is a palindrome` :
                `${textInput.value} is not a palindrome`;
    } else {
        alert('Please input a value');
    }
});

function prepareInput(str) {
    const strArr = str.split('');
    const noUnderscoreArr = strArr.filter(char => char !== '_');
    const regex = /\w/g;
    return noUnderscoreArr
        .join('')
        .toLowerCase()
        .match(regex);
}

function checkIfPalindrome(str) {
    const readyToCheckArr = prepareInput(str);
    const numberOfChecks = readyToCheckArr.length / 2;
    let i = 0

    while (i < numberOfChecks) {
        if (readyToCheckArr[i] !== readyToCheckArr[readyToCheckArr.length - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;
}


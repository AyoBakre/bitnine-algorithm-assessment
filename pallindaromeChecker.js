function isPalindromeOrReverse(word) {

    const cleanedWord = word.trim().toLowerCase();
    const isPalindrome = cleanedWord === cleanedWord.split('').reverse().join('');

    return isPalindrome ? cleanedWord : cleanedWord.split('').reverse().join('');
}

const userInput = prompt("Enter a word:");
const result = isPalindromeOrReverse(userInput);
console.log(result);

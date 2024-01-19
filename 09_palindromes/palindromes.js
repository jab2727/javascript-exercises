const palindromes = function (isPalindrome) {
    isPalindrome = isPalindrome.replace(/\W/g, '').toLowerCase();
    let answer = true;
    console.log(isPalindrome.length);
    for (let i=0; i<isPalindrome.length; i++){
        console.log(isPalindrome[i]);
        console.log(isPalindrome[isPalindrome.length-1-i]);
        if (!(isPalindrome[i]===isPalindrome[isPalindrome.length-1-i])){
            answer = false;
            console.log("Answer falsified.")
        }
    }
    return answer;
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;

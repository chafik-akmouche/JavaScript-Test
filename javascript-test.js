/**
 * 
 */


// returns the inverted string
function reverseString (str) {
    reverseChain = str.split("").reverse().join("");
    return reverseChain;
}


// check if a string is a palindrome
function isPalindrome (str) {
    // call the reverseString function
    return str == reverseString(str)
}


// returns the character that occurs most often in a string
function printMostComChar (str) {
    var max = 0;
    var maxChar = '';    
    str.split('').forEach(function(char) {
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
    return maxChar;
};


// returns the number of vowels
// using regex
// returns 0 if there is no vowel
function countVowels (str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}


// returns an array containing the prime numbers between 0 and n
function printPrimeNumbers (n) {
    var sieveArr = []
    var primesArr = [];
    var i, j;

    for (i = 2; i <= n; i++) {
        if (!sieveArr[i]) {
            primesArr.push(i);
            for (j = i << 1; j <= n; j += i) {
                sieveArr[j] = true;
            }
        }
    }
    return primesArr;
}


// check if both strings are anagrams
// ex : abcd <-> cbda
function checkAnagrams (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    else {
        return ( (str1.split('').sort().join('')) == (str2.split('').sort().join('')) );
    }    
}
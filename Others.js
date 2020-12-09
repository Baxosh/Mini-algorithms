// function first_last(str1)
//   {
//   if (str1.length <= 1)
//   {
//     return str1;
//   }
//   mid_char = str1.substring(0, str1.length);
//   return (str1.charAt(0)) + mid_char + str1.charAt(0);
// }
// console.log(first_last('a'));
// console.log(first_last('ab'));
// console.log(first_last('Swift'));    return     SSwiftS

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// function test37(x) {
//   if ( x % 3 == 0 || x % 7 == 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(test37(12))
// console.log(test37(25))
// console.log(test37(24))
// console.log(test37(13))

// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

// function changing(str) {
//     if (str <= 1) {
//         return str;
//     }
//     else {
//         let end_char = str.substring(str.length - 3);
//         return (end_char + str + end_char);
//     }
// }

// console.log(changing("Python"));

// function front_back3(str)
//  {
//   if (str.length>=3)
//    {
//    str_len = 3;

//   back = str.substring(str.length-3);
//    return back + str + back;
//  }
//    else
//      return false;
//  }
// console.log(front_back3("abc"));
// console.log(front_back3("ab"));
// console.log(front_back3("abcd"));

// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

// function java(jvs) {
//     if ( jvs.length < 4) {
//         return false;
//     }
//     if ( jvs.substring(0, 4) == "Java") {
//         return jvs;
//     }
//     return false;
// }

// console.log(java("JavaScript"));
// console.log(java("Photoshop"));
// console.log(java("Java"));

// Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function check_numbers(x, y)
//   {
//   if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }

// console.log(check_numbers(12, 101));
// console.log(check_numbers(52, 80));
// console.log(check_numbers(15, 99));

// Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// function check_script(str)
// {
//   if (str.length < 6) {
//     return str;
//   }
//   let result_str = str;

//   if (str.substring(10, 4) == 'Script')
//     {

//    result_str = str.substring(0, 4) + str.substring(10,str.length);

//   }
//   return result_str;
// }

// console.log(check_script("JavaScript"));
// console.log(check_script("CoffeeScript"));

//  Write a JavaScript program to find the largest of three given integers.

// function max_of_three(x, y, z)
//  {
//   max_val = 0;
//   if (x > y)
//   {
//     max_val = x;
//   } else
//   {
//     max_val = y;
//   }
//   if (z > max_val)
//   {
//     max_val = z;
//   }
//   return max_val;
// }

// console.log(max_of_three(1,0,1));
// console.log(max_of_three(0,-10,-20));
// console.log(max_of_three(1000,510,440));

//                  OR

// console.log(Math.max(0, 22, 55, 84, 58));

//  Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function nearest_100(a, b) {

//     let x = 100 - a;
//     let y = 100 - b;

//     let result = x < y ? a + ' nearest to 100' : b + ' nearest to 100';

//     console.log(result);
// }
// nearest_100(12, 22);

//      Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function rangeNum(x, y) {
//     if ( ( x >= 40 && x <= 60 && y >= 40 && y <= 60 ) || ( x >= 70 && x <= 100 && y >= 70 && y <= 100 )) {
//         return true;
//     }
//     return false;
// }

// console.log(rangeNum(44, 56));
// console.log(rangeNum(22, 56));
// console.log(rangeNum(44, 65));
// console.log(rangeNum(98, 70));

//  Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// function rangeNum(x, y) {
//     if ( x === y) {
//         return "Numbers are the same";
//     }
//     if (( x >= 40 && x <= 60 && y >= 40 && y <= 60 ) && ( x > y) ) {
//         return x;
//     }
//     else if (( x >= 40 && x <= 60 && y >= 40 && y <= 60 ) && ( y > x) ) {
//         return y;
//     }
//     return "Numbers don't fit in range";
// }

// console.log(rangeNum(44, 56));
// console.log(rangeNum(12, 56));
// console.log(rangeNum(58, 45));
// console.log(rangeNum(40, 60));

//                               Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.

// function check_char(str1, char)
//  {
//   ctr = 0;
//   for (let i = 0; i < str1.length; i++)
//   {
//     if ((str1.charAt(i) == char) && (i >= 1 && i <= 3))
//     {
//         ctr=1;
//         break;
//     }
//    }
//    if (ctr==1) return true;
//    return false;
// }
// console.log(check_char("Python", "y"));
// console.log(check_char("JavaScript", "a"));
// console.log(check_char("Console", "o"));
// console.log(check_char("Console", "C"));
// console.log(check_char("Console", "e"));
// console.log(check_char("JavaScript", "S"));

//Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// function last_digit(x, y, z)
// {
//     if ((x > 0) && y > 0 && z > 0)
//     {
//         return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);                           //    ??????
//     }
//     else
//     return false;
// }

// console.log(last_digit(20, 30, 400));
// console.log(last_digit(-20, 30, 400));
// console.log(last_digit(20, -30, 400));
// console.log(last_digit(20, 30, -400));

//Write a JavaScript program to create a new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
// ES6

// (function () {
//     function lowerCaseInThree(x) {
//     if ( x.length < 3) {
//         return x.toUpperCase();
//     }
//     front_part = (x.substring(0, 3)).toLowerCase();
//     back_part = x.substring(3, x.length);
//     return front_part + back_part;
// }
// console.log(lowerCaseInThree('Py'));
// console.log(lowerCaseInThree('PYTHON'));
// console.log(lowerCaseInThree('JAvascript'));
// }).call(this);

// It's My code examination.

// function examStatus(math, physics, english, biology) {
//     let student = math + physics + english + biology;

//     if ( student >= 86 && student <= 100) {
//         return student + ' The student has 5 points';
//     }
//     else if ( student >= 70 && student < 86) {
//         return student + ' The student has 4 points';
//     }
//     else if (student >= 56 && student < 70) {
//         return student + ' The student has 3 points';
//     }
//     else return 'Sorry, you failed the exam.'
// }

// console.log(examStatus(23, 12, 32, 12))
// console.log(examStatus(33, 12, 29, 12))
// console.log(examStatus(34, 4, 14, 4))

//Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// function  toInteger(x, y) {
//     let result = x + y;
//     if ( result >= 50 && result <= 80) {
//         return 65;
//     }
//     return 80;
// }
// console.log(toInteger(32, 22));

//Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

// function eigth(x, y) {
//     let sum = x + y;
//     let difference = x - y;

//     if ( sum == 8 || difference == 8 || x == 8 || y == 8) {
//         return true;
//     }
//     return false;
// }

// console.log(eigth(4, 4));
// console.log(eigth(5, 3));
// console.log(eigth(2, 4));
// console.log(eigth(12, 4));
// console.log(eigth(3, 4));
// console.log(eigth(8, 8));

//  Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function three_numbers(x, y, z) {
//     if (x == y && y == z) {
//       return 30;
//     }

//     if (x == y || y == z || z == x) {
//       return 40;
//     }

//     return 20;
//   }
//   console.log(three_numbers(8, 8, 8));
//   console.log(three_numbers(8, 28, 8));
//   console.log(three_numbers(8, 7, 18));
//   console.log(three_numbers(2, 2, 2));

//Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// function same_last_digit(p, q, r) {
//     return (p % 10 === q % 10) ||
//            (p % 10 === r % 10) ||
//            (q % 10 === r % 10);

// }

// console.log(same_last_digit(22,32,42));
// console.log(same_last_digit(102,302,2));
// console.log(same_last_digit(20,22,45));
// console.log(same_last_digit(2, 2, 2))
// console.log(same_last_digit(12, 2, 2))
// console.log(same_last_digit(2, 3, 2))
// console.log(same_last_digit(12, 1, 2))

//  Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// function lessby20_others(x, y, z) {
//     if (( x >= 20 || y >= 20 || z >= 20) && ( x < y || x < z || y < z)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(lessby20_others(23, 54, 12));
// console.log(lessby20_others(33, 34, 12));
// console.log(lessby20_others(13, 14, 12));
// console.log(lessby20_others(20, 24, 12));
// console.log(lessby20_others(23, 45, 10));
// console.log(lessby20_others(23, 23, 10));
// console.log(lessby20_others(21, 66, 75))

//Write a JavaScript program to check four given integer values and return true if one of the number is 15 or if their sum or difference is 15.

// function differenceFourInt(a, b, c, d)
// {
//     let sum = a + b + c + d;
//     let difference = a - b - c - d;

//     if ( sum == 15 || difference == 15 || a == 15 || b == 15 || c == 15 || d == 15)
//     {
//         return true;
//     }
//     return false;
// }

// console.log(differenceFourInt(2, 3, 5, 5))
// console.log(differenceFourInt(3, 4, 5, 3))
// console.log(differenceFourInt(3, 4, 3, 3))
// console.log(differenceFourInt(2, 4, 2, 3))

//Write a JavaScript program to reverse a given string.

// function string_reverse(str) {
//     return str
//                 .split("")
//                 .reverse()
//                 .join("");
// }

// console.log(string_reverse("w3resource"));
// console.log(string_reverse("www"));
// console.log(string_reverse("JavaScript"));

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

/////////////////////////// Secret code
// function LetterChanges(text)
// {
//     //https://goo.gl/R8gn7u
//     var s = text.split('');
//     for (var i = 0; i < s.length; i++)
//     {
//         // Caesar cipher
//         switch(s[i]) {
//         case ' ':
//         break;
//         case 'z':
//         s[i] = 'a';
//         break;
//         case 'Z':
//         s[i] = 'A';
//         break;
//         default:
//         s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//     }

//     // Upper-case vowels
//     switch(s[i])
//     {
//         case 'a': case 'e': case 'i': case 'o': case 'u':
//         s[i] = s[i].toUpperCase();
//     }
// }
// return s.join('');}

// console.log(LetterChanges("PYTHON"));
// console.log(LetterChanges("Bahodir"));
// console.log(LetterChanges("php"));

// input type number maxlength 3 stackoverflow code

{
  /* <div>

<input name="myinput_drs" oninput="maxLengthCheck(this)" type = "number" maxlength = "3" min = "1" max = "999" />
</div>

<script>
// This is an old version, for a more recent version look at
// https://jsfiddle.net/DRSDavidSoft/zb4ft1qq/2/
function maxLengthCheck(object)
{
    if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}
</script> */
}

// function twoSameNum(x, y, z) {
//     if ( x === y || y == z ) {
//         return true;
//     }
//     return false;
// }

// console.log(twoSameNum(2, 1, 2))

/// Keep calm today coding day

// search Vowels letters
// function searchVowels (str) {
//   return str.replace(/[^aouie]/g, "").length
// }

// console.log(searchVowels("w3Resoursec"))
// console.log(searchVowels("baxosh"))
// console.log(searchVowels("toto"))

//Write a JavaScript program to check whether a given string contains equal number of p's and t's.

// function equal_pt(str)
// {
//   var str_p = str.replace(/[^p]/g, "");

//   var str_t = str.replace(/[^t]/g, "");

//   var p_num = str_p.length;
//   var s_num = str_t.length;

//   return p_num === s_num;

// }
// console.log(equal_pt("paatpsts")); // here p length equal t
// console.log(equal_pt("paatptts")); // here 2 p and 3 t not equal

// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.

// let n1 = 80,
//   n2 = 6

// var div = Math.round(n1 / n2).toString(),
//   result_array = div.split('')

// if (div >= 1000) {
//   for (var i = div.length - 3; i > 0; i -= 3) {
//     result_array.splice(i, 0, ',')
//   }
//   result_array
// }
// console.log(result_array)

// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.

// function copyString(str, n) {

//   if ( n < 0 ) {
//     return false
//   }
//   return str.repeat(n)

// }
// console.log(copyString("abc", 5))
// console.log(copyString("abc", -2))
// console.log(copyString("abc", 2))

// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.

//  down Here my resolve

// function copyLastStr(str, n) {
//   if (str.length < 3) {
//     return false
//   } else {
//     let splitted = str
//                       .split('')
//                       .slice(-3)
//                       .join('')
//     return splitted.repeat(n)
//   }
// }

// console.log(copyLastStr('Python', 4))
// console.log(copyLastStr('sa', 4))
// console.log(copyLastStr('JavaScript', 4))

// here w3Resources resolve

// function newstring(str)
// {
//   if (str.length >= 3) {
//     result_str = str.substring(str.length - 3);
//     return result_str + result_str + result_str + result_str;
//   }
//   else
//     return false;
// }
// console.log(newstring("Python 3.0"));
// console.log(newstring("JS"));
// console.log(newstring("JavaScript"));

// Write a JavaScript program to extract the first half of a string of even length.

// function divisionHalfStr(str) {
//   if (str.length % 2 == 0) {
//     let firsHalf = str.slice(0, str.length / 2),
//       endHalf = str.substring(str.length / 2)
//       return { firsHalf, endHalf }
//   }
// }
// console.log(divisionHalfStr('Python 3.0'))
// console.log(divisionHalfStr('JS'))
// console.log(divisionHalfStr('JavaScript'))

// Write a JavaScript program to create a new string without the first and last character of a given string.

// function divisionHalfStr(str) {

//   if ( str.length >= 3 ) {
//     let newStr = str.substring(1, (str.length - 1))
//     return newStr
//   }else return false

// }
//   console.log(divisionHalfStr('Python 3.0'))
//   console.log(divisionHalfStr('JS'))
//   console.log(divisionHalfStr('JavaScript'))

// Write a JavaScript program to concatenate two strings except their first character.

// const concatStr = (strOne, strTwo) => {
//   strOne = strOne.substring(1, strOne.length)
//   strTwo = strTwo.substring(1, strTwo.length)

//   return strOne.concat(strTwo);
// }

// console.log(concatStr("abcdef", "fedcba"))
// console.log(concatStr("baxa", "sasha"))
// console.log(concatStr("PHP", "JS"))

// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

// const replacingStr = (str) => {
//   if (str.length > 1) {
//     return str.slice(-3) + str.slice(0, -3)
//   }
//   return str
// }

// console.log(replacingStr('abcdef'))
// console.log(replacingStr('Gorilla'))
// console.log(replacingStr('JavaScript'))

/// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.

// function middle_three(str) {
//   if (str.length % 2 != 0) {
//     mid = (str.length + 1) / 2
//     // console.log(mid)
//     return str.slice(mid - 2, mid + 1)
//   }
//   return str
// }
// console.log(middle_three('abcdefg'))
// console.log(middle_three('HTML5'))
// console.log(middle_three('Python'))
// console.log(middle_three('PHP'))
// console.log(middle_three('Exercises'))

/// Odd number and Even number

// function isOdd(value) {
//   return (value % 2)     //  !(value % 2) this is even number
// }
// console.log("1 is " + isOdd(1));
// console.log("2 is " + isOdd(2));
// console.log("3 is " + isOdd(3));
// console.log("4 is " + isOdd(4));
// console.log("5 is " + isOdd(5));
// console.log("7 is " + isOdd(7));

//  Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function str_con_cat(str1, str2) {
//   const m = Math.min(str1.length, str2.length);

//   return str1.substring(str1.length - m) + str2.substring(str2.length - m);
// }                  /// this is useful

// console.log(str_con_cat("Python", "JS"));
// console.log(str_con_cat("ab", "cdef"));

// Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.

// const testingScript = (str) => {   // My code <<<=====

//   let regExp = /Script$/g

//   return regExp.test(str)
// }

// console.log(testingScript("JavaScript"))
// console.log(testingScript("aasdScriptPht"))
// console.log(testingScript("PHPscript"))
// console.log(testingScript("JavaScript"));
// console.log(testingScript("Java Script"));
// console.log(testingScript("Java Scripts"));

//   // >>>> ========== <<<<

// function end_script(str) {  // w3resources code <<<=====
//   if (str.substring(str.length - 6, str.length) == 'Script')
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }
// }
// console.log(end_script("JavaScript"));
// console.log(end_script("Java Script"));
// console.log(end_script("Java Scripts"));

// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

// function cityName(str) {
//   if ( str.substring(0, 3) == 'Los' || str.substring(0, 3) == 'New' )
//   {
//     return str;
//   }
//   else
//   {
//     return '';
//   }
// }
// console.log(cityName("New York"));
// console.log(cityName("Washington"));
// console.log(cityName("Los Angeles"));

// Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.

// function nop(str) {
//   let start_pos = 0;
//   let end_pos = str.length;

//   if (str.length > 0 && str.charAt(0) == 'P')
//     {
//       start_pos = 1;
//     }

//   if (str.length > 1 && str.charAt(str.length - 1) == 'P')
//   {
//     end_pos--
//   }

//   return str.substring(start_pos, end_pos);
// }

// console.log(nop("PythonP"));
// console.log(nop("Python"));
// console.log(nop("JavaScript"));

//  Write a JavaScript program to create a new string taking the first and last n characters from a given string. The string length must be greater or equal to n.

// const getNChar = (str) => {
//   let n = 2;
//   if ( str.length > 4 ) {
//     return str.substring(0, n) + str.substring(str.length - n)
//   }else return "Smile"
// }

// console.log(getNChar("JavaScript"))
// console.log(getNChar("Java"))
// console.log(getNChar("Python"))

// function two_string(str, n)
//   {
//     first_part = str.substring(0, n);
//     last_part = str.substring(str.length - n);
//     return first_part + last_part;
//  }

// console.log(two_string("JavaScript", 2));
// console.log(two_string("JavaScript", 3));
// console.log(two_string("JavaScript", 12));

//  Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

// const someMethod = (arr) => {
//   return arr.some(num =>  num === 1)
// }

// console.log(someMethod([1, 2, 3]))
// console.log(someMethod([5, 2, 3]))
// console.log(someMethod([4, 2, 1]))

//  Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.

// const someMethod = (arr) => {
//   return arr[0] === arr[arr.length - 1]
// }

// console.log(someMethod([3, 2, 3]))
// console.log(someMethod([5, 2, 3]))
// console.log(someMethod([55, 2, 55]))
// console.log(someMethod([1, 2, 1]))


//  Write a JavaScript program to reverse the elements of a given array of integers length 3.

// const reverseNum = (arr) => {
//   return arr.reverse()
// }

// console.log(reverseNum([1, 2, 3, 4]))
// console.log(reverseNum([5, 4, 3, 2]))
// console.log(reverseNum([12, 2, 33, 4]))


// function reverse3(array) {
//   return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }

// console.log(reverse3([5, 4, 3])); 
// console.log(reverse3([1, 0, -1]));  
// console.log(reverse3([2, 3, 1]));


// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.

// const getMax = (arr) => {
//   let largeNum =  arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1]
//   // let largeNum = Math.max.apply(null, arr)
//   return arr.map(a => a = largeNum)
// }

// console.log(getMax([11, 222, 33,]))
// console.log(getMax([1, 222, 0,]))
// console.log(getMax([1, 2, 3,]))
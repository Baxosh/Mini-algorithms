// const arrowFunc = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {

// 	fo
// 	r (let j = i + 1; j < nums.length; j++) {
//       //   if (nums[i] + nums[j] == target) {
//       //     console.log(i, ' ', j)
//       //   } else return console.log('Не работает')
//       //   return true
//       console.log(nums[i], nums[j])
//     }
//   }
// }

// arrowFunc([1, 2, 4, 5, 6], 11)

// const array_diff = (arr, value) => {
//     let unique = [...new Set(arr)];
//     arr = unique.filter(item => item != value)
//     return arr
// }

// this but with ES6 function
// const array_diff = (a, b) => a.filter((item) => !b.includes(item))

// console.log(array_diff([1, 2, 2, 2, 2, 2, 2, 2, 2], [2]))
// console.log(array_diff([3, 4, 4, 6, 7, 8], [4]))

// function highAndLow(numbers){
//     let z = numbers.split(' ')

//     const max = z.reduce((a, b) => { return Math.max(a, b) });
//     const min = z.reduce((a, b) => { return Math.min(a, b) });

//     return `${max} ${min}`
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
// return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

// Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.


// const swapNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 != 0) {
//             [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//         }
//     }
//     return arr
// }

// console.log(swapNum([4, 3, 7, 4, 1, 0, 3,4,5,6,8]))


//  ['AAAABBBBCCCCDDDDDBBBB'] problem with set

// var arr = 'AAAABBBBCCCCDDDDDBBBB'
// let arrNew = arr.map((item, i) => item[i] == item[i + 1] ? arr.splice(0, 1, item[i]) : 'Smile')


// let newArr = arr.split(',')
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i + 1]) {
//         let a = arr.slice(arr[i])
//     }else 'smile'
//     console.log(a)
// }
// console.log(arr)    // Not fineshed


// Write a JavaScript program to change the capitalization of all letters in a given string.

/*

function change_case(txt) {
    var str1 = "";
    for (var i = 0; i < txt.length; i++) {
        if (/[A-Z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("GermaNy"));

*/

// Write a JavaScript program to swap two halves of a given array of integers of even length.

// const swapHalf = (arr) => {
//     // if (arr.length % 2 == 0)
//     // for (let i = 0; i < arr.length / 2; i++) arr.unshift( arr.pop())
//     // return arr // 1

//     // return arr.length % 2 == 0 ? [...arr.slice(arr.length / 2, arr.length), ...arr.slice(0, arr.length / 2)] : arr // 2
// }

// console.log(swapHalf([1, 2, 3, 4, 5, 6]))
// console.log(swapHalf([1, 2, 3, 4, 5, 6,7]))
// console.log(swapHalf([1, 2, 3, 4, 5, 6, 7, 8]))

// let str = 'The fox the Fox fox The jumpes up to tree. tree jumpe'  // w3resources

// let arr = str.split(' ')
// let result = []

// for (i = 0; i < arr.length; i++) {
//     if (result.every(item => item.word !== arr[i])) {
//         let count = 1;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) count++
//         }
//         result.push({
//             word: arr[i],
//             count
//         })
//     }
// }

// console.log(result);

// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.

// const primeNum = (num) => {
//     let arr = []
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false
//         }
//         else arr.push(num)
//     }
//     return arr
// }

// console.log(primeNum(5))


// function permutations(str) {
//     let arr              = []    
//     let result           = '';
//     let charactersLength = str.length;

//     for ( let i = 0; i < str.length; i++ ) {
//         result += str.charAt(Math.floor(Math.random() * charactersLength));
//         // while (str[i] != str[i + 1]){
//             //     arr.push(result)
//             //     if (str[i] == str[i + 1]) break;
//             // }

//     }
//     // arr.push(result)
//     return result

//  }

//  console.log(permutations('abab'));

// a = 'abab'

// b = [a.split(a)]

// print(b)

// str = 'ABAB'
// base = ['']
// function create(str, letter) {
//     let arr = []
//     for (let i = 0; i < str.length + 1; i++) {
//         arr.push(str.slice(0, i) + letter + str.slice(i, str.length))
//     }
//     return arr
// }

// function comb() {

//     for (let i = 0; i < str.length; i++) {
//         let baseLength = base.length
//         for (let j = 0; j < baseLength; j++) {
//             base = [...base, ...create(base[j], str[i])]
//         }

//     }
// }

// comb()


// function show() {
//     let arr = new Set(base.filter(item => item.length > 3));

//     console.log(arr)
//     return arr
// }

// show()


// const addConsecutiveNum = (arr) => {
//     let res = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         res.push(arr[i] + arr[i + 1])
//     }
//     return res.reduce((a, b) => a + b, 0)
// }

// console.log(addConsecutiveNum([1,2,3,2,-5]))

// Change string Upper or lower when more upper so upper the same more lower so lower.

// const changeStringCase = (str) => {
//     let u = 0
//     let l = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toLowerCase()) {
//             l += 1
//         } else if (str[i] == str[i].toUpperCase()) {
//             u += 1
//         }
//     }
//     // if (u < l) {
//     //     str.toLowerCase()
//     // }else str.toUpperCase()
//     return u < l ? str.toLowerCase() : str.toUpperCase()
// }

// console.log(changeStringCase('phsdPP'))
// console.log(changeStringCase('AAb'))
// console.log(changeStringCase('ppPP'))

// const defStr = (str) => {
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str[i] == str[i].toLowerCase() && str[i + 1] == str[i + 1].toLowerCase()) {
//             return true
//         }
//         else if (str[i] == str[i].toUpperCase() && str[i + 1] == str[i + 1].toUpperCase()) {
//             return true
//         }
//     }
//     return false

// }

// console.log(defStr('aBaas'))
// console.log(defStr('aBaBs'))
// console.log(defStr('aBBs'))


// Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.

// const findEqualNum = (arr) => {
//     let s = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] == arr[i + 1]) {
//             s.push(arr[i])
//         }
//     }
//     return s.length
// }

// console.log(findEqualNum([1,2,2,3,3]))
// console.log(findEqualNum([1,1,3]))

// obj = {name: 'Amigo', age: 18}

// myObj = JSON.stringify(obj)

// console.log(myObj)

// const digitize = n => [...`${n}`].map(i => parseInt(i));
// console.log(digitize(123))
// console.log(typeof(arr))


// const removeSameStrInArr = (arr, ...args) => {
//     for (let i = 0; i < args.length; i++ ){
//         return arr.filter(item => item != args[0] && item != args[1])
//     }
// }
//
// console.log(removeSameStrInArr(['a', 'c', 'b', 'a', 'c', 'b'], 'c', 'b'))

// function combineNum(arr) {
//     return arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]])
// }
//
// console.log(combineNum([1, 2]))
// console.log(combineNum([1, 2, 3]));
// console.log(combineNum([1, 2, 3, 4]));

// function showElemFromIndex(arr, ...idx) {
// let itterator = idx.values()
// let result = []
// for (let i = 0; i < arr.length; i++) {
//     for (let j of itterator) {
//         result.push(arr[j])
//     }
// }
// return result


// return idx.map(elem => !arr.includes(elem) ? arr[elem] : 'not') // second solution
// }

// console.log(showElemFromIndex(['a', 'b', 'c', 'd', 'e', 'f'], 6, 2))

// function randHexColor() {
//     let rgb = Math.random().toString(16).substring(2).slice(-6)
//     return rgb.length < 6 ? randHexColor() :`#${rgb}`
// }

// console.log(randHexColor())















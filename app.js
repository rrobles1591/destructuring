// Object Destructuring 1
// 8 and 1846

//Object Destructuring 2
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3


// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"})//'your name is Alejandro and you like purple'
// getUserData({firstName: "Melissa"}) // 'your name is Melissa and you like green'
// getUserData({}) // 'your name is Alejandro and you like purple'

// Array Deconstruction 1
// let [first, second, third] = ["Maya", "Marisa", "Chi"];
// console.log(first) //"Maya"
// console.log(second) // "Marissa"
// console.log (third) //"Chi"

//Array Desconstruction 2
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]

// console.log([raindrops]); // "Raindrops on roses"
// console.log([whiskers]); // ?"whiskers on kittens"
// console.log([aFewOfMyFavoriteThings]); // ? { "Bright copper kettles",
// // "warm woolen mittens",
// // "Brown paper packages tied up with strings"}


// // Array Destructuring 3
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // [10,30,20]

// ES2015 Object Destructuring
// /* Write an ES2015 Version */

// const obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// const {a,b} = obj.numbers

// ES5 Array Swap
// [arr[0], arr[1]] = [arr[1], arr[0]]

// raceResult() 
// const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})








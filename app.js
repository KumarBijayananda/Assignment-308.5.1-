// //ALAB 308.5.1 Assignment
// //Part 1. Thinking Functionally

// //1.1 Take an array of numbers and return the sum.

// let arr = [1, 3, 5, 7, 9];
// function sumReturn(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumReturn(arr));

// // 1.2 Take an array of numbers and return the average.
// let ave = [1, 3, 5, 7, 9];
// function aveReturn(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(aveReturn(ave));

//Take an array of strings and return the longest string.
// let strArr = ["Hello", "World", "thisbethelongest", "How", "you", "doing"];
// function longestString(arr) {
//   let longestWord = "";
//   for (let string of arr) {
//     if (string.length > longestWord.length) {
//       longestWord = string;
//     }
//   }
//   return longestWord;
// }
// console.log(longestString(strArr));

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.

// let strArr = ["Hello", "World", "thisbethelongest", "How", "you", "doing"];
// let number = 4;

// function stringsLongerthanANum(arr, num) {
//   let strToReturn = [];
//   for (let string of arr) {
//     if (string.length > number) {
//       strToReturn.push(string);
//     }
//   }
//   return strToReturn;
// }
// console.log(stringsLongerthanANum(strArr));

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// function printNumber(n) {
//   if (n > 1) {
//     console.log(n);
//     n--;
//     printNumber(n);
//   } else {
//     console.log(n);
//   }
// }

// printNumber(10);

//Part 2: Thinking Methodically
//Sort the array by age.

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// let sortedObject = []; //Empty array to store sorted objects

// //function to sort while array is not empty, passes callback function to find and remove the smallest object
// function sort(array, callback) {
//   while (array.length > 0) {
//     sortedObject.push(callback(array)); //sortedObject returns the smallest object which gets pushed into sorted objects array, this function also
//     //removes the smallest object from the original array which will eventually trigger the while to end
//   }
// }

// //this function finds the smallest object, removes it from the array and return it
// function findTheYoungestAndPop(array) {
//   let youngestObject = arrOfObjects[0];
//   let youngestIndex = 0;
//   for (let i = 1; i < array.length; i++) {
//     if (Number(youngestObject.age) > Number(array[i].age)) {
//       youngestObject = array[i];
//       youngestIndex = i;
//     }
//   }
//   array.splice(youngestIndex, 1);
//   return youngestObject;
// }

// sort(arrOfObjects, findTheYoungestAndPop);

// console.log(sortedObject);

//Filter the array to remove entries with an age greater than 50.

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// function findOver50AndPop(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Number(array[i].age) > 50) {
//       array.splice(i, 1); //if object age is over 50, it gets removed from the array
//       i--; //index gets adjusted to account for the removed item
//     }
//   }
// }

// findOver50AndPop(arrOfObjects);

// console.log(arrOfObjects);

//Optional solution for above problem after learning how to use filter method from google

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// const newArray = arrOfObjects.filter((object) => Number(object.age) < 50);
// console.log(newArray);

// Map the array to change the “occupation” key to “job” and increment every age by 1.

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// const newArray = arrOfObjects.map((Object) => ({
//   id: Object.id, //copying the id
//   name: Object.name, //copying the name
//   job: Object.occupation, //changing the key and copying the value
//   age: Number(Object.age) + 1, //copying the value and adding 1 to the age
// }));

// console.log(newArray);

//doing the above problem using function declaration instead

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// function transform(Object) {
//   return {
//     id: Object.id, //copying the id
//     name: Object.name, //copying the name
//     job: Object.occupation, //changing the key and copying the value
//     age: Number(Object.age) + 1, //copying the value and adding 1 to the age
//   };
// }

// const newArray = arrOfObjects.map(transform);

// console.log(newArray);

//Use the reduce method to calculate the sum of the ages.
//Then use the result to calculate the average age.

// const arrOfObjects = [
//   { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//   { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//   { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//   { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//   { id: "7", name: "Bilbo", occupation: "None", age: "111" },
// ];

// let counter = 0; //counter to get the average age

// const sum = arrOfObjects.reduce(
//   (sumOfAge, Object) => (sumOfAge += Number(Object.age)),
//   0
// );

// console.log(
//   `Sum is ${sum} and the average age is ${sum / arrOfObjects.length}`
// );

// Part 3: Thinking Critically

// For this section, develop functions that accomplish the following:
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// let objectAge = {
//   age: 0,
//   updated_at: {
//     Date: "12/3/2024",
//   },
// };

// function incAge1(Object) {
//   Object.age++;
// }

// function incAge2(Object1) {
//   let Object2 = Object1;
//   Object2.age++;
//   Object2.updated_at.Date = "12/5/2024";
//   return Object2;
// }
// console.log(incAge2(objectAge));
// console.log(objectAge);

// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
// Answer: If we modified the date object in the copy, the original would be modified too since they are passed by reference. We can circumvent this by making deep copies if possible, and if not we can use primitive data types to store the value of date instead of objects or arrays so they can be passed by value.

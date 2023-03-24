// [x] Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// [x] La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// [x] Usiamo i nuovi metodi degli array foreach o filter.

// es: 
// const numbersArray = [23, 14, 6, 8, 10];
// const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]

// Array
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// variables for first and last element in array
const firstElement = numbersArray[0];
const lastElement = numbersArray[numbersArray.length - 1];

// Output new array
const newArray = numbersArray.filter(number => number > firstElement && number < lastElement);

console.log(numbersArray);
console.log(newArray);
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        let pointer = array[j];
        array[j] = array[j + 1];
        array[j + 1] = pointer;
      }
    }
  }
}
// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) {
//       if (array[j] > array[j + 1]) {
//         //Swap the numbers
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
// }

const numbers = [6, 5, 3, 1, 8, 7, 2, 4];
bubbleSort(numbers);
console.log(numbers);

// console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));

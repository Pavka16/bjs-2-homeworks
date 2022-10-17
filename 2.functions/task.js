// Задание 1
function getArrayParams(arr) {

   let min = Infinity;
   let max = -Infinity;
   let sum = 0;
   let count = 0;

   for (let i = 0; i < arr.length; i++) {
      count++;
      sum += arr[i];

      if (arr[i] > max) {
         max = arr[i];
      }
      if (arr[i] < min) {
         min = arr[i];
      }
   }
   avg = sum / count;

   return { max, min, avg: Number(avg.toFixed(2)) };


//   Так тоже считает!!!
   // for (let i = 0; i < arr.length; i++) {
   //    count += 1;
   //    sum += arr[i];
   //    avg = sum / count;
   // }
   // return { max: Math.max(...arr), min: Math.min(...arr), avg: Number(avg.toFixed(2)) };
}

// Задание 2
function worker(arr) {

   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

function makeWork(arrOfArr, func) {

   let max = -Infinity;
   for (let i = 0; i < arrOfArr.length; i++) {
      let sumArr = func(arrOfArr[i]);
      if (sumArr > max) {
         max = sumArr;
      }
   }
  return max;
}

// Задание 3
function worker2(arr) {
   let max = -Infinity;
   let min = Infinity;
   let diff = 0;
   for (let i = 0; i < arr.length; i++) {

      if (arr[i] > max) {
         max = arr[i];
      }
      if (arr[i] < min) {
         min = arr[i];
      }
      diff = Math.max(...arr) - Math.min(...arr);
   }
   return diff;
}

function solveEquation(a, b, c) {
   "use strict";

   let arr = [];
   let x, x1, x2;

   let d = Math.pow(b, 2) - 4 * a * c;
   //       d- дискриминант, x, x1, x2 - корни уравнения;
   if (d == 0) {
      x = -b / (2 * a);
      arr.push(x);
   }
   if (d > 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      arr.push(x1, x2);
   }
   if (d < 0) {
      return arr;
   }

   return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

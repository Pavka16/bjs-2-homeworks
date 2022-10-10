function compareArrays(arr1, arr2) {
  let result;

   result = arr1.length == arr2.length && arr1.every((elem, i) => elem == arr2[i]);

   return result;
}

function advancedFilter(arr) {
  let resultArr;
   resultArr = arr.filter(elem => elem > 0).
      filter(elem => elem % 3 == 0).
      map(elem => elem * 10);

   return resultArr;
}

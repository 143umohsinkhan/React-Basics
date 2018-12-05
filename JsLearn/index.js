// function addAll() {
//   var arry = Array.prototype.slice.call(arguments);
//   var total = 0;
//   for (var i = 0; i < arry.length; i++) {
//     total += arry[i];
//   }
//   return total;
// }

// function addAll(...numbers) {
//   var total = 0;
//   numbers.forEach(num => (total += num));
//   return total;
// }

// function addAll(...numbers) {
//   return numbers.reduce((accu, curr) => accu + curr);
// }

// function SumofPrimeNumbers(num) {
//   let total = 0;
//   for (let i = 2; i <= num; i++) {
//     if (isPrimeNumber(i)) {
//       total += i;
//     }
//   }
//   return total;
// }

// function isPrimeNumber(i) {
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) return false;
//   }
//   return true;
// }

// function seekAndDestroy(arr) {
//   var agrs = Array.from(arguments);
//   console.log(agrs);

//   function filterArr(checknum) {
//     console.log(checknum);
//     return agrs.indexOf(checknum) == -1;
//   }

//   return arr.filter(num => filterArr(num));
// }

function seekandDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

// function splicTest() {
//   let arra1 = [1, 3, 4, 5, 6];
//   console.log(arra1.splice(3, 1, "mohsin"));
//   console.log(arra1);
// }

//console.log(splicTest());

function TreeHeightProblem(a) {
  let indexarray = [];
  let itemarray = [];
  a.forEach((val, i) => {
    val === -1 ? indexarray.push(i) : itemarray.push(val);
  });

  var sortedArray = itemarray.sort((a, b) => a - b);
  console.log(sortedArray);
  indexarray.forEach((val, i) => sortedArray.splice(indexarray[i], 0, -1));
  return sortedArray;
}
const a = [-1, 12, 1231, 123, 1, -1, 123, -1, 123, 132, -1];
console.log(TreeHeightProblem(a));

//console.log(seekandDestroy([1, 2, 3, "mohsin"], 2, 4));
//console.log(arrayofArrayIndex());

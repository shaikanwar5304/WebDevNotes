const a = [1, 2, 3, 4, 5, 6, 7, 8];
//higherorderfunction accept function as arguments

function highorder(conditionchecker) {
  let b = [];
  for (i = 0; i < a.length; i++) {
    if (conditionchecker(a[i])) {
      b.push(a[i]);}}
  return b;
}

function isodd(a) {
  return a % 2;
}

console.log(highorder(isodd));//[1,3,5,7]
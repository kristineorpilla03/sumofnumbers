function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  while (list.length > 0) {
    sum += list[0];
    list.shift();
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  const first = list[0];
  list.shift();
  return first + sumRecursion(list);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, sum) {
    return memo + sum;
  }, 0);
}

console.log(sumFor([1, 2, 3]));
console.log(sumWhile([1, 2, 3]));
console.log(sumRecursion([1, 2, 3]));
console.log(sumTheSimpleWay([1, 2, 3]));

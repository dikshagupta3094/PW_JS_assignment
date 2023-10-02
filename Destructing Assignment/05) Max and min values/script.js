function MaxAndMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

let value = [5, 2, 7, 1, 9];
console.log(MaxAndMin(value));

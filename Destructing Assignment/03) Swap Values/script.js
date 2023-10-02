function SwapValues(a, b) {
  let [x, y] = [a, b];
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}

let x = 3;
let y = 2;
[x, y] = SwapValues(x, y);
console.log(x, y);

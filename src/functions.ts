// Functions (optional and default parameters)
const add = (a: number, b: number = 0): number => {
  return a + b;
};

console.log(add(1));

type MyFunc = (a: number, b: number) => number;
const sum2: MyFunc = (a, b) => a + b;

// Unknown number of arguments
const sumEverything = (
  arg1: string,
  arg2: boolean,
  ...nums: number[]
): number => {
  return nums.reduce((res, num) => res + num, 0);
};

// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }

  return Math.pow(args[0], 2);
}

import multiply, { multiplyByTwo as mBy2, HelloWorld } from './multiply';

const a = 4;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a, b)}`);

console.log(mBy2(5));

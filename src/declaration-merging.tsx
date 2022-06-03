interface Cart {
  calculateTotal(): number;
}

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: { discountCode: number }) {
    if (options?.discountCode) {
      // apply discount
    }

    return 1;
  },
};

/////////////////////////////////////////////////

namespace MyNamespace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

namespace MyNamespace {
  export const getX = () => x;
  export interface SomeInterface {
    x: number;
  }
}

MyNamespace.x;
MyNamespace.getX();

const someInterface: MyNamespace.SomeInterface = {
  x: 1,
  y: 2,
};

/////////////////////////////////////////////////

function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

/////////////////////////////////////////////////

enum Vegetables {
  Tomato = 'tomato',
  Onion = 'onion',
}

namespace Vegetables {
  export const makeSalad = () => {
    return Vegetables.Tomato + Vegetables.Onion;
  };
}

const salad = Vegetables.makeSalad();

/////////////////////////////////////////////////

class Salad {}

namespace Salad {
  export const availableDressings = ['olive oil', 'yoghurt'];
}

Salad.availableDressings.includes('olive oil');

/////////////////////////////////////////////////

import React from 'react';
import { renderToString } from 'react-dom/server';

declare module 'react' {
  interface Component {
    helloWorld(): string;
  }
}

React.Component.prototype.helloWorld = function () {
  return 'Hello World';
};

class MyComponent extends React.Component {
  render() {
    return <div>{this.helloWorld()}</div>;
  }
}

console.log(renderToString(<MyComponent />));

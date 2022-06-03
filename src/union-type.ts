const someFn = (myArgument: number | string | boolean) => {
  if (typeof myArgument === 'string') {
    myArgument.toUpperCase();
  } else if (typeof myArgument === 'number') {
    myArgument.toFixed();
  } else {
    myArgument;
  }
};

/////////////////////////////////////////////////
interface Dog {
  bark(): void;
  walk(): void;
}

interface Cat {
  meow(): void;
  walk(): void;
}

const isDog = (someObj: Dog | Cat): someObj is Dog => {
  return (<Dog>someObj).bark !== undefined;
};

const callMyPet = (pet: Dog | Cat) => {
  pet.walk();

  if (isDog(pet)) {
    pet.bark();
  } else {
    pet.meow();
  }
};

/////////////////////////////////////////////////
class Foo {
  foo: number = 0;
  commonProp: string = '';
}

class Bar {
  bar: number = 0;
  commonProp: string = '';
}

const fooBarFunction = (obj: Foo | Bar) => {
  if (obj instanceof Foo) {
    obj.foo;
  } else {
    obj.bar;
  }
};

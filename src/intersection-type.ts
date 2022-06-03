interface AInterface {
  a: number;
}

interface BInterface {
  b: number;
}

interface CInterface {
  c: number;
}

const x = (obj: AInterface & BInterface & CInterface) => {
  return obj.a + obj.b + obj.c;
};

const combine = <ObjA extends object, ObjB extends object>(
  objA: ObjA,
  objB: ObjB
): ObjA & ObjB => {
  return { ...objA, ...objB };
};

const objA = { a: 1 };
const objB = { b: 1 };

const resultObj = combine(objA, objB);

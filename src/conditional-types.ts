type SomeType = number;

type MyConditionalType = SomeType extends string ? string : null;

const someFunction = <T>(value: T) => {
  type A = T extends boolean
    ? 'TYPE A'
    : T extends string
    ? 'TYPE B'
    : T extends number
    ? 'TYPE C'
    : 'TYPE D';

  const someOtherFunction = (
    someArg: T extends boolean ? 'TYPE A' : 'TYPE B'
  ) => {
    const a: 'TYPE A' | 'TYPE B' = someArg;
  };

  return someOtherFunction;
};

const result = someFunction(true);

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | boolean | never;

// type Exclude<T, U> = T extends U ? never : T;

type ResultType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// 'a' extends 'a' | 'b' ? never : 'a' => never
// 'b' extends 'a' | 'b' ? never : 'b' => never
// 'c' extends 'a' | 'b' ? never : 'c' => 'c'

type MyType<T> = T extends string | number ? T : never;
// type MyType<T> = (() => T) extends () => string | number ? T : never;
// type MyType<T> = [string | number] extends [string | number] ? T : never;

type MyResult = MyType<string | number | boolean>;

type InferSomething<T> = T extends infer U ? U : any;
type Inferred = InferSomething<'I am a string'>;

type InferSomething2<T> = T extends { a: infer A; b: number } ? A : any;
type InferSomething3<T> = T extends { a: infer A; b: infer B } ? A & B : any;

type Inferred2 = InferSomething2<{ a: 'Hello' }>;
type Inferred3 = InferSomething2<{ a: 'Hello'; b: 10 }>;
type Inferred4 = InferSomething3<{
  a: { someAProp: 1 };
  b: { someBProp: 'B' };
}>;

type MyFuncReturnValue = ReturnType<() => true>;

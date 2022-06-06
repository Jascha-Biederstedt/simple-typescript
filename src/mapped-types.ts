type Properties = 'propA' | 'propB';

type MyMappedType<T> = {
  [P in keyof T]: T[P] | null;
};

type MyNewType = MyMappedType<{ a: 'a'; b: 'b' }>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};

type MyNewType2 = Pick1<{ a: 'a'; b: 'b' }, 'a'>;

type Record1<K extends keyof any, T> = {
  [P in K]: T;
};

const someRecord: Record1<string | number, number> = {};
someRecord.apples = 10;
someRecord.oranges = 10;
someRecord[1] = 1;

interface Record2 {
  [key: number]: number;
}

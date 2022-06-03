interface Starship {
  name: string;
  enableHyperjump: boolean;
}

type StarshipNameOnly = Pick<Starship, 'name'>;
type StarshipWithoutName = Omit<Starship, 'name'>;

const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, { name: 'Explorer' });

const starships: Record<string, Starship> = {
  Explorer1: {
    name: 'Explorer1',
    enableHyperjump: true,
  },
  Explorer2: {
    name: 'Explorer2',
    enableHyperjump: false,
  },
};

/////////////////////////////////////////////////

type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';

let JohnsDrink: AvailableDrinks = 'Coffee';

type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
type DrinksJaneLikes = 'Tea' | 'Lemonade' | 'Mojito';

let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
let JanesDrink2: Extract<AvailableDrinks, DrinksJaneLikes>;

// JanesDrink = 'Coffee'
// JanesDrink2 = 'Mojito'
JanesDrink = 'Tea';

/////////////////////////////////////////////////

interface StarshipProperties {
  color?: 'red' | 'green' | 'blue';
}

const paintStarship = (
  id: number,
  color: NonNullable<StarshipProperties['color']>
) => {
  return {
    id,
    color,
  };
};

type PaintStarshipReturn = ReturnType<typeof paintStarship>;

// paintStarship(1, undefined)
paintStarship(1, 'green');

/////////////////////////////////////////////////

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

const Deletable = <BaseClass extends Constructable<{}>>(Base: BaseClass) => {
  return class extends Base {
    deleted: boolean = false;
    delete() {}
  };
};

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableUser = Deletable(User);

type DeletableCarInstance = InstanceType<typeof DeletableCar>;
type DeletableUserInstance = InstanceType<typeof DeletableUser>;

class Profile {
  car: DeletableCarInstance | undefined;
  user: DeletableUserInstance | undefined;
}

const profile2 = new Profile();
profile.car = new DeletableCar('Ferrari');
profile.user = new DeletableUser('John');

/////////////////////////////////////////////////

interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  },
};

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return 'Hello World';
  },
});

console.log(myObject.sayHello());

/////////////////////////////////////////////////

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

const makeObject = <D, M>(desc: ObjectDescriptor<D, M>): D & M => {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
};

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

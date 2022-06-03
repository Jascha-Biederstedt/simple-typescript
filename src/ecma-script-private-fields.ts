class Robot2 {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

class AdvancedRobot2 extends Robot2 {
  #name: string;

  constructor(name: string) {
    super(name);
    this.#name = `Advanced ${name}`;
  }

  getAdvancedName() {
    return this.#name;
  }
}

const robot2 = new AdvancedRobot2('Jack');

console.log('parent name', robot2.getName());
console.log('subclass name', robot2.getAdvancedName());

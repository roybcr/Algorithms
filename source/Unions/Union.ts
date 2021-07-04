class Union {
  dictionary: Record<string, any>;
  length: number;

  constructor() {
    this.dictionary = {};
    this.length = 0;
  }
  has(element: string) {
    return this.dictionary[element] !== undefined;
  }
  values() {
    return Object.values(this.dictionary);
  }
  add(element: string | number) {
    if (!this.has(`${element}`)) {
      this.dictionary[`${element}`] = element;
      this.length++;
      return true;
    }
    return false;
  }
  remove(element: string) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }
    return false;
  }
  size() {
    return this.length;
  }
  // Performs a union on two sets of data.
  // gets a Set as an argument and returns the union of the two sets,
  // excluding any duplicate values.
  union(anotherSet: Set<string | number>) {
    const newSet = new Set();
    const addToSet = (item: number | string) => newSet.add(item);
    this.values().forEach(addToSet);
    anotherSet.forEach(addToSet);
    return newSet;
  }
}

const u = new Union();
u.add(32);
u.add("2332322");
u.add(232);

console.log(u.union(new Set([1, 2, 3, "32", "2e1r90u3hi"])));

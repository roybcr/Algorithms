class CustomSet {
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

  add(item: string) {
    if (!this.has(item)) {
      this.dictionary[item] = item;
      return true;
    }

    return false;
  }

  remove(item: string) {
    if (this.has(item)) {
      delete this.dictionary[item];
      return true;
    } else return false;
  }

  size() {
    return [new Set(Object.values(this.dictionary))].length;
  }
}

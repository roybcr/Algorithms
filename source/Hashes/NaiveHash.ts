const hash = (string: string) => {
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
class HashTable {
  collection: Record<string, any>;
  constructor() {
    this.collection = {};
  }

  add = (key: string, val: string) => {
    const theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  };

  remove = (key: string) => {
    const hashedObj = this.collection[hash(key)];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)];
    }
  };

  lookup = (key: string) => {
    const theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null;
  };
}

const hsa = new HashTable();
hsa.add("Mood", "Amazing👨‍🎨");
console.log(hsa.collection);
console.log(hsa.lookup("Mood"));

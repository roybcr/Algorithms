class CustomMap {
  collection: Record<string, any>;
  constructor() {
    this.collection = {};
  }

  add = (key: string, value: any) => (this.collection[key] = value);

  remove = (key: string) => delete this.collection[key];

  get = (key: string) => {
    return this.collection[key];
  };

  has = (key: string) => {
    return this.get(key) !== undefined;
  };

  values = () => {
    return Object.values(this.collection);
  };

  size = () => {
    return this.values().length;
  };

  clear = () => {
    Object.keys(this.collection).forEach((k) => delete this.collection[k]);
  };
}

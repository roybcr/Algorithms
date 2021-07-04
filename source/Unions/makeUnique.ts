/**
 * makeUnique Takes a Set or an Array of elements, and if it’s given an Array,
 * it’ll sort that Array remove duplicates according to some comparison function.
 * After all that, it will return the original collection. {@link makeUnique}.
 */
export function makeUnique<T, C extends Set<T> | T[]>(
  collection: C,
  comparer: (x: T, y: T) => number,
): Set<T> | T[] {
  // Early bail-out if we have a Set.
  // We assume the elements are already unique.
  if (collection instanceof Set) {
    return collection;
  }

  // Sort the array, then remove consecutive duplicates.

  collection.sort(comparer);
  for (let i = 0; i < collection.length; i++) {
    let j = i;
    while (j < collection.length && comparer(collection[i], collection[j + 1]) === 0) {
      j++;
    }
    collection.splice(i + 1, j - i);
  }
  return collection;
}

console.log(makeUnique([132, 43, 5, 454, 2, 323, 45, 6, 6, 76], (a: number, b: number) => a - b));

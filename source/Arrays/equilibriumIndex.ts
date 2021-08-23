// An equilibrium index of a sequence is an index into the sequence,
// such that the sum of elements at lower indices
// is equal to the sum of elements at higher indices.

const equilibrium = (a: number[]) => {
  const length = a.length;
  let equilibriumIdxs: number[] = [];
  for (let i = 0; i < length; i++) {
    const sA = a.slice(0, i + 1).reduce((a, b) => a + b);
    const sB = a.slice(i, length).reduce((a, b) => a + b);
    if (sA === sB) equilibriumIdxs.push(i);
  }

  return equilibriumIdxs;
};

equilibrium([-7, 1, 5, 2, -4, 3, 0]);
// [3, 6]

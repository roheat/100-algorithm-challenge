function absoluteValuesSumMinimization(a: number[]): number {
  const isEven = a.length % 2 === 0;
  if (isEven) {
    return a[a.length / 2 - 1];
  }
  return a[(a.length - 1) / 2];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));

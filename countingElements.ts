// Problem:
// The goal is to check whether there is a swap operation which can be performed on these
// arrays in such a way that the sum of elements in array A equals the sum of elements in
// array B after the swap. By swap operation we mean picking one element from array A and
// one element from array B and exchanging them.
// Solution O(n 2 ): The simplest method is to swap every pair of elements and calculate the
// totals. Using that approach gives us O(n 3 ) time complexity. A better approach is to calculate
// the sums of elements at the beginning, and check only how the totals change during the swap
// operation.

type SlowSolutionType = (arr1: number[], arr2: number[], m: number) => boolean;

const slowSolution: SlowSolutionType = (arr1, arr2, m): boolean => {
  const n = arr1.length;

  let sum1 = arr1.reduce((sum, num) => sum + num, 0);
  let sum2 = arr2.reduce((sum, num) => sum + num, 0);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const change = arr1[i] - arr2[j];
      sum1 -= change;
      sum2 += change;

      if (sum1 === sum2) {
        return true;
      }

      // Revert the changes for next iteration
      sum1 += change;
      sum2 -= change;
    }
  }
  return false;
};

console.log(slowSolution([1, 2, 3], [3, 2, 1], 20));

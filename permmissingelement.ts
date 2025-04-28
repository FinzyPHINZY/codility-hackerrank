// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

//     function solution(A: number[]): number;

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:
//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5

// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

//         N is an integer within the range [0..100,000];
//         the elements of A are all distinct;
//         each element of array A is an integer within the range [1..(N + 1)].

function permMissingElement(arr: number[]): number {
  const sortedArray = arr.sort((a, b) => a - b);

  console.log(sortedArray);

  if (sortedArray[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < sortedArray.length; i++) {
    const cur = sortedArray[i];
    const next = cur + 1;

    if (cur + 1 !== sortedArray[i + 1]) {
      return next;
    }
  }

  return 0;
}

console.log(permMissingElement([2, 3, 1, 5]));

// fn permMissingElement
// takes in an array argument of numbers with exactly one element missing.
// return the missing element
// sort the array.
// for each value in the array, check if the next value is equal to the current value + 1.
// return when query evaluates to false.

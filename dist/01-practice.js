"use strict";
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
// Write a function:
//     function solution(N);
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
//         N is an integer within the range [1..2,147,483,647].
// fn binaryGapSolution
// takes in a number
// returns a number indicating the longest binary gap. consecutive zeros with 1 as prefix and suffix.
// convert num to binary
// iterate through the string to get 1.
// continue adding the input to the gaps array till you get another 1
// return the longest element gap
const binaryGapSolution = (num) => {
    const binary = num.toString(2);
    const zeros = [];
    let current = '';
    for (let i = 0; i < binary.length; i++) {
        const x = binary[i];
        if (x === '0') {
            current += 0;
        }
        else {
            zeros.push(current);
            current = '';
        }
    }
    console.log(zeros);
    return Math.max(...zeros.map((v) => v.length));
};
// console.log(binaryGapSolution(9), 2);
// console.log(binaryGapSolution(1041), 5);
// console.log(binaryGapSolution(529), 4);
// console.log(binaryGapSolution(20), 1);
// console.log(binaryGapSolution(15), 0);
// console.log(binaryGapSolution(32), 0);
// An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
// Write a function:
//     class Solution { public int[] solution(int[] A, int K); }
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
// For example, given
//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given
//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]
// Given
//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]
// Assume that:
//         N and K are integers within the range [0..100];
//         each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
const rotateArraySolution = (arr, k) => {
    const n = arr.length;
    const rotations = k % n;
    return arr.slice(-rotations).concat(arr.slice(0, -rotations));
};
const rotateArraySolutionRecursively = (arr, k) => {
    if (k === 0)
        return arr;
    const newArr = rotateArr(arr);
    return rotateArraySolutionRecursively(newArr, k - 1);
};
const rotateArr = (arr) => {
    if (arr.length === 0)
        return arr;
    const last = arr.pop();
    if (last !== undefined) {
        arr.unshift(last);
    }
    return arr;
};
// console.log(rotateArraySolutionRecursively([3, 8, 9, 7, 6], 3));
// A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.
// For example, in array A such that:
//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
//         the elements at indexes 0 and 2 have value 9,
//         the elements at indexes 1 and 3 have value 3,
//         the elements at indexes 4 and 6 have value 9,
//         the element at index 5 has value 7 and is unpaired.
// Write a function:
//     class Solution { public int solution(int[] A); }
// that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.
// For example, given array A such that:
//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7, as explained in the example above.
// Write an efficient algorithm for the following assumptions:
//         N is an odd integer within the range [1..1,000,000];
//         each element of array A is an integer within the range [1..1,000,000,000];
//         all but one of the values in A occur an even number of times.
const oddOccurencesSolution = (arr) => {
    // const map: { [key: number]: number } = {};
    // for (const num of arr) {
    //   if (map[num]) {
    //     map[num]++;
    //   } else {
    //     map[num] = 1;
    //   }
    // }
    // console.log(map);
    // for (const num in map) {
    //   if (map[num] === 1) {
    //     return Number(num);
    //   }
    // }
    // return 0;
    let unpaired = 0;
    for (const num of arr) {
        unpaired ^= num;
    }
    return unpaired;
};
// console.log(oddOccurencesSolution([9, 3, 9, 3, 9, 7, 9]));
// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
// Write a function:
//     function solution(N);
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
//         N is an integer within the range [1..2,147,483,647].
// fn binaryGapSolution2
// takes in a number
// return the length of its longest binary gap.
// convert num to binary.
// iterate through binary.
// if i === '0', add to current.
// else, push current to zeros and set current to empty strings
// convert zeros elements to numbers and return the highest
const binaryGapSolution2 = (num) => {
    const binary = num.toString(2);
    const zeros = [];
    let current = '';
    for (const value of binary) {
        if (value === '0') {
            current += value;
        }
        else {
            zeros.push(current.length);
            current = '';
        }
    }
    return Math.max(...zeros);
};
// console.log(binaryGapSolution2(9), 2);
// console.log(binaryGapSolution2(1041), 5);
// console.log(binaryGapSolution2(529), 4);
// console.log(binaryGapSolution2(20), 1);
// console.log(binaryGapSolution2(15), 0);
// console.log(binaryGapSolution2(32), 0);
// An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).
// The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.
// Write a function:
//     class Solution { public int[] solution(int[] A, int K); }
// that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.
// For example, given
//     A = [3, 8, 9, 7, 6]
//     K = 3
// the function should return [9, 7, 6, 3, 8]. Three rotations were made:
//     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
//     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
//     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
// For another example, given
//     A = [0, 0, 0]
//     K = 1
// the function should return [0, 0, 0]
// Given
//     A = [1, 2, 3, 4]
//     K = 4
// the function should return [1, 2, 3, 4]
// Assume that:
//         N and K are integers within the range [0..100];
//         each element of array A is an integer within the range [−1,000..1,000].
// In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
// fn rotateArrSolution
// takes in an array of numbers and k - number of rotations to be made to arr
// returns a arr with the values rotated
// cut the end of the array and add it to the start
const rotateArrSolution = (arr, k) => {
    if (k === 0)
        return arr;
    const newArr = rotateArr2(arr);
    return rotateArrSolution(newArr, k - 1);
};
const rotateArr2 = (arr) => {
    const pop = arr.pop();
    if (pop) {
        arr.unshift(pop);
    }
    return arr;
};
console.log(rotateArrSolution([3, 8, 9, 7, 6], 3));

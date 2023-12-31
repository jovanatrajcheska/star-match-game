const utils = {

  // sum in arr
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),

  // choose from
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // random number
  random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  // generating a random sum from available nums
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};   

export default utils;

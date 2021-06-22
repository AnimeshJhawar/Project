/* eslint-disable no-plusplus */
export default function getLifeArr(arrSize, lowLim, upLim, avg) {
  const n = arrSize;
  const a = lowLim;
  const b = upLim;
  let total = (avg - a) * n;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(a);
  }
  const randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const min = function (ai, bi) {
    if (ai < bi) {
      return ai;
    }
    return bi;
  };
  for (let i = 0; i < n * 10 && total > 0; i++) {
    let num = randomNumber(0, min(total, b - a));
    if (total === 1) {
      num = 1;
    }
    if (arr[i % n] + num <= b) {
      arr[i % n] += num;
      total -= num;
    }
  }
  arr = arr.sort(() => Math.random() - 0.5);
  return arr;
}
const print = function (arr) {
  const n = arr.length;
  console.log(arr.toString());
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  console.log(sum / n);
};
const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
print(getLifeArr(15, 2, 8, 4));
print(getLifeArr(15, 2, 32, 16));
print(getLifeArr(15, 2, 64, 32));
for (let i = 0; i < 100; i++) {
  console.log(randomNumber(1, 4));
}

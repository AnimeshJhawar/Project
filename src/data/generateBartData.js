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
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const min = (ai, bi) => {
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

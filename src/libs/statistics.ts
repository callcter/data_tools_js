export function arraySum(arr: any[]) {
  const sum = arr.reduce((total, current) => {
    return total + current;
  }, 0);
  return sum;
}

/**
 * 分位点
 * @param {*} pos 位置
 * @param {*} len 长度
 * @param {*} lst 数组
 * @returns { 最大、最小、平均、长度、各分位点的值 }
 */
export function quartileVal(pos: number, len: number, lst: any[]) {
  const k = pos * (len + 1);
  if (Number.isInteger(k)) {
    return lst[k + 1];
  } else {
    const lI = Math.floor(k) - 1;
    const uI = Math.ceil(k) - 1;
    return (lst[lI] + lst[uI]) / 2;
  }
}

export function quartile(arr: any[]) {
  const arrTemp = [...arr];
  arrTemp.sort((a, b) => a - b);
  const len = arrTemp.length;
  return {
    min: arrTemp[0],
    max: arrTemp[len - 1],
    p05: quartileVal(0.05, len, arrTemp),
    p10: quartileVal(0.1, len, arrTemp),
    p15: quartileVal(0.15, len, arrTemp),
    p20: quartileVal(0.2, len, arrTemp),
    p25: quartileVal(0.25, len, arrTemp),
    p50: quartileVal(0.5, len, arrTemp),
    p75: quartileVal(0.75, len, arrTemp),
    p80: quartileVal(0.8, len, arrTemp),
    p85: quartileVal(0.85, len, arrTemp),
    p90: quartileVal(0.9, len, arrTemp),
    p95: quartileVal(0.95, len, arrTemp),
    len,
    mean: arraySum(arrTemp) / len,
  };
}

export function calculateIntervalDistribution(array: any[], numIntervals: number) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const step = (max - min) / numIntervals;
  const distribution = new Array(numIntervals).fill(0);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === max) {
      distribution[numIntervals - 1]++;
    } else {
      const index = Math.floor((value - min) / step);
      distribution[index]++;
    }
  }

  return { distribution, step };
}
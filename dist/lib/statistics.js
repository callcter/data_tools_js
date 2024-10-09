"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySum = arraySum;
exports.quartileVal = quartileVal;
exports.quartile = quartile;
exports.calculateIntervalDistribution = calculateIntervalDistribution;
function arraySum(arr) {
    var sum = arr.reduce(function (total, current) {
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
function quartileVal(pos, len, lst) {
    var k = pos * (len + 1);
    if (Number.isInteger(k)) {
        return lst[k + 1];
    }
    else {
        var lI = Math.floor(k) - 1;
        var uI = Math.ceil(k) - 1;
        return (lst[lI] + lst[uI]) / 2;
    }
}
function quartile(arr) {
    var arrTemp = __spreadArray([], arr, true);
    arrTemp.sort(function (a, b) { return a - b; });
    var len = arrTemp.length;
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
        len: len,
        mean: arraySum(arrTemp) / len,
    };
}
function calculateIntervalDistribution(array, numIntervals) {
    var min = Math.min.apply(Math, array);
    var max = Math.max.apply(Math, array);
    var step = (max - min) / numIntervals;
    var distribution = new Array(numIntervals).fill(0);
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (value === max) {
            distribution[numIntervals - 1]++;
        }
        else {
            var index = Math.floor((value - min) / step);
            distribution[index]++;
        }
    }
    return { distribution: distribution, step: step };
}
//# sourceMappingURL=statistics.js.map
import { isNumber } from './dataType';
export function formatNum(num, except, scale) {
    if (except === void 0) { except = null; }
    if (scale === void 0) { scale = 2; }
    if (num || num === 0) {
        if (isNumber(num)) {
            if (Math.abs(num) >= 1000000000000) {
                return (num / 1000000000000).toFixed(scale) + ' 万亿';
            }
            else if (Math.abs(num) >= 100000000) {
                return (num / 100000000).toFixed(scale) + ' 亿';
            }
            else if (Math.abs(num) >= 10000) {
                return (num / 10000).toFixed(scale) + ' 万';
            }
            else {
                return num.toFixed(scale);
            }
        }
        else {
            return num;
        }
    }
    else {
        return except;
    }
}
export function formatPercent(num, except, scale) {
    if (except === void 0) { except = null; }
    if (scale === void 0) { scale = 2; }
    if (num || num === 0) {
        if (isNumber(num)) {
            return num.toFixed(scale) + '%';
        }
        else {
            return num;
        }
    }
    else {
        return except;
    }
}
//# sourceMappingURL=format.js.map
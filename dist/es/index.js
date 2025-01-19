var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as format from './format';
import * as statistics from './statistics';
import * as transform from './transform';
import * as dataType from './dataType';
import * as finance from './finance';
export var formatNum = format.formatNum;
export var formatPercent = format.formatPercent;
export var arraySum = statistics.arraySum;
export var quartileVal = statistics.quartileVal;
export var quartile = statistics.quartile;
export var calculateIntervalDistribution = statistics.calculateIntervalDistribution;
export var list2Dict = transform.list2Dict;
export var list2Tree = transform.list2Tree;
export var tree2List = transform.tree2List;
export var getTypeOfVariable = dataType.getTypeOfVariable;
export var isNumber = dataType.isNumber;
export var format_rpd_cn = finance.format_rpd_cn;
export default __assign(__assign(__assign(__assign(__assign({}, format), statistics), transform), dataType), finance);
//# sourceMappingURL=index.js.map
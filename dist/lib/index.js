"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.getTypeOfVariable = exports.tree2List = exports.list2Tree = exports.list2Dict = exports.calculateIntervalDistribution = exports.quartile = exports.quartileVal = exports.arraySum = exports.formatPercent = exports.formatNum = void 0;
var format = __importStar(require("./format"));
var statistics = __importStar(require("./statistics"));
var transform = __importStar(require("./transform"));
var dataType = __importStar(require("./dataType"));
exports.formatNum = format.formatNum;
exports.formatPercent = format.formatPercent;
exports.arraySum = statistics.arraySum;
exports.quartileVal = statistics.quartileVal;
exports.quartile = statistics.quartile;
exports.calculateIntervalDistribution = statistics.calculateIntervalDistribution;
exports.list2Dict = transform.list2Dict;
exports.list2Tree = transform.list2Tree;
exports.tree2List = transform.tree2List;
exports.getTypeOfVariable = dataType.getTypeOfVariable;
exports.isNumber = dataType.isNumber;
exports.default = __assign(__assign(__assign(__assign({}, format), statistics), transform), dataType);
//# sourceMappingURL=index.js.map
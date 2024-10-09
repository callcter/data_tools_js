import * as format from './format';
import * as statistics from './statistics';
import * as transform from './transform';
import * as dataType from './dataType';
export declare const formatNum: typeof format.formatNum;
export declare const formatPercent: typeof format.formatPercent;
export declare const arraySum: typeof statistics.arraySum;
export declare const quartileVal: typeof statistics.quartileVal;
export declare const quartile: typeof statistics.quartile;
export declare const calculateIntervalDistribution: typeof statistics.calculateIntervalDistribution;
export declare const list2Dict: typeof transform.list2Dict;
export declare const list2Tree: typeof transform.list2Tree;
export declare const tree2List: typeof transform.tree2List;
export declare const getTypeOfVariable: typeof dataType.getTypeOfVariable;
export declare const isNumber: typeof dataType.isNumber;
declare const _default: {
    isNumber(n: any): boolean;
    getTypeOfVariable(variable: any): string;
    list2Dict(lst: any[], key: string, contentKey: string | undefined): any;
    list2Tree(listData: any[], options?: {
        key: string;
        parent: string;
    }): any[];
    tree2List(treeData: any[], options?: {
        key: string;
        parent: string;
    }): any[];
    arraySum(arr: number[]): number;
    quartileVal(pos: number, len: number, lst: any[]): number;
    quartile(arr: any[]): any;
    calculateIntervalDistribution(array: any[], numIntervals: number): any;
    formatNum(num: any, except?: null, scale?: number): any;
    formatPercent(num: any, except?: null, scale?: number): any;
};
export default _default;

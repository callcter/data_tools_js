import * as format from './libs/format';
import * as statistics from './libs/statistics';
import * as transform from './libs/transform';
import * as type from './libs/type';
export declare const formatNum: typeof format.formatNum;
export declare const formatPercent: typeof format.formatPercent;
export declare const arraySum: typeof statistics.arraySum;
export declare const quartileVal: typeof statistics.quartileVal;
export declare const quartile: typeof statistics.quartile;
export declare const calculateIntervalDistribution: typeof statistics.calculateIntervalDistribution;
export declare const list2Dict: typeof transform.list2Dict;
export declare const list2Tree: typeof transform.list2Tree;
export declare const tree2List: typeof transform.tree2List;
export declare const getTypeOfVariable: typeof type.getTypeOfVariable;
export declare const isNumber: typeof type.isNumber;
declare const _default: {
    isNumber(n: any): boolean;
    getTypeOfVariable(variable: any): string;
    list2Dict(lst: any[], key: string, contentKey: string | undefined): any;
    list2Tree(listData: any[], options?: {
        key: string;
        parent: string;
    }): unknown[];
    tree2List(treeData: any[], options?: {
        key: string;
        parent: string;
    }): any[];
    arraySum(arr: any[]): any;
    quartileVal(pos: number, len: number, lst: any[]): any;
    quartile(arr: any[]): {
        min: any;
        max: any;
        p05: any;
        p10: any;
        p15: any;
        p20: any;
        p25: any;
        p50: any;
        p75: any;
        p80: any;
        p85: any;
        p90: any;
        p95: any;
        len: number;
        mean: number;
    };
    calculateIntervalDistribution(array: any[], numIntervals: number): {
        distribution: any[];
        step: number;
    };
    formatNum(num: any, except?: null, scale?: number): any;
    formatPercent(num: any, except?: null, scale?: number): any;
};
export default _default;

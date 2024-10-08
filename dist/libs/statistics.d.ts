export declare function arraySum(arr: any[]): any;
/**
 * 分位点
 * @param {*} pos 位置
 * @param {*} len 长度
 * @param {*} lst 数组
 * @returns { 最大、最小、平均、长度、各分位点的值 }
 */
export declare function quartileVal(pos: number, len: number, lst: any[]): any;
export declare function quartile(arr: any[]): {
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
export declare function calculateIntervalDistribution(array: any[], numIntervals: number): {
    distribution: any[];
    step: number;
};

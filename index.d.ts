export function isNumber(n: any): n is number;

export function formatNum(num: any, except?: any, scale?: number): string | typeof except;

export function formatPercent(num: any, except?: any, scale?: number): string | typeof except;
import * as format from './libs/format';
import * as statistics from './libs/statistics';
import * as transform from './libs/transform';
import * as type from './libs/type';

export const formatNum = format.formatNum;
export const formatPercent = format.formatPercent;
export const arraySum = statistics.arraySum;
export const quartileVal = statistics.quartileVal;
export const quartile = statistics.quartile;
export const calculateIntervalDistribution = statistics.calculateIntervalDistribution;
export const list2Dict = transform.list2Dict;
export const list2Tree = transform.list2Tree;
export const tree2List = transform.tree2List;
export const getTypeOfVariable = type.getTypeOfVariable;
export const isNumber = type.isNumber;

export default {
  ...format,
  ...statistics,
  ...transform,
  ...type,
};

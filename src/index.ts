import * as format from './format';
import * as statistics from './statistics';
import * as transform from './transform';
import * as dataType from './dataType';
import * as finance from './finance'

export const formatNum = format.formatNum;
export const formatPercent = format.formatPercent;
export const arraySum = statistics.arraySum;
export const quartileVal = statistics.quartileVal;
export const quartile = statistics.quartile;
export const calculateIntervalDistribution = statistics.calculateIntervalDistribution;
export const list2Dict = transform.list2Dict;
export const list2Tree = transform.list2Tree;
export const tree2List = transform.tree2List;
export const getTypeOfVariable = dataType.getTypeOfVariable;
export const isNumber = dataType.isNumber;
export const format_rpd_cn = finance.format_rpd_cn;

export default {
  ...format,
  ...statistics,
  ...transform,
  ...dataType,
  ...finance,
};

import * as format from './src/format.js';
import * as transform from './src/transform.js';
import * as type from './src/type.js';

export const formatNum = format.formatNum;
export const formatPercent = format.formatPercent;
export const list2Dict = transform.list2Dict;
export const list2Tree = transform.list2Tree;
export const tree2List = transform.tree2List;
export const getTypeOfVariable = type.getTypeOfVariable;
export const isNumber = type.isNumber;

export default {
  ...format,
  ...transform,
  ...type,
};

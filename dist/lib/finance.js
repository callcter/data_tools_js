"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format_rpd_cn = format_rpd_cn;
var dict_md_bgq = {
    '03-31': '一季报',
    '06-30': '半年报',
    '09-30': '三季报',
    '12-31': '年报'
};
var dict_md_djd = {
    '03-31': '一季度',
    '06-30': '二季度',
    '09-30': '三季度',
    '12-31': '四季度'
};
function format_rpd_cn(rpd, is_djd) {
    if (is_djd === void 0) { is_djd = false; }
    var y = rpd.substring(0, 4);
    var md = rpd.substring(5, 10);
    var dict = is_djd ? dict_md_djd : dict_md_bgq;
    return "".concat(y).concat(dict[md]);
}
//# sourceMappingURL=finance.js.map
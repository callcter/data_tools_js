"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
exports.getTypeOfVariable = getTypeOfVariable;
function isNumber(n) {
    return typeof n === 'number' && !isNaN(n) && Number.isFinite(n);
}
function getTypeOfVariable(variable) {
    try {
        var _type = Object.prototype.toString.call(variable);
        var res_match = _type.match(/\[object (\w+)]/);
        if (res_match) {
            _type = res_match[1].toLowerCase();
        }
        else {
            return 'none';
        }
        if (_type === 'generatorfunction') {
            return 'generator';
        }
        return _type;
    }
    catch (err) {
        console.warn(err);
        return 'catch';
    }
}
//# sourceMappingURL=dataType.js.map
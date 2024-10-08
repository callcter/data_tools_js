export function isNumber(n: any) {
  return typeof n === 'number' && !isNaN(n) && Number.isFinite(n);
}

export function getTypeOfVariable(variable: any) {
  try {
    let _type = Object.prototype.toString.call(variable);
    const res_match = _type.match(/\[object (\w+)]/);
    if (res_match) {
      _type = res_match[1].toLowerCase();
    } else {
      return 'none';
    }

    if (_type === 'generatorfunction') {
      return 'generator'
    }
    return _type;
  } catch (err) {
    console.warn(err);
    return 'catch';
  }
}

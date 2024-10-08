export function isNumber(n) {
  return typeof n === 'number' && !isNaN(n) && Number.isFinite(n);
}

export function getTypeOfVariable(variable) {
  try {
    let type = Object.prototype.toString.call(variable);
    const res_match = type.match(/\[object (\w+)]/);
    type = res_match[1].toLowerCase();

    if (type === 'generatorfunction') {
      return 'generator'
    }
    return type;
  } catch (err) {
    console.warn(err);
    return 'catch';
  }
}

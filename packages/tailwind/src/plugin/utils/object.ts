export const isEmptyObject = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const isValidObject = (obj: object) => {
  return obj && !isEmptyObject(obj);
};
export const isPlainObject = (value: any): value is object => {
  if (value == null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

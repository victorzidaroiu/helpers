export function pathOr(object, defaultValue, ...keys) {
  return keys.reduce((obj, key) => (obj || {})[key], object) || defaultValue;
}

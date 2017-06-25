export default (object, defaultValue, ...keys) =>
  keys.reduce((obj, key) => (obj || {})[key], object) || defaultValue;

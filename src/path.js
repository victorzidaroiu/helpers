export function path(object, ...keys) {
  return keys.reduce((obj, key) => (obj || {})[key], object);
}

export default (object, ...keys) => keys.reduce((obj, key) => (obj || {})[key], object);

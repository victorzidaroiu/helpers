import decapitalize from './decapitalize';
import capitalize from './capitalize';

const camelize = prop => decapitalize(prop.split('_').map(word => capitalize(word)).join(''));

export default {
  camelize,
};

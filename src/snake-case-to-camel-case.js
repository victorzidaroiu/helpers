import { decapitalize } from './decapitalize';
import { capitalize } from './capitalize';

export function snakeCaseToCamelCase(string = '') {
  const capitalizedWords = string.split('_').map(word => capitalize(word));

  return decapitalize(capitalizedWords.join(''));
}

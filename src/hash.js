import crypto from 'crypto';

export default data => crypto.createHash('sha512').update(data).digest('hex');

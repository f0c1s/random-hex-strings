import { randomBytes } from 'crypto';

const bytes = (n: number) => {
    n = Math.floor(n);
    const min = n >= 0 ? n : 0;
    return randomBytes(min);
};

const strings = (n: number) => bytes(n).toString('hex').slice(0, n);

export default strings;

export const random8Bit = () => Math.floor(Math.random() * 256);

export const trueMod = (n, m) => ((n % m) + m) % m;

export const getOrDefault = (obj, key, defaultValue = null) =>
  key in obj ? obj[key] : defaultValue;

export const getOrCreate = (obj, key, defaultValue) => {
  if (key in obj) return obj[key];

  obj[key] = defaultValue;
  return defaultValue;
};

export const ensureIsNotInput = event => {
  return event.target.tagName.toLowerCase() !== 'input';
};

export const fireHotKey = (e, callback) => {
  if (ensureIsNotInput(e)) {
    e.preventDefault();
    callback();
  }
};

export const padArray = (array, value, newLength) => {
  const length = array.length;
  const filler = Array(newLength - length).fill(value);
  return array.concat(filler);
};

export const convertToCharCodeArray = string => {
  return string.split('').map(ch => ch.charCodeAt(0));
};

export const convertToString = charCodeArray => {
  return charCodeArray.map(code => String.fromCharCode(Math.floor(code))).join('');
};

export const quickStringHash = string => {
  let hash = 0;

  if (string.length === 0) return hash;

  for (const ch of string.split('')) {
    hash = (hash << 5) - hash + ch.charCodeAt();
    hash = hash & hash;
  }

  return hash;
};

export const longestItem = array =>
  array.reduce((acc, cur) => {
    return cur.length > acc ? cur.length : acc;
  }, 0);

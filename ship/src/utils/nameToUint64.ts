export function charToValue(c:string) {
  if (c === '.') return 0n;
  else if (c >= '1' && c <= '5') return BigInt(c.charCodeAt(0) - '1'.charCodeAt(0) + 1);
  else if (c >= 'a' && c <= 'z') return BigInt(c.charCodeAt(0) - 'a'.charCodeAt(0) + 6);
  else throw new Error(`Invalid character '${c}' in name`);
}

export function nameToUint64(name:string) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  if (name.length > 13) {
    throw new Error('Name cannot be more than 13 characters');
  }

  let value = 0n;
  let i = 0;
  for (; i < name.length && i < 12; i++) {
    // For the first 12 characters, shift left 5 bits and add the character value
    value <<= 5n;
    value |= charToValue(name[i]) & 0x1fn;
  }

  // Adjust the value if name has fewer than 12 characters
  value <<= (5n * BigInt(12 - i));

  
  if (i < name.length) {
    // For the 13th character, shift left 4 bits and add the character value
    value <<= 4n;
    value |= charToValue(name[i]) & 0x0fn;
  } else {
    // If no 13th character, shift the remaining bits
    value <<= 4n;
  }
  return value;
}



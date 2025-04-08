

async function sha256(message:string) {
  // Convert the string to an ArrayBuffer
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  
  // Generate the hash using the SubtleCrypto interface
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
  // Convert the ArrayBuffer to a hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
    
  return hashHex;
}

// Example usage
export async function getSHA256Hash(value:string):Promise<string | null> {
  
  try {
    const hash = await sha256(value);
    return hash;
  } catch (error) {
    console.error("Error generating hash:", error);
  }
  return null
}

export function toEOSIOSha256(sha256Key: string): string {
  const part1 = sha256Key.substring(0, 32);
  const part2 = sha256Key.substring(32);

  // Reverse the bytes of each part
  const reversedPart1 = Buffer.from(part1, 'hex').reverse();
  const reversedPart2 = Buffer.from(part2, 'hex').reverse();

  // Reconvert the parts to strings
  const reversedString1 = reversedPart1.toString('hex');
  const reversedString2 = reversedPart2.toString('hex');

  // Combine the two parts
  return reversedString1 + reversedString2;
}

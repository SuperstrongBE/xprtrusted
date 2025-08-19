import {createHash} from "node:crypto";

export const getSHA256Hash = async (input: string) => {
  const hash = createHash("SHA-256").update(input).digest("hex");
  return hash;
};

export function toEOSIOSha256(sha256Key: string): string {
  const part1 = sha256Key.substring(0, 32);
  const part2 = sha256Key.substring(32);

  // Reverse the bytes of each part
  const reversedPart1 = Buffer.from(part1, "hex").reverse();
  const reversedPart2 = Buffer.from(part2, "hex").reverse();

  // Reconvert the parts to strings
  const reversedString1 = reversedPart1.toString("hex");
  const reversedString2 = reversedPart2.toString("hex");

  // Combine the two parts
  return reversedString1 + reversedString2;
}

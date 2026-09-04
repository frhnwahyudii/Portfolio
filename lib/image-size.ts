import fs from "node:fs";
import path from "node:path";

export interface ImageSize {
  width: number;
  height: number;
}

/**
 * Reads the intrinsic dimensions of an image inside `public/`.
 * Supports PNG (IHDR) and JPEG (SOF marker). Only used in Server Components
 * during static generation, so no client bundle impact.
 */
export function getLocalImageSize(src: string): ImageSize {
  const filePath = path.join(process.cwd(), "public", src.replace(/^\//, ""));

  let buffer: Buffer;
  try {
    buffer = fs.readFileSync(filePath);
  } catch {
    return { width: 1600, height: 900 };
  }

  // PNG — width/height at bytes 16–23 of the IHDR chunk.
  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  // JPEG — scan markers for a Start Of Frame segment.
  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }
      const marker = buffer[offset + 1];
      // Skip standalone / restart markers without length.
      if (
        marker === 0x01 ||
        (marker >= 0xd0 && marker <= 0xd9)
      ) {
        offset += 2;
        continue;
      }
      if (
        marker >= 0xc0 &&
        marker <= 0xcf &&
        marker !== 0xc4 &&
        marker !== 0xc8 &&
        marker !== 0xcc
      ) {
        return {
          height: buffer.readUInt16BE(offset + 5),
          width: buffer.readUInt16BE(offset + 7),
        };
      }
      const length = buffer.readUInt16BE(offset + 2);
      offset += 2 + length;
    }
  }

  return { width: 1600, height: 900 };
}

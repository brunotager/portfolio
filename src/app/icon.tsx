import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  const imagePath = join(process.cwd(), 'public/images/bruno-profile-about.jpg');
  const buffer = readFileSync(imagePath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        }}
      >
        <img
          src={arrayBuffer as any}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover' 
          }}
        />
      </div>
    ),
    { ...size }
  );
}

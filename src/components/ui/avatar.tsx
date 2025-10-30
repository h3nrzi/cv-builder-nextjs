import { UserRound } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

function randomColor() {
  const colorArray = ['var(--navy)', 'var(--pink)', 'var(--red)', 'var(--blue)', 'var(--green)'];
  return colorArray[Math.floor(Math.random() * colorArray.length)];
}

interface TypeRenderAvatar {
  src: string;
  children?: React.ReactNode;
}

function renderAvatar(props: TypeRenderAvatar) {
  if (props.src && typeof props.src === 'string' && props.src.includes('.png')) {
    return (
      <div className="avatar avatar-letters" style={{ backgroundColor: 'white' }}>
        <Image loading='eager' src={props.src}  width={500} height={500} className="p-4 rounded-full" alt={`Avatar`} />
      </div>
    );
  } else if (props.children) {
    return (
      <div className="avatar avatar-letters" style={{ backgroundColor: randomColor() }}>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className="avatar avatar-icon" style={{ backgroundColor: randomColor() }}>
        <UserRound />
      </div>
    );
  }
}

export default function Avatar(props: TypeRenderAvatar) {
  return renderAvatar(props);
}

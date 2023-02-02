import React from 'react';
import { LogoIcon } from './LogoIcon';

interface Props {
  className?: string;
}

export const Logo = ({ className = '' }: Props) => {
  return (
    <span className={`${className} flex items-center gap-3`}>
      <LogoIcon className={`w-5 h-fit`} />
      <span className={'font-bold text-xl'}>Sira</span>
    </span>
  );
};

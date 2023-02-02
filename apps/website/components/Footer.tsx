import Link from 'next/link';
import React from 'react';
import { LogoIcon } from './LogoIcon';
import nextSeoConfig from '../next-seo.config';

export const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="grid xl:grid-cols-4 gap-10 place-items-stretch">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <LogoIcon className={'w-8 h-fit'} />
            <span className="whitespace-nowrap text-2xl font-semibold">Sira UI</span>
            <Link
              className="only-one-line sm badge primary light !no-underline"
              target={'_blank'}
              href={'https://www.riccox.com/projects'}
            >
              One of Riccox projects 🥇
            </Link>
          </div>
          <p className="text-sm">{nextSeoConfig.description}</p>
          <p className="text-xs">
            Powered by <Link href={'https://www.riccox.com'}>Ricco Xie</Link>. All rights reserved. Copyright © Since
            2023
          </p>
        </div>
        <div className="text-center">
          <h2 className="pb-4 text-sm font-semibold uppercase">Resources</h2>
          <ul className="flex flex-col gap-4 text-xs text-bw-1000/80">
            <li>
              <Link href="/docs/guide/installation">Get Started</Link>
            </li>
            <li>
              <Link href="/docs/guide/customization">Customization</Link>
            </li>
            <li>
              <Link href="/docs/components/overview">Components</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="pb-4 text-sm font-semibold uppercase">Links</h2>
          <ul className="flex flex-col gap-4 text-xs text-bw-1000/80">
            <li>
              <Link href="https://github.com/riccox/sira" target="_blank">
                Open Source
              </Link>
            </li>
            <li>
              <Link href="https://github.com/riccox/sira/issues/new" target="_blank">
                Report issue
              </Link>
            </li>
            <li>
              <Link href="https://github.com/riccox/sira/blob/main/LICENSE" target={'_blank'}>
                License
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

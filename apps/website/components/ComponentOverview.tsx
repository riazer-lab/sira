import React, { ReactNode } from 'react';
import Link from 'next/link';

export const ComponentOverviewCard = ({
  component,
  name,
  href,
}: {
  component: ReactNode;
  name: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className={`rounded-2xl has-border flex flex-col overflow-hidden hover:!no-underline bg-bw-50 group hover:border-primary-600`}
    >
      <div
        className={`flex items-center text-xl font-bold px-6 py-3 bg-bw-100/30 text-bw-1000 row-span-full group-hover:underline`}
      >
        {name}
      </div>
      <div
        className={`flex-1 flex flex-wrap justify-center items-center gap-2 px-6 py-4 has-border !border-x-0 !border-b-0`}
      >
        {component}
      </div>
    </Link>
  );
};

import Link from 'next/link';
import { useMemo } from 'react';
import tailwind from '@sira-ui/tailwind/package.json';

export const ExtraHeader = () => {
  const siraVersionTag = `v${tailwind.version}`;

  return useMemo(() => {
    if (siraVersionTag) {
      return (
        <Link
          target={'_blank'}
          href={tailwind.repository.url
            .replace(/^(.+)http/, 'http')
            .replace(/(\.git)$/, `/releases/tag/${siraVersionTag}`)}
          className="badge solid primary cornered"
        >
          {siraVersionTag}
        </Link>
      );
    } else {
      return <></>;
    }
  }, [siraVersionTag]);
};

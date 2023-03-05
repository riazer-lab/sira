import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import tailwind from '@sira-ui/tailwind/package.json';

export const ExtraHeader = () => {
  const siraVersionTag = `v${tailwind.version}`;
  // fix hydrate error: Text content does not match server-rendered HTML.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return useMemo(() => {
    if (hydrated && siraVersionTag) {
      return (
        <Link
          target={'_blank'}
          href={tailwind.repository.url
            .replace(/^(.+)http/, 'http')
            .replace(/(\.git)$/, `/releases/tag/${siraVersionTag}`)}
          className="badge solid primary cornered"
        >
          {`Tailwind: ${siraVersionTag}`}
        </Link>
      );
    } else {
      return <></>;
    }
  }, [hydrated, siraVersionTag]);
};

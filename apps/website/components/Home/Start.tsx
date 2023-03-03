import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import i18n from '../../util/i18next';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import Link from 'next/link';

export const Start = () => {
  const { locale } = useRouter();
  const trans = useTranslation('home', { i18n, keyPrefix: 'start' });
  const t = useCallback((k: string, opts?: object) => trans.t(k, { lng: locale, ...opts }), [locale, trans]);
  return useMemo(
    () => (
      <>
        <section className="z-[1] relative py-10 flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={clsx(
              'text-center text-4xl font-bold leading-relaxed',
              'from-success-1000 via-warn-1000 to-danger-1000 bg-gradient-to-br bg-clip-text text-transparent'
            )}
          >
            {t('guide')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={'text-center max-w-2xl font-semibold text-bw-1000/80 break-words'}
          >
            <Link className="btn success solid w-fit" href="/docs/guide/installation">
              {t('btn')}
            </Link>
          </motion.div>
        </section>
      </>
    ),
    [t]
  );
};

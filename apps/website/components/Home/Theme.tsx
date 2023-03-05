import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import i18n from '../../util/i18next';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { CodeBlock } from '../CodeBlock';
import { useTheme } from 'nextra-theme-docs';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const Theme = () => {
  // fix hydrate error: Text content does not match server-rendered HTML.
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  const { resolvedTheme, themes, setTheme } = useTheme();
  const { locale } = useRouter();
  const trans = useTranslation('home', { i18n, keyPrefix: 'theme' });
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
              'from-success-1000 via-warn-1000 to-danger-1000 bg-gradient-to-l bg-clip-text text-transparent'
            )}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={'text-center max-w-2xl font-semibold text-bw-1000/80 break-words'}
          >
            {t('description')}
          </motion.p>
          <div className={'flex flex-col items-center w-full py-16 gap-16'}>
            <motion.div
              initial={{ opacity: 0, y: -100, x: -100 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}
              className="tabs boxed bw pill"
            >
              {hydrated &&
                themes
                  .filter((t) => t !== 'system')
                  .map((t, i) => (
                    <div
                      key={i}
                      className={clsx('tab p-4', t === resolvedTheme && 'active')}
                      onClick={() => setTheme(t)}
                    >
                      {t}
                    </div>
                  ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}
              className={'text-center max-w-2xl break-words font-semibold text-bw-1000/80'}
            >
              {t('tip')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100, x: 100 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ ease: 'easeInOut', duration: 1 }}
            >
              {hydrated && (
                <CodeBlock
                  wrapperClass={clsx('w-72 md:w-80 xl:w-96 has-shadow bolder rounded-xl')}
                  language="html"
                  hideCopy
                >
                  {`
            <html data-theme="${resolvedTheme}" style="color-scheme: ${resolvedTheme};">
            //.........
            </html>
            `}
                </CodeBlock>
              )}
            </motion.div>
          </div>
        </section>
      </>
    ),
    [t, hydrated, themes, resolvedTheme, setTheme]
  );
};

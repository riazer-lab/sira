import { CodeBlock } from '../CodeBlock';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import i18n from '../../util/i18next';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { jsxToHtml } from '../../util/code';
import { ReactNode } from 'react';
import renderToString from 'jsx-to-string';

const Section = ({
  prevCode,
  currentCode,
  demo,
  reverse = false,
}: {
  prevCode: string;
  currentCode?: string;
  demo: ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div
      className={clsx(
        'flex justify-center gap-20 items-center flex-col',
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      )}
    >
      <div className="flex flex-col justify-center">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: -100, x: 100 }}
          whileInView={{ opacity: 1, y: 10, x: 10 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
        >
          <CodeBlock wrapperClass={clsx('w-72 md:w-80 xl:w-96 has-shadow bolder rounded-xl')} language="html" hideCopy>
            {jsxToHtml(currentCode ?? renderToString(demo))}
          </CodeBlock>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, x: -100, filter: 'grayscale(10%)' }}
          whileInView={{ opacity: 0.7, y: -10, x: -10, filter: 'grayscale(80%)' }}
          transition={{ ease: 'easeInOut', duration: 1 }}
        >
          <CodeBlock wrapperClass={clsx('w-72 md:w-80 xl:w-96')} language="html" hideCopy>
            {jsxToHtml(prevCode)}
          </CodeBlock>
        </motion.div>
      </div>
      {demo}
    </div>
  );
};

export const Compare = () => {
  const { locale } = useRouter();
  const trans = useTranslation('home', { i18n, keyPrefix: 'compare' });
  const t = (k: string, opts?: object) => trans.t(k, { lng: locale, ...opts });
  return (
    <>
      <section className="z-[1] relative py-10 flex flex-col items-center gap-6">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className={clsx(
            'text-center text-4xl font-bold',
            'from-primary-1000 to-secondary-1000 bg-gradient-to-r bg-clip-text text-transparent'
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
        <div className={'flex flex-col items-stretch w-full py-16 gap-32'}>
          <Section
            prevCode={`<button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg">
                Click me
              </button>`}
            demo={<button className="btn success solid w-fit">Click me</button>}
          />
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            className={'text-center self-center max-w-2xl break-words font-semibold text-bw-1000/80'}
          >
            {t('replaceTailwind')}
          </motion.p>
          <Section
            prevCode={`<input className='background-transparent border-green-500 text-green-600 rounded-xl w-96 h-10 px-3 py-2' placeholder='hello world' />`}
            currentCode={`<input className='input outline success w-96' placeholder='hello world' />`}
            demo={<input className="!input outline success !w-72 md:!w-60 xl:!w-96" placeholder="hello world" />}
            reverse
          />
        </div>
      </section>
    </>
  );
};

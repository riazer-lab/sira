import { FC, ReactElement, useState } from 'react';
import { CodeBlock } from '../CodeBlock';
import { htmlToJsx, jsxToHtml } from '../../util/code';
import _ from 'lodash';
import renderToString from 'jsx-to-string';
import { useRouter } from 'next/router';
import i18n from '../../util/i18next';
import { useTranslation } from 'react-i18next';

export const CodeDemo: FC<{
  children: ReactElement;
  code?: ReactElement;
  overrideClasses?: string[] | string;
}> = ({ children, code, overrideClasses }) => {
  const { locale } = useRouter();
  const trans = useTranslation('demo', { i18n });
  const t = (k: string, opts?: object) => trans.t(k, { lng: locale, ...opts });

  const [section, setSection] = useState('preview');

  let codeString: string = renderToString(code ?? children);
  if (overrideClasses) {
    const cls = _.isArray(overrideClasses) ? overrideClasses : overrideClasses.replaceAll(/\s/g, ' ').split(' ');
    cls.forEach((c) => {
      codeString = codeString.replaceAll(`!${c}`, c);
    });
  }

  return (
    <div className="">
      <div className="tabs bordered primary">
        <div className={`tab p-4 ${section === 'preview' ? 'active' : ''}`} onClick={() => setSection('preview')}>
          {t('preview')}
        </div>
        <div
          className={`flex items-center gap-2 tab p-4 ${section === 'code-html' ? 'active' : ''}`}
          onClick={() => setSection('code-html')}
        >
          <p> {t('code')}</p>
          <span className="badge sm primary outline">HTML</span>
        </div>
        <div
          className={`flex items-center gap-2 tab p-4 ${section === 'code-jsx-tsx' ? 'active' : ''}`}
          onClick={() => setSection('code-jsx-tsx')}
        >
          <p> {t('code')}</p>
          <span className="badge sm primary outline">JSX/TSX</span>
        </div>
      </div>
      <div className={`border-t border-t-primary-600 p-2`}>
        <div className={`${section === 'preview' ? 'block' : 'hidden'}`}>{children}</div>
        <CodeBlock wrapperClass={`${section === 'code-html' ? 'block' : 'hidden'}`} language="html">
          {jsxToHtml(codeString)}
        </CodeBlock>
        <CodeBlock wrapperClass={`${section === 'code-jsx-tsx' ? 'block' : 'hidden'}`} language="tsx">
          {htmlToJsx(codeString)}
        </CodeBlock>
      </div>
    </div>
  );
};

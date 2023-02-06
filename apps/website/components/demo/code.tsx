import { FC, ReactElement, useState } from 'react';
import { CodeBlock } from '../CodeBlock';
import { htmlToJsx, jsxToHtml } from '../../util/code';
import _ from 'lodash';
import renderToString from 'jsx-to-string';

export const CodeDemo: FC<{
  children: ReactElement;
  code?: ReactElement;
  overrideClasses?: string[] | string;
}> = ({ children, code, overrideClasses }) => {
  const [section, setSection] = useState('demo');

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
        <div className={`tab p-4 ${section === 'demo' ? 'active' : ''}`} onClick={() => setSection('demo')}>
          Demo
        </div>
        <div
          className={`flex items-center gap-2 tab p-4 ${section === 'code-html' ? 'active' : ''}`}
          onClick={() => setSection('code-html')}
        >
          <p>Code</p>
          <span className="badge sm primary outline">HTML</span>
        </div>
        <div
          className={`flex items-center gap-2 tab p-4 ${section === 'code-jsx-tsx' ? 'active' : ''}`}
          onClick={() => setSection('code-jsx-tsx')}
        >
          <p>Code</p>
          <span className="badge sm primary outline">JSX/TSX</span>
        </div>
      </div>
      <div className={`border-t border-t-primary-200 p-2`}>
        <div className={`${section === 'demo' ? 'block' : 'hidden'}`}>{children}</div>
        <CodeBlock blockClass={`${section === 'code-html' ? 'block' : 'hidden'}`} language="html">
          {jsxToHtml(codeString)}
        </CodeBlock>
        <CodeBlock blockClass={`${section === 'code-jsx-tsx' ? 'block' : 'hidden'}`} language="tsx">
          {htmlToJsx(codeString)}
        </CodeBlock>
      </div>
    </div>
  );
};

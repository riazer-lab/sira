import clsx from 'clsx';
import { Highlight, themes } from 'prism-react-renderer';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { MdContentCopy } from 'react-icons/md';
import { useTheme } from 'nextra-theme-docs';
import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';
import js from 'prettier/parser-babel';

interface Props {
  children?: React.ReactNode;
  language?: 'tsx' | 'js' | 'bash' | 'html';
  linesOn?: boolean;
  wrapperClass?: string;
  hideCopy?: boolean;
  overflowMode?: 'scroll' | 'wrap';
}

export const CodeBlock = ({
  wrapperClass,
  hideCopy = false,
  children,
  language = 'tsx',
  linesOn = false,
  overflowMode = 'wrap',
}: Props) => {
  const [_value, copy] = useCopyToClipboard();
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const { resolvedTheme } = useTheme();

  const codeParsed = useMemo(
    () =>
      (typeof children === 'string'
        ? children
        : // @ts-ignore
          children?.props?.children
      )
        .toString()
        .trim(),
    [children]
  );

  // @ts-ignore
  const languageParsed = children?.props?.className
    ? // @ts-ignore
      (children?.props?.className.split('-')[1] as 'html' | 'tsx' | 'js' | 'bash')
    : language;

  const formatCode = useCallback(
    (codeToFormat: string) => {
      const parserPlugin = languageParsed === 'html' ? htmlParser : languageParsed === 'js' ? js : null;
      const parser = languageParsed === 'html' ? 'html' : languageParsed === 'js' ? 'babel' : null;
      if (parser && parserPlugin) {
        return prettier
          .format(codeToFormat, {
            parser: parser,
            plugins: [parserPlugin],
            useTabs: true,
            proseWrap: 'always',
          })
          .trim()
          .replace(/;$/, '');
      }
      return codeToFormat;
    },
    [languageParsed]
  );

  const [code, setCode] = useState<string>(formatCode(codeParsed));
  useEffect(() => {
    setCode(formatCode(codeParsed));
  }, [codeParsed, formatCode]);

  const clickHandler = () => {
    if (!code) return;
    copy(code).then();
    setTooltipText('Copied!');
    setTimeout(() => {
      setTooltipText('Copy to clipboard');
    }, 2000);
  };

  return (
    <>
      <Highlight
        theme={resolvedTheme === 'light' ? themes.oceanicNext : themes.nightOwl}
        code={code}
        // @ts-ignore
        language={languageParsed}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={clsx('relative', wrapperClass)}>
            {!hideCopy && (
              <div
                className={clsx('absolute top-7 right-4 z-20 flex items-center h-0 w-full cursor-pointer justify-end')}
                onClick={clickHandler}
              >
                <span className="tooltip left primary" data-tooltip={tooltipText}>
                  <MdContentCopy className="fill-white" />
                </span>
              </div>
            )}
            <pre
              className={clsx(className, 'max-h-[32rem] overflow-auto p-4 !pr-10 rounded-xl text-left')}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {linesOn && <span className="select-none pr-3 text-right opacity-50">{i + 1}</span>}
                  <span className="">
                    {line.map((token, key) => (
                      <span
                        key={key}
                        {...getTokenProps({
                          token,
                          key,
                          className: clsx(overflowMode === 'wrap' && 'whitespace-pre-wrap break-words'),
                        })}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </>
  );
};

import clsx from 'clsx';
import Highlight, { defaultProps } from 'prism-react-renderer';
import React, { useState } from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { MdContentCopy } from 'react-icons/md';
import js from 'prettier/parser-babel';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import lightTheme from 'prism-react-renderer/themes/oceanicNext';
import { useTheme } from 'nextra-theme-docs';

interface Props {
  children?: React.ReactNode;
  language?: 'tsx' | 'js' | 'bash' | 'html';
  linesOn?: boolean;
  blockClass?: string;
  iconClass?: string;
  hideIcon?: boolean;
  disabledFormat?: boolean;
}

export const CodeBlock = ({
  blockClass,
  iconClass,
  hideIcon = false,
  children,
  language = 'tsx',
  linesOn = false,
}: Props) => {
  const [_value, copy] = useCopyToClipboard();
  const [tooltipText, setTooltipText] = useState('Copy to clipboard');
  const { resolvedTheme } = useTheme();

  const codeParsed =
    typeof children === 'string'
      ? children.toString().trim()
      : // @ts-ignore
        children?.props?.children.toString().trim();

  // @ts-ignore
  const languageParsed = children?.props?.className
    ? // @ts-ignore
      (children?.props?.className.split('-')[1] as 'html' | 'tsx' | 'js' | 'bash')
    : language;
  const [code, _setCode] = useState<string>(codeParsed);

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
        {...defaultProps}
        theme={resolvedTheme === 'light' ? lightTheme : darkTheme}
        code={code}
        // @ts-ignore
        language={languageParsed}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre
              className={clsx(className, 'max-h-[32rem] overflow-auto p-4 !pr-10 rounded-xl text-left', blockClass)}
              style={style}
            >
              {!hideIcon && (
                <div
                  className={clsx(
                    iconClass,
                    'relative top-3 -right-6 z-20 flex items-center h-0 w-full cursor-pointer justify-end'
                  )}
                  onClick={clickHandler}
                >
                  <span className="tooltip left primary" data-tooltip={tooltipText}>
                    <MdContentCopy />
                  </span>
                </div>
              )}
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
                        })}
                      />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>
    </>
  );
};

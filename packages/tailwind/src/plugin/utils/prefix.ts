import postcss, { Declaration, Root, Rule } from 'postcss';
import selectorParser from 'postcss-selector-parser';
const postcssJs = require('postcss-js');

const addPrefix = (prefix: string) => {
  return (css: Root) => {
    css.walkRules((rule: Rule) => {
      rule.selector = selectorParser((selectors: selectorParser.Root) => {
        selectors.walkClasses((classNode: selectorParser.ClassName) => {
          classNode.value = prefix + classNode.value;
        });
      }).processSync(rule.selector);
    });
  };
};

interface CSSObject {
  [key: string]: {
    [key: string]: string;
  };
}

export const getSelectorsWithPrefix = (prefix: string, cssObject: CSSObject): CSSObject => {
  const prefixWithoutSpace = prefix.replace(/\s/g, '');

  const prefixedCSS = postcss([addPrefix(prefixWithoutSpace)]).process(cssObject, {
    parser: postcssJs,
  });

  const prefixedCSSObject: CSSObject = {};
  prefixedCSS.root.walkRules((rule: Rule) => {
    const selector = rule.selector;
    let obj: { [key: string]: string } = {};
    rule.walkDecls((decl: Declaration) => {
      obj[decl.prop] = decl.value;
    });
    prefixedCSSObject[selector] = obj;
  });
  return prefixedCSSObject;
};

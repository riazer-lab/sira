import postcss, { Declaration, Root, Rule } from "postcss";
import selectorParser from "postcss-selector-parser";

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

export const getSelectorsWithPrefix = (
  prefix: string,
  cssObject: CSSObject
): CSSObject => {
  const prefixWithoutSpace = prefix.replace(/\s/g, "");
  let cssCode = "";
  for (let key in cssObject) {
    cssCode += `${key}{`;
    // skip keyframe code
    if (key.indexOf("keyframes") === -1) {
      for (let prop in cssObject[key]) {
        cssCode += `${prop}:${cssObject[key][prop]};`;
      }
    }
    cssCode += `}`;
  }
  const prefixedCSS = postcss([addPrefix(prefixWithoutSpace)]).process(
    cssCode,
    {
      from: undefined,
    }
  );
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

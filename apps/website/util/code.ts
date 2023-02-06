export const htmlToJsx = (code: string) => {
  const regexExpr =
    /\b(class|for|tabindex|autofocus|autocomplete|fill-rule|clip-rule|checked|stroke-linecap|stroke-linejoin|stroke-width|enable-background)\b/g;
  const replacedProps = code.replace(regexExpr, (match) => {
    if (match === 'class') {
      return 'className';
    } else if (match === 'for') {
      return 'htmlFor';
    } else if (match === 'tabindex') {
      return 'tabIndex';
    } else if (match === 'autofocus') {
      return 'autoFocus';
    } else if (match === 'autocomplete') {
      return 'autoComplete';
    } else if (match === 'fill-rule') {
      return 'fillRule';
    } else if (match === 'clip-rule') {
      return 'clipRule';
    } else if (match === 'checked') {
      return 'defaultChecked';
    } else if (match === 'stroke-linecap') {
      return 'strokeLinecap';
    } else if (match === 'stroke-linejoin') {
      return 'strokeLinejoin';
    } else if (match === 'stroke-width') {
      return 'strokeWidth';
    } else if (match === 'enable-background') {
      return 'enableBackground';
    }
    return match.toLowerCase();
  });
  return replacedProps;
};

export const jsxToHtml = (code: string) => {
  const regexExpr =
    /className|htmlFor|tabIndex|autoFocus|autoComplete|fillRule|clipRule|defaultChecked|strokeLinecap|strokeLinejoin|strokeWidth|enableBackground/g;
  const replacedProps = code.replace(regexExpr, (match) => {
    if (match === 'className') {
      return 'class';
    } else if (match === 'htmlFor') {
      return 'for';
    } else if (match === 'tabIndex') {
      return 'tabindex';
    } else if (match === 'fillRule') {
      return 'fill-rule';
    } else if (match === 'clipRule') {
      return 'clip-rule';
    } else if (match === 'defaultChecked') {
      return 'checked';
    } else if (match === 'strokeLinecap') {
      return 'stroke-linecap';
    } else if (match === 'strokeLinejoin') {
      return 'stroke-linejoin';
    } else if (match === 'strokeWidth') {
      return 'stroke-width';
    } else if (match === 'enableBackground') {
      return 'enable-background';
    }
    return match.toLowerCase();
  });

  return replacedProps;
};

import React from 'react';

interface Props {
  position:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'right-top'
    | 'left-bottom'
    | 'right-bottom';
  labelText?: string;
  className?: string;
  divider?: boolean;
  subtitle?: boolean;
  icon?: boolean;
}

export const DropdownDemo = ({
  position = 'bottom',
  subtitle = false,
  divider = false,
  icon = false,
  labelText = 'Open Dropdown',
  className = '',
}: Props) => {
  return (
    <div className={`dropdown success ${className}`}>
      <label className="btn solid" tabIndex={0}>
        {labelText}
      </label>
      <div className={`menu ${position}`}>
        <a className="item text-sm">Profile</a>
        {divider && <div className="is-divider" role="separator"></div>}
        {subtitle && <p className="subtitle">Settings</p>}
        <a className="item text-sm" tabIndex={-1}>
          Account settings
        </a>
        <a className="item text-sm" tabIndex={-1}>
          Subscriptions
        </a>
        {icon && (
          <a className="item text-sm" tabIndex={-1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell-plus-filled"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
                stroke-width="0"
                fill="currentColor"
              ></path>
              <path
                d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004zm0 6a1 1 0 0 0 -1 1v1h-1l-.117 .007a1 1 0 0 0 .117 1.993h1v1l.007 .117a1 1 0 0 0 1.993 -.117v-1h1l.117 -.007a1 1 0 0 0 -.117 -1.993h-1v-1l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                stroke-width="0"
                fill="currentColor"
              ></path>
            </svg>
            <p>Left Icon Item</p>
          </a>
        )}
      </div>
    </div>
  );
};

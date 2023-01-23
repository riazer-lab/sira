import React from "react";

interface Props {
  position:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "left-top"
    | "right-top"
    | "left-bottom"
    | "right-bottom";
  labelText?: string;
  className?: string;
  divider?: boolean;
}

export const DropdownDemo = ({
  position = "bottom",
  divider = false,
  labelText = "Open Dropdown",
  className = "",
}: Props) => {
  return (
    <div className={`dropdown success ${className}`}>
      <label className="btn solid" tabIndex={0}>
        {labelText}
      </label>
      <div className={`menu ${position}`}>
        <a className="item text-sm">Profile</a>
        {divider && <div className="divider" role="separator"></div>}
        <a className="item text-sm" tabIndex={-1}>
          Account settings
        </a>
        <a className="item text-sm" tabIndex={-1}>
          Subscriptions
        </a>
      </div>
    </div>
  );
};

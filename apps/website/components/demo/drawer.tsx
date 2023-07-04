import _ from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';

interface Props {
  position: 'top' | 'bottom' | 'left' | 'right';
  labelText?: string;
  content?: string;

  pauseScroll?: boolean;
  overlay?: boolean;
  overlayClickClose?: boolean;
}

const toggleDrawer = (drawerId: string) => {
  let ele = document.getElementById(drawerId);
  console.log(drawerId, ele);
  let show = ele!.classList.contains('show');
  if (show) {
    ele!.classList.remove('show');
  } else {
    ele!.classList.add('show');
  }
};

export const DrawerDemo = ({
  position = 'left',
  pauseScroll = false,
  overlay = true,
  overlayClickClose = true,
  labelText = 'Open Drawer',
  content = 'Your content',
}: Props) => {
  const drawerId = _.uniqueId('sira-demo-drawer-');

  return (
    <div>
      <label className="btn solid success w-fit" onClick={() => toggleDrawer(drawerId)}>
        {labelText}
      </label>
      {overlay && (
        <label className="drawer-overlay" onClick={overlayClickClose ? () => toggleDrawer(drawerId) : () => {}}></label>
      )}
      <div className={`drawer ${position} ${pauseScroll ? 'pause-scroll' : ''}`} id={drawerId}>
        <div className="content flex flex-col h-full">
          <label className="btn sm circle ghost absolute right-2 top-2" onClick={() => toggleDrawer(drawerId)}>
            ✕
          </label>
          <h2 className="text-xl">{content}</h2>
        </div>
      </div>
    </div>
  );
};

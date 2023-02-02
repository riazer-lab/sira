import _ from 'lodash';
import React, { useCallback, useState } from 'react';

interface Props {
  position: 'top' | 'bottom' | 'left' | 'right';
  labelText?: string;
  content?: string;

  pauseScroll?: boolean;
  overlay?: boolean;
  overlayClickClose?: boolean;
}

export const DrawerDemo = ({
  position = 'left',
  pauseScroll = false,
  overlay = true,
  overlayClickClose = true,
  labelText = 'Open Drawer',
  content = 'Your content',
}: Props) => {
  const [drawerId] = useState(_.uniqueId('sira-demo-drawer-'));

  const toggleDrawer = useCallback(() => {
    let ele = document.getElementById(drawerId);
    let show = ele!.classList.contains('show');
    if (show) {
      ele!.classList.remove('show');
    } else {
      ele!.classList.add('show');
    }
  }, [drawerId]);

  return (
    <div>
      <label className="btn solid success w-fit" onClick={toggleDrawer}>
        {labelText}
      </label>
      {overlay && <label className="drawer-overlay" onClick={overlayClickClose ? toggleDrawer : () => {}}></label>}
      <div className={`drawer ${position} ${pauseScroll ? 'pause-scroll' : ''}`} id={drawerId}>
        <div className="content flex flex-col h-full">
          <label className="btn sm circle ghost absolute right-2 top-2" onClick={toggleDrawer}>
            ✕
          </label>
          <h2 className="text-xl">{content}</h2>
        </div>
      </div>
    </div>
  );
};

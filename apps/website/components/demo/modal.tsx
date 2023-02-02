import React, { useCallback, useState } from 'react';
import _ from 'lodash';

interface Props {
  labelText?: string;
  pauseScroll?: boolean;
  overlay?: boolean;
}

export const ModalDemo = ({ labelText = 'Open Modal', pauseScroll = false, overlay = true }: Props) => {
  const [eleId] = useState(_.uniqueId('sira-demo-modal-'));

  const toggle = useCallback(() => {
    let ele = document.getElementById(eleId);
    let show = ele!.classList.contains('show');
    if (show) {
      ele!.classList.remove('show');
    } else {
      ele!.classList.add('show');
    }
  }, [eleId]);

  return (
    <div>
      <label className="btn success solid" onClick={toggle}>
        {labelText}
      </label>
      {overlay && <label className="modal-overlay" onClick={toggle}></label>}
      <div className={`modal ${pauseScroll ? 'pause-scroll' : ''} flex flex-col gap-5 w-auto xl:w-1/4`} id={eleId}>
        <button className="absolute right-4 top-3" onClick={toggle}>
          ✕
        </button>
        <h2 className="text-xl">Modal title</h2>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum voluptate ratione dicta. Maxime
          cupiditate, est commodi consectetur earum iure, optio, obcaecati in nulla saepe maiores nobis iste quasi
          alias!
        </span>
        <div className="flex gap-3">
          <button className="btn solid danger flex-1">Delete</button>
          <button className="btn solid bw flex-1" onClick={toggle}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

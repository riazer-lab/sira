import { useRouter } from 'next/router';
import React from 'react';
import i18n from '../util/i18next';

interface Props {
  className?: string;
  component: string;
}

export const ClassNameTable = ({ className = '', component }: Props) => {
  const { locale } = useRouter();
  const t = (k: string) => i18n.t(k, { ns: 'classNameTable', lng: locale });

  const classNames = i18n.t(`component.${component}`, { ns: 'classNameTable', lng: locale, returnObjects: true });

  return (
    <>
      <div className={`${className} py-2`}>
        <table className="table bw bordered">
          <thead>
            <tr>
              <th>{t('header.className')}</th>
              <th>{t('header.description')}</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(classNames).map(([name, description]) => (
              <tr>
                <th>{name}</th>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

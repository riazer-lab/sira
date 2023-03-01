import Link from 'next/link';
import { useRouter } from 'next/router';
import { LogoIcon } from './LogoIcon';
import i18n from '../util/i18next';

export const Footer = () => {
  const { locale } = useRouter();
  const t = (k: string) => i18n.t(k, { ns: 'common', lng: locale });
  return (
    <footer className="bg-transparent w-full">
      <div className="grid xl:grid-cols-4 gap-10">
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <LogoIcon className={'w-8 h-fit'} />
            <span className="whitespace-nowrap text-2xl font-semibold">Sira</span>
          </div>
          <p className="text-sm">{t('description')}</p>
          <p className="text-xs">{t('footer.poweredBy')}</p>
        </div>
        <div className="text-center">
          <h2 className="pb-4 text-sm font-semibold uppercase">{t('footer.resources.label')}</h2>
          <ul className="flex flex-col gap-4 text-xs text-bw-1000/80">
            <li>
              <Link href="/docs/guide/installation">{t('footer.resources.start')}</Link>
            </li>
            <li>
              <Link href="/docs/guide/customization">{t('footer.resources.customization')}</Link>
            </li>
            <li>
              <Link href="/docs/components/overview">{t('footer.resources.components')}</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="pb-4 text-sm font-semibold uppercase">{t('footer.links.label')}</h2>
          <ul className="flex flex-col gap-4 text-xs text-bw-1000/80">
            <li>
              <Link href="https://github.com/sira-design/sira" target="_blank">
                {t('footer.links.repo')}
              </Link>
            </li>
            <li>
              <Link href="https://github.com/sira-design/sira/issues/new" target="_blank">
                {t('footer.links.issue')}
              </Link>
            </li>
            <li>
              <Link href="https://github.com/sira-design/sira/blob/main/LICENSE" target={'_blank'}>
                {t('footer.links.license')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

import { DefaultSeoProps } from 'next-seo';
import i18n from './util/i18next';

export default function config(locale?: string) {
  return {
    defaultTitle: 'Sira',
    titleTemplate: `%s - Sira`,
    description: i18n.t('common:description', { lng: locale }) as string,
    additionalLinkTags: [
      {
        rel: 'shortcut icon',
        href: '//assets.riccox.com/sira/logo/plain.svg',
        type: 'image/x-icon',
      },
    ],
  } as DefaultSeoProps;
}

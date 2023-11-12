import nextSeoConfig from './next-seo.config';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
import { ExtraHeader } from './components/ExtraHeader';

export default {
  logo: Logo,
  logoLink: '/',
  project: {
    link: 'https://github.com/riazer-lab/sira',
  },
  docsRepositoryBase: 'https://github.com/riazer-lab/sira/blob/main/apps/website',
  useNextSeoProps() {
    const { locale } = useRouter();
    return nextSeoConfig(locale);
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath, locale } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    const seo = nextSeoConfig(locale);
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`https://sira.riazer.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || seo.defaultTitle} />
        <meta property="og:description" content={seo.description} />
      </>
    );
  },
  navbar: {
    extraContent: ExtraHeader,
  },
  primaryHue: 286,
  darkMode: true,
  footer: {
    text: Footer,
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' },
  ],
  search: {
    placeholder: '🔍',
  },
};

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
    link: 'https://github.com/riccoxlab/sira',
  },
  docsRepositoryBase: 'https://github.com/riccoxlab/sira/blob/main/apps/website',
  useNextSeoProps() {
    return nextSeoConfig;
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { asPath } = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={`https://sira.riccox.com${asPath}`} />
        <meta property="og:title" content={frontMatter.title || nextSeoConfig.defaultTitle} />
        <meta property="og:description" content={nextSeoConfig.description} />
      </>
    );
  },
  navbar: {
    extraContent: ExtraHeader,
  },
  primaryHue: 266.7,
  darkMode: true,
  footer: {
    text: Footer,
  },
};

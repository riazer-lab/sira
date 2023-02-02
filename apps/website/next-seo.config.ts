import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  defaultTitle: 'Sira UI Design System',
  titleTemplate: '%s - Sira UI',
  description:
    'Customizable and accessible design system which provides TailwindCSS component class name library to build modern UI.',
  additionalLinkTags: [
    {
      rel: 'shortcut icon',
      href: '//assets.riccox.com/sira/logo/plain.svg',
      type: 'image/x-icon',
    },
  ],
};

export default config;

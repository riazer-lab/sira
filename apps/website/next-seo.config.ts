import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  defaultTitle: "Sira UI Design System",
  titleTemplate: "%s - Sira UI",
  description:
    "An open source, highly customized and accessible design system, which currently provides TailwindCSS component class name library",
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "//assets.riccox.com/sira/logo/plain.svg",
      type: "image/x-icon",
    },
  ],
};

export default config;

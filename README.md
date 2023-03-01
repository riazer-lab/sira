English | [中文](./README-zh_CN.md)

<div align="center">

<img width="7%" alt="logo" src="https://assets.sira-design.party/logo/plain.svg"/>

[![License](https://img.shields.io/github/license/sira-design/sira)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/sira-design/sira?style=social)](https://github.com/sira-design/sira)
![GitHub last commit](https://img.shields.io/github/last-commit/sira-design/sira)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/sira-design/sira/publish.yml)](https://github.com/sira-design/sira/actions/workflows/publish.yml)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/sira-design/sira)](https://github.com/sira-design/sira/releases)
[![Vercel](https://img.shields.io/github/deployments/sira-design/sira/production?label=WebsiteOnVercel&logo=vercel)](https://sira-design.party)

[Sira](https://sira-design.party) is an open source, highly customizable and accessible design system, which currently provides TailwindCSS component class name library.

Our primary goal is to create a system that can be used to build a wide variety of websites and apps,
while providing a consistent and inclusive user experience to our end users.
In addition, the design system and component library should be easy to use for developers and designers.

</div>

<a href="https://www.producthunt.com/posts/sira?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sira" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376721&theme=light" alt="Sira - Customizable&#0032;&#0038;&#0032;Accessible&#0032;Design&#0032;System&#0032;provides&#0032;TWC&#0032;plugin&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

- [Website](https://sira-design.party) - Read more about Sira.
- [Playground](https://codepen.io/riccox/pen/poOjXjd) - Quick way to edit & play with Sira in codepen.

# Features

- Customizable by your own brand
- Light/dark mode design
- Tailwindcss Plugin Components

# Installation

## NPM

```bash
npm install @sira-ui/tailwind
```

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sira-ui/tailwind/dist/css/styles.css"/>
<script src="https://cdn.tailwindcss.com"></script>
```

# Usage

```html
<button class="btn solid success">Success</button>
```

# Principle

- use postcss & tailwind compiler to convert basic css code with tailwind classes to tailwindcss plugin.
- use css combination selector to organize components layer.
- theme colorify by root element css style variables, and also overrided by each layer.

# Development

Clone the project

```bash
git clone https://github.com/sira-design/sira.git
```

Go to the project directory

```bash
cd sira
```

Install dependencies

```bash
pnpm install
```

Start the server

```bash
pnpm run dev
```

# Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

If you have ideas for how we could improve this readme or the project in
general, [let us know](https://github.com/sira-design/sira/issues)
or [contribute some](https://github.com/sira-design/sira/edit/main/README.md)!

# Stack with ♥

Thanks to these following projects for providing the additional dependencies & inspirations that helps us create this project.

- @riccox/colorify
- NodeJS
- TailwindCSS
- React
- Nextra
- TurboRepo
- Postcss
- chroma-js
- Ripple UI
- daisyUI

# Feedback

If you have any feedback, please reach out to me at [contact@sira-design.party](mailto:contact@sira-design.party)

## Maintainers

- [Ricco Xie](mailto:ricco@riccox.com)

# License

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)

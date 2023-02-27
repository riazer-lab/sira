中文 | [English](./README.md)

<div align="center">

<img width="7%" alt="logo" src="https://assets.riccox.com/sira/logo/plain.svg"/>

[![License](https://img.shields.io/github/license/riccoxlab/sira)](./LICENSE)
[![Stars](https://img.shields.io/github/stars/riccoxlab/sira?style=social)](https://github.com/riccoxlab/sira)
![GitHub last commit](https://img.shields.io/github/last-commit/riccoxlab/sira)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/riccoxlab/sira/publish.yml)](https://github.com/riccoxlab/sira/actions/workflows/publish.yml)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/riccoxlab/sira)](https://github.com/riccoxlab/sira/releases)
[![Vercel](https://img.shields.io/github/deployments/riccoxlab/sira/production?label=WebsiteOnVercel&logo=vercel)](https://sira.riccox.com)

[Sira](https://sira.riccox.com) 是一个开源、可高度自定义、可访问的设计系统, 目前提供 Tailwindcss 组件库.

我们的主要目标是创建一个可用于构建各种网站和应用程序的系统，同时为终端用户提供一致和包容的用户体验。
此外，设计系统和组件库应易于开发人员和设计者使用。

</div>

<a href="https://www.producthunt.com/posts/sira?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sira" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=376721&theme=light" alt="Sira - Customizable&#0032;&#0038;&#0032;Accessible&#0032;Design&#0032;System&#0032;provides&#0032;TWC&#0032;plugin&#0046; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

- [网站](https://sira.riccox.com) - 更多关于Sira的信息和文档.
- [游乐场](https://codepen.io/riccox/pen/poOjXjd) - 在 codepen 中快速体验Sira.

# 功能

- 品牌自定义
- 明暗模式主题切换
- 提供 Tailwindcss 插件

# 安装

## NPM

```bash
npm install @sira-ui/tailwind
```

## CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sira-ui/tailwind/dist/css/styles.css"/>
<script src="https://cdn.tailwindcss.com"></script>
```

# 使用

```html
<button class="btn solid success">Success</button>
```

# 原理

- 使用 postcss & tailwind 编译器将基础CSS样式代码（tailwindcss）转换为Tailwindcss插件.
- 使用CSS组合选择器来组织组件层级样式.
- 通过根节点的CSS变量储存主题颜色，同时支持CSS层级覆写.

# 开发

克隆这个仓库

```bash
git clone https://github.com/riccoxlab/sira.git
```

前往项目目录

```bash
cd sira
```

安装依赖

```bash
pnpm install
```

启动开发服务

```bash
pnpm run dev
```

# 贡献

我们一直欢迎各种贡献参与！

查看 `contributing.md` 来开始参与贡献.

请遵守本项目的“行为准则”(`code of conduct`)。

如果您对如何改进本自述文件或项目有什么想法，[请告诉我们](https://github.com/riccoxlab/sira/issues)
或[贡献一些](https://github.com/riccoxlab/sira/edit/main/README.md)!

# 技术栈 & 致谢 ♥

感谢以下项目提供了帮助我们创建此项目的依赖和灵感。

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

# 反馈

如果你有任何反馈意见建议, 请通过 [contact@riccox.com](mailto:contact@riccox.com) 联系我。

## 维护者

- [Ricco Xie](mailto:ricco@riccox.com)

# 许可证

[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)

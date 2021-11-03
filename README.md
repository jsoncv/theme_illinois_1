# Illinois One Theme

[![GitHub Releases](https://badgen.net/github/tag/jsoncv/theme_illinois_1)](https://github.com/jsoncv/theme_illinois_1/releases)
[![NPM Release](https://badgen.net/npm/v/@jsoncv/theme_illinois_1)](https://www.npmjs.com/package/@jsoncv/theme_illinois_1)

- [Installation](#installation)
  - [Using Git](#using-git)
  - [Using NPM](#using-npm)
- [Purpose and Guides](#purpose-and-guides)
  - [Theme Requirements](#theme-requirements)
  - [Good Design Practices](#good-design-practices)
  - [NPM Publishing Guidelines](#npm-publishing-guidelines)
  - [Helping the Community](#helping-the-community)

## Installation
This theme can be installed by pulling the repository from _git_ or using _npm_.
You need to have the [JSONCV CLI](https://www.npmjs.com/package/@jsoncv/cli#installation) installed to be able to use the theme.

### Using Git

Pull the repository to your computer

```shell
git pull https://github.com/jsoncv/theme_illinois_1.git
```

install requirements using `npm` or `yarn`

```shell
cd theme_illinois_1
# then
npm install
# or
yarn
```

Compile the `typescript` code

```shell
npm run build
# or
yarn build
```

Use the theme with your CV

```shell
jsoncv serve -t /path/to/theme_illinois_1 cv.json
```

### Using NPM

Install the theme globally

```shell
npm install -g @jsoncv/cli
```

Use the theme with your CV by referencing its name

```shell
jsoncv serve -t @jsoncv/theme_illinois_1 cv.json
```

## Purpose and Guides
This theme is created as a guideline so people who want to design their own CV, or design themes, can get familiar with the requirements of a `JSONCV` theme.
This theme will be updated to keep up with the future changes in [JSONCV](https://github.com/jsoncv) schema or different interfaces.
I will include guidelines on the requirements of the theme, good design practices, as well as guidelines on publishing content to _npm_.

### Theme Requirements
_TBA_

### Good Design Practices
_TBA_

### NPM Publishing Guidelines
_TBA_

### Helping the Community
I strongly urge anyone who design their own themes for JSONCV to publish them under [**MIT** license](https://choosealicense.com/licenses/mit/) so others in the community can benefit from them as well.

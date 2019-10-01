# Develop
Key files and commands for developing a new project

## NPM packages

### dependencies

**Install Main**

`
npm i react react-dom react-router-dom @types/react @types/react-dom @types/react-router-dom axios @types/axios
`

**Install Redux**

`
npm i redux react-redux @types/redux @types/react-redux
`

**Install MobX**

`
npm i mobx mobx-react
`

**Useful Packages**

* `npm i lodash @types/lodash`
* `npm i styled-components @types/styled-components`
* `npm i moment @types/moment`
* `npm i lodash-humps`

### devDependencies

**Install Main**

`
npm i @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
autoprefixer awesome-typescript-loader babel-loader clean-webpack-plugin cross-env
css-loader file-loader html-webpack-plugin image-webpack-loader
mini-css-extract-plugin node-sass postcss-flexbugs-fixes postcss-loader
prettier sass-loader style-loader stylelint stylelint-order ts-loader typescript webpack
webpack-cli webpack-dev-server webpack-bundle-analyzer
-D
`

**ESLint Packages**

`
npm i eslint eslint-config-airbnb eslint-plugin-react @typescript-eslint/eslint-plugin
@typescript-eslint/parser eslint-plugin-import eslint-plugin-jsx-a11y
eslint-import-resolver-typescript -D
`

**Useful Packages**

* `npm i postcss-animation -D`
* `npm i json-server -D`

## Package.json scripts

```
"dev": "webpack-dev-server --mode=development --config=./webpack.config.js --port=8888 --progress --color",
"build": "webpack --mode=production"
```

## Key files

* [Babel config](https://github.com/rusanoff/for-dev/blob/master/babel.config.js)
* [PostCSS config](https://github.com/rusanoff/for-dev/blob/master/postcss.config.js)
* [TypeScript config](https://github.com/rusanoff/for-dev/blob/master/tsconfig.json)
* [Prettier config](https://github.com/rusanoff/for-dev/blob/master/.prettierrc.js)
* [Stylelint config](https://github.com/rusanoff/for-dev/blob/master/.stylelintrc.js)
* [Webpack config](https://github.com/rusanoff/for-dev/blob/master/webpack.config.js)
* [ESLint config](https://github.com/rusanoff/for-dev/blob/master/.eslintrc.js)
* [ESLint ignore](https://github.com/rusanoff/for-dev/blob/master/.eslintignore)

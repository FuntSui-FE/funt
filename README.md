# funt

A Vue.js 2.0 UI Toolkit for Web

<p align="center">
    <img alt="logo" src="https://github.com/FuntSui-FE/funt/blob/master/build/funt.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center" style="margin: 30px 0 35px;">Funt</h1>
<h3 align="center" style="margin: 30px 0 35px;">A Mobile UI Components built on Vue</h3>
<p align="center">
    <img src="https://img.shields.io/npm/v/funt.svg?style=flat" alt="npm version" />
    <img src="https://img.shields.io/npm/dt/funt.svg" alt="downloads" />
    <img src="http://img.badgesize.io/https://unpkg.com/funt/lib/funt.min.js?label=JS%20size" alt="JS  Size" />
    <img src="http://img.badgesize.io/https://unpkg.com/funt/lib/styles/funt.css?label=CSS%20size" alt="CSS  Size" />
</p>

## 安装

#### NPM

```shell
npm i funt -S
```

#### YARN

```shell
yarn add funt -S
```

## 快速上手

### 引入 funt

**1.引入所有组件**

```js
import Vue from 'vue';
import Funt from 'funt';
import 'funt/lib/styles/funt.css';
Vue.use(Funt);
```

#### 2.按需引入组件

```js
import Vue from 'vue';
import { Loading } from 'funt';
import 'funt/lib/styles/funt.css';
Vue.use(Loading);
```

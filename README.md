# Lazy Class

[![GitHub](https://img.shields.io/github/license/mika-f/lazy-class.js?style=flat-square)](./LICENSE)
![CircleCI](https://img.shields.io/circleci/build/github/mika-f/lazy-class.js.svg?style=flat-square)
[![npm (scoped)](https://img.shields.io/npm/v/@mikazuki/lazy-class?style=flat-square)](https://www.npmjs.com/package/@mikazuki/lazy-class)

Lazy evaluation value (class) for JavaScript.

## Install

```
yarn add @mikazuki/lazy-class
```

## How to use

```typescript
import { AsyncLazy, Lazy } from "@mikazuki/lazy-class";

// sync
const lazy = new Lazy<string>(() => "Hello, World");

lazy.isValueInitialized; // => false
lazy.value; // => "Hello, World"
lazy.isValueInitialized; // => true

// async
const fetch = async () => new Promise(resolve => resolve("Hello, World"));
const asyncLazy = new AsyncLazy<string>(async () => await fetch());

asyncLazy.isValueInitialized; // => false
await asyncLazy.value; // => "Hello, World"
asyncLazy.isValueInitialized; // => true
```

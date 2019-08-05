# Lazy Class

[![GitHub](https://img.shields.io/github/license/mika-f/lazy.js?style=flat-square)](./LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@mikazuki/lazy?style=flat-square)](https://www.npmjs.com/package/@mikazuki/lazy)

Lazy evaluation value for JavaScript.

## Install

```
yarn add @mikazuki/lazy
```

## How to use

```typescript
import { AsyncLazy, Lazy } from "@mikazuki/lazy";

// sync
const lazy = new Lazy<string>(() => "Hello, World");

lazy.isValueInitialized; // => false
lazy.value; // => "Hello, World"
lazy.isValueInitialized; // => true

// async
const fetch = async () => new Promise(resolve => resolve("Hello, World"));
const asyncLazy = new AsyncLazy<string>(async () => await fetch());

asyncLazy.isValueInitialized; // => false
asyncLazy.value; // => "Hello, World"
asyncLazy.isValueInitialized; // => true
```

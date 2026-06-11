# @sehv-oss/cspell-config

Shared CSpell configuration for JavaScript/TypeScript projects.

## Installation

```bash
# npm
npm install --save-dev @sehv-oss/cspell-config cspell

# pnpm
pnpm add --dev @sehv-oss/cspell-config cspell

# yarn
yarn add --dev @sehv-oss/cspell-config cspell
```

## Usage

Create a `.cspell.config.ts` file at the root of your project and [import](https://cspell.org/configuration/imports/) the configuration:

```ts
// .cspell.config.ts
import { defineConfig } from 'cspell';

export default defineConfig({
  import: ['@sehv-oss/cspell-config'],
  // your customizations here
  words: ['myproject'],
});
```

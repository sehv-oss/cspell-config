# @sehv-oss/cspell-config

Shared CSpell configuration for JavaScript/TypeScript projects, with English and Brazilian Portuguese support.

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

### Portuguese (pt-BR)

The `pt-br` entry point is an **additive layer**: import it alongside the base configuration to spell check English and Brazilian Portuguese in the same project.

```ts
// .cspell.config.ts
import { defineConfig } from 'cspell';

export default defineConfig({
  import: ['@sehv-oss/cspell-config', '@sehv-oss/cspell-config/pt-br'],
});
```

`@cspell/dict-pt-br` ships as a dependency, so there is nothing else to install.

Portuguese is checked **case and accent sensitively**, so `configuracao` and `versao` fail instead of passing silently as `configuração` and `versão`. This does not add false positives to English text. To relax it:

```ts
export default defineConfig({
  import: ['@sehv-oss/cspell-config', '@sehv-oss/cspell-config/pt-br'],
  languageSettings: [{ languageId: '*', locale: 'pt,pt_BR', caseSensitive: false }],
});
```

## What is included

- `useGitignore: true`, so ignored files are not spell checked.
- The following dictionaries, enabled for **every** file type rather than only for the file types they were written for, so technical terms also pass in Markdown, YAML and comments:

  | Dictionary      | Covers                                       |
  | --------------- | -------------------------------------------- |
  | `softwareTerms` | General software vocabulary                  |
  | `typescript`    | TypeScript and JavaScript keywords           |
  | `node`          | Node.js APIs                                 |
  | `npm`           | Common package names                         |
  | `filetypes`     | File extensions                              |
  | `html`          | HTML tags and attributes                     |
  | `css`           | CSS properties and values                    |
  | `bash`          | Shell commands and builtins                  |
  | `powershell`    | PowerShell cmdlets                           |
  | `fonts`         | Font names                                   |

  These dictionaries ship with `cspell` itself, so no extra install is needed.

- With the `pt-br` entry point, the `pt-br` dictionary and the `en,pt-BR` locale.

<!-- cspell:ignore configuracao versao -->
<!-- cspell:words configuração versão -->

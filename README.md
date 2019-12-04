# @nextinq/i18n

Base i18n utils

## Installation

```bash
yarn add @nextinq/i18n
```

## Usage

* Setup: Run on app start-up

```js
import { initLocale } from '@nextinq/i18n';
// Phrases can be loaded from server, bundled with app, ...
import { csPhrases } from './locales/cs';

// Example phrases: csPhrases = { "hello": "Ahoj", "cancel": "Zrušit" };

initLocale({
  locale: 'cs',
  phrases: csPhrases,
});

```

* Translation. Function t has the same features as in [Polyglot.js t function](https://github.com/airbnb/polyglot.js#polyglotprototypetkey-interpolationoptions)

```js
import { t } from '@nextinq/i18n';

const greeting = t('hello') // => 'Ahoj'

```

## Development

### Test

```bash
yarn test
```

### CI/CD

See [Github actions](https://help.github.com/en/actions)

* [Build on push to feature branch](./github/workflows/build.yml)
* [Build & publish npm](./github/workflows/npmpublish.yml)

#### NPN Publish Setup

 In order to publish packages to npmjs.org or to Github Registry you should add npm_token and/or github_token in `Settings -> Secrets` of the current project

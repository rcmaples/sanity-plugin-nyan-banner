# sanity-plugin-nyan-banner

> This is a **Sanity Studio v3** plugin.

Add some whimsy to your day

![nyanNavBar](https://raw.githubusercontent.com/rcmaples/sanity-plugin-nyan-banner/refs/heads/main/assets/nyanNavBar.gif)

## Installation

```sh
npm install sanity-plugin-nyan-banner
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import { defineConfig } from "sanity"
import { nyanBannerPlugin } from "sanity-plugin-nyan-banner"

export default defineConfig({
  //...
  plugins: [..., nyanBannerPlugin()],
})
```

## License

[MIT](LICENSE) © RC Maples

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.

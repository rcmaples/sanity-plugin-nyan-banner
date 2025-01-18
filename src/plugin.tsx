import { definePlugin } from "sanity"

import NyanBanner from "./components/NyanBanner"

export const nyanBannerPlugin = definePlugin({
  name: "sanity-plugin-nyan-banner",
  studio: {
    components: {
      navbar: NyanBanner,
    },
  },
})

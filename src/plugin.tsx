import { definePlugin } from "sanity"

import NyanNavbar from "./components/NyanNavbar"

export const nyanBannerPlugin = definePlugin({
  name: "sanity-plugin-nyan-banner",
  studio: {
    components: {
      navbar: NyanNavbar,
    },
  },
})

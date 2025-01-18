import { Stack } from "@sanity/ui"
import { NavbarProps } from "sanity"

import { NyanCat } from "./NyanCat"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function NyanBanner(props: NavbarProps) {
  return (
    <Stack>
      {props.renderDefault(props)} {/* Render the default navbar */}
      <NyanCat />
    </Stack>
  )
}

import { PrevMusics } from './PrevMusics/Index'
import React from 'react'

import { InfoText } from './InfoText/Index'
import { Grid } from './styles'

export function RecentlyPlayed() {
  return (
    <>
      <InfoText />
      <Grid>
        <PrevMusics />
      </Grid>
    </>
  )
}

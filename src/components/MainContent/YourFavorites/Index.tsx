import React from 'react'
import { Play } from '../../../../public/icons/icons'
import { Card, CardButton, CardNome, Grid, CardImg } from './styles'
export function YourFavorites({}) {
  return (
    <Grid className="grid grid-cols-3 gap-4 mt-4">
      <Card>
        <CardImg src="./images/liked-songs.png" alt="liked-songs" />
        <CardNome>Liked Songs</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5 " />
        </CardButton>
      </Card>
      <Card>
        <CardImg src="./images/On-Repeat.jpg" alt="on-repeat" />
        <CardNome>On Repeat</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5" />
        </CardButton>
      </Card>
      <Card>
        <CardImg src="./images/2022.jpg" alt="Your Top Songs 2022" />
        <CardNome>Your Top Songs 2022</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5" />
        </CardButton>
      </Card>
      <Card>
        <CardImg src="./images/SE-64.png" alt="Your Episodes" />
        <CardNome>Your Episodes</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5" />
        </CardButton>
      </Card>
      <Card>
        <CardImg src="./images/Marron5.jpg" alt="Marron 5" />
        <CardNome>Marron 5</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5" />
        </CardButton>
      </Card>
      <Card>
        <CardImg src="./images/Eminem.jpg" alt="This is Eminem" />
        <CardNome>This is Eminem</CardNome>
        <CardButton>
          <Play className="w-7 h-7 mt-0.5" />
        </CardButton>
      </Card>
    </Grid>
  )
}

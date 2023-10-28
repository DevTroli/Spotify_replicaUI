import { HeartIcon } from 'lucide-react'

import React from 'react'
import { Img, Infos, Artist, Container, MusicName, Heart } from './styles'
export function CurrentMusic({}) {
  return (
    <Container>
      <Img src="./images/TheGreatestShowman.jpg" alt="Album" />
      <Infos>
        <MusicName>The Greatest Showman</MusicName>
        <Artist>Hugh Jackman, Zac Efron, Zendaya</Artist>
      </Infos>
      <Heart>
        <HeartIcon className="h-5 w-5 hover:text-green-500" />
      </Heart>
    </Container>
  )
}

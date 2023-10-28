import { Shuffle, Repeat2 } from 'lucide-react'
import React from 'react'
import { Play, Skip, SkipBack } from '../../../../public/icons/icons'
import {
  Buttons,
  Button,
  DivSlider,
  Time,
  Slider,
  SliderTime,
  Container
} from './styles'
export function MusicPlayer({}) {
  return (
    <Container >
      <Buttons>
        <Shuffle className="w-6 h-6 text-zinc-400 hover:text-white/90" />
        <SkipBack className="w-6 h-6 text-zinc-400 hover:text-white/90" />
        <Button>
          <Play className="text-black w-8 h-8 " />
        </Button>
        <Skip className="w-6 h-6 text-zinc-400 hover:text-white/90" />
        <Repeat2 className="w-6 h-6 text-zinc-400 hover:text-white/90" />
      </Buttons>
      <DivSlider>
        <Time>1:42</Time>
        <Slider>
          <SliderTime></SliderTime>
        </Slider>
        <Time>
          5:02
        </Time>
      </DivSlider>
    </Container>
  )
}

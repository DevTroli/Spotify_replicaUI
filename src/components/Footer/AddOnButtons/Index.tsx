import { PlaySquare, Mic2, ListVideo, Volume2, Maximize2 } from 'lucide-react'
import React from 'react'
import {
  Player,
  AddonButtons,
  Slider,
  SliderTime
} from './styles'

export function AddOnButtons() {
  return (
    <AddonButtons>
      <PlaySquare className="w-5 h-5 text-zinc-400 hover:text-white/90" />
      <Mic2 className="w-5 h-5 text-zinc-400 hover:text-white/90" />
      <ListVideo className="w-5 h-5 text-zinc-400 hover:text-white/90" />
      <Player>
        <Volume2 className="w-5 h-5 text-zinc-400 hover:text-white/90" />
        <Slider>
          <SliderTime />
        </Slider>
      </Player>
      <Maximize2 className="w-5 h-5 text-zinc-400 hover:text-white/90" />
    </AddonButtons>
  )
}

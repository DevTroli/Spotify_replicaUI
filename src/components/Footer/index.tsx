import { MusicPlayer } from './MusicPlayer/Index'
import { CurrentMusic } from './CurrentMusic/Index'
import { AddOnButtons } from './AddOnButtons/Index'
import { Footer as FooterPlayer } from '../../styles/Containers'
import React from 'react'

export function Footer() {
  return (
    <FooterPlayer>
      <CurrentMusic />
      <MusicPlayer />
      <AddOnButtons />
    </FooterPlayer>
  )
}

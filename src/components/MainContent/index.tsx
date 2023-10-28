import { RecentlyPlayed } from './RecentlyPlayed/Index'
import { YourFavorites } from './YourFavorites/Index'
import { NavButtons } from './NavButtons/Index'
import { Play } from '../../../public/icons/icons'

import React from 'react'

import { Content, Greeting } from '../../styles/Containers'
export function MainContent() {
  return (
    <Content>
      <NavButtons />
      <Greeting>Good Morning</Greeting>
      <YourFavorites />
      <RecentlyPlayed />
    </Content>
  )
}

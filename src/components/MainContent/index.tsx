import { RecentlyPlayed } from './RecentlyPlayed/Index'
import { YourFavorites } from './YourFavorites/Index'
import { NavButtons } from './NavButtons/Index'
import { Play } from '../../../public/icons/icons'

import React from 'react'

import { Content, Greeting } from '../../styles/Containers'
export function MainContent() {
  return (
    <Content className='bg-gradient-to-b from-indigo-900 to-zinc-800'>
      <NavButtons />
      <Greeting className='text-3xl'>Good Morning</Greeting>
      <YourFavorites />
      <RecentlyPlayed />
    </Content>
  )
}

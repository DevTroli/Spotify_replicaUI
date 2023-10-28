import React from 'react'

import { HomeIcon, Search } from 'lucide-react'
import { Nav, NavButton, Span } from './styles'

export function InitialNav({}) {
  return (
    <Nav>
      <NavButton>
        <HomeIcon className='text-zinc-200' />
        <Span className='text-zinc-200'>Home</Span>
      </NavButton>
      <NavButton>
        <Search />
        <Span >Search</Span>
      </NavButton>
    </Nav>
  )
}

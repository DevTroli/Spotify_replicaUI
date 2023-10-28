import React from 'react'

import { YourLibrary } from './YourLibary/Index'
import { NavFilters } from './NavFilters/Index'
import { NavTypes } from './NavTypes/Index'
import { NavLibrary } from './NavLibrary/Index'
import { InitialNav } from './InitialNav/Index'

import { NavBar } from '@/styles/Containers'

export function Aside() {
  return (
    <NavBar>
      <InitialNav />
      <NavLibrary />
      <NavTypes />
      <NavFilters />
      <YourLibrary />
    </NavBar>
  )
}

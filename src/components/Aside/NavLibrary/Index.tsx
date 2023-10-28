import { Plus, ArrowRight,Library } from 'lucide-react'
import React from 'react'
import { Nav, Library as YourLibrary, IconArrowRight, IconPlus } from './styles'
export function NavLibrary() {
  return (
    <Nav>
      <YourLibrary>
        <Library />
        Your Library
      </YourLibrary>
      <IconPlus>
        <Plus />
      </IconPlus>
      <IconArrowRight>
        <ArrowRight />
      </IconArrowRight>
    </Nav>
  )
}

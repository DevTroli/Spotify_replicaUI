import React from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Div, NavButton } from './Styles'

export function NavButtons() {
  return (
    <Div>
      <NavButton>
        <ChevronLeft />
      </NavButton>
      <NavButton>
        <ChevronRight />
      </NavButton>
    </Div>
  )
}

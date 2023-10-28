import React from 'react'

import { Search, List } from 'lucide-react'
import { Nav, FilterSeach, FilterList, Text } from './styles'
export function NavFilters() {
  return (
    <Nav className="flex flex-row bg-zinc-900 p-2 -mt-1 justify-between  ">
      <FilterSeach
        href=""
        className="flex flex-row ml-4 hover:rounded-full hover:bg-white/20 hover:transition-colors hover:text-white p-1.5"
      >
        <Search className="text-zinc-400 hover:text-zinc-200 w-5 h-5" />
      </FilterSeach>
      <FilterList
        href=""
        className="flex items-center ml-4 gap-0.5 text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:scale-105"
      >
        <Text>Recents</Text>
        <List className=" mr-4" />
      </FilterList>
    </Nav>
  )
}

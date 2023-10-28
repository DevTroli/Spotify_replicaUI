import React from 'react'
import { Type, Types, Text } from './Styles'
export function NavTypes({}) {
  return (
    <Types className="flex flex-row bg-zinc-900 p-4 -mt-2  text-zinc-200">
      <Type
        href="#"
        className=" hover:bg-white/25 flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
      >
        <span>Playlists</span>
      </Type>
      <a
        href="#"
        className=" hover:bg-white/25  flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
      >
        <span>Albums</span>
      </a>
      <a
        href="#"
        className=" hover:bg-white/25 flex flex-col mt-0 ml-2 bg-zinc-700 rounded-full h-6 w-16 p-1 text-center mr-2 text-xs font-semibold"
      >
        <Text>Artists</Text>
      </a>
    </Types>
  )
}

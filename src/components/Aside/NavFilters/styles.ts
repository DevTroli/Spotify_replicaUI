import tw from "tailwind-styled-components"

export const Nav = tw.nav`
  flex
  flex-row
  bg-zinc-900
  p-2
  -mt-1
  justify-between
`

export const FilterSeach = tw.a`
  flex
  flex-row
  ml-4
  hover:rounded-full
  hover:bg-white/20
  hover:transition-colors
  hover:text-white
  p-1.5
`

export const FilterList = tw.a`
  flex
  items-center
  ml-4
  gap-0.5
  text-xs
  font-semibold
  text-zinc-400
  hover:text-zinc-200
  hover:scale-105
`

export const Text = tw.span`
  text-zinc-200
`

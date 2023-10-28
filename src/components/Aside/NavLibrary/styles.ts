import tw from 'tailwind-styled-components'

export const Nav = tw.nav`
  flex
  justify-between
  p-6
  rounded-t-lg
  mt-2
  w-full
  bg-zinc-900
`

export const Library = tw.a`
  flex
  items-center
  gap-3
  text-base
  font-semibold
  hover:text-zinc-200
  text-zinc-400
`

export const IconPlus = tw.a`
  text-xs
  items-center
  font-semibold
  ms-8
  p-1
  hover:text-zinc-200
  text-zinc-400
  hover:rounded-full
  hover:bg-white/20
  hover:transition-colors
`
export const IconArrowRight = tw.a`
  text-xs
  items-center
  font-semibold
  p-1
  hover:text-zinc-200
  text-zinc-400
  hover:rounded-full
  hover:bg-white/20
  hover:transition-colors
`

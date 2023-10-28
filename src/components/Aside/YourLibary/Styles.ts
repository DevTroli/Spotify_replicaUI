import tw from 'tailwind-styled-components'

export const Nav = tw.nav`
  flex
  flex-col
  bg-zinc-900
  rounded-b-xl
  px-5
  py-0
  overflow-hidden
  -mt-1
`

export const Grid = tw.div`
  grid
  grid-col
  gap-4
  mt-3
`

export const Card = tw.a`
  items-center
  flex
  gap-4
  overflow-hidden
  hover:bg-white/5
  transition-colors
  mb-1
`

export const CardImg = tw.img`
  shadow-black/20
  shadow-md
  rounded
  gird
  grid-col-1
  h-14
  w-14
`

export const CadInfo = tw.div`
  flex
  flex-col
`

export const CardName = tw.strong`
  font-semibold
  text-md
`

export const CadArtist = tw.span`
  text-sm text-zinc-400
`

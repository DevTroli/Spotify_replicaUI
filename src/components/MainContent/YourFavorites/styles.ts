import tw from 'tailwind-styled-components'

export const Grid = tw.div`
  grid
  grid-cols-3
  gap-4
  mt-4
`

export const Card = tw.a`
  rounded
  m-0
  h-24
  bg-white/10
  flex
  items-center
  gap-4
  overflow-hidden
  hover:bg-white/20
  transition-colors
`

export const CardImg = tw.img`
  shadow-black/20
  shadow-md
  rounded
  h-24
  w-24
`

export const CardNome = tw.strong`
  font-semibold
`

export const CardButton = tw.button`
  invisible
  p-3
  pt-2
  justify-center
  items-center
  h-12
  w-12
  bg-green-500
  text-black
  rounded-full
  ml-auto
  mr-6
  group-hover:visible
`

import tw from 'tailwind-styled-components'

export const ContainerCard = tw.div`
  rounded
  bg-white/10
  hover:bg-white/20
  transition-colors
  w-32
  h-44
`

export const Card = tw.a`
  rounded
  bg-white/10
  hover:bg-white/20
  transition-colors
  w-32
  h-44
`

export const CardImg = tw.img`
  shadow-black/20
  shadow-md
  rounded
  ml-2
  mt-2
  h-28
  w-28
`

export const CardInfo = tw.div`
  flex
  flex-col
  mt-2
  ml-2
`

export const CardName = tw.strong`
  font-semibold
`

export const CardDescription = tw.span`
  text-sm
  text-zinc-400
`

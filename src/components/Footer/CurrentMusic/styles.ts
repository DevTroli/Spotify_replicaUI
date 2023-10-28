import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  items-center
  gap-3
  m-4
  mb-2
`

export const Img = tw.img`
  shadow-black/20
  shadow-md
  rounded
  w-14
  h-14
`

export const Infos = tw.div`
  flex
  flex-col
`

export const MusicName = tw.strong`
  font-medium
  hover:underline
`

export const Artist = tw.span`
  text-xs
  text-zinc-400
`

export const Heart = tw.a`
  text-zinc-400
`

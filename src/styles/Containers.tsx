import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  h-screen
`

export const MainContainer = tw.div`
  flex
  flex-1
`

export const Footer = tw.footer`
  bg-zinc-950
  shadow
  p-5
  pb-1
  flex
  items-center
  justify-between
`

export const NavBar = tw.aside`
  w-72
  bg-zinc-950
  p-4
  pb-0
  m-1
  mr-0
  rounded-lg
`

export const Content = tw.main`
  flex-1
  p-6
  pb-0
  rounded-lg
  m-2
  mb-0
  ml-0
  bg-gradient-to-b from-indigo-900 to-zinc-800
`

export const Greeting = tw.h1`
  text-3xl
  font-bold
  mt-4
`

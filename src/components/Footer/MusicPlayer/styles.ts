import tw from 'tailwind-styled-components'

export const Container = tw.div`
  flex
  flex-col
  items-center
  gap-2
`

export const Buttons = tw.div`
  flex
  items-center
  gap-6
`

export const Button = tw.button`
  w-10
  h-10
  flex
  items-center
  justify-center
  pl-1
  rounded-full
  bg-white
`
export const DivSlider = tw.div`
  flex
  items-center
  gap-2
`

export const Slider = tw.div`
  bg-zinc-600
  rounded-full
  h-1
  w-96
`

export const SliderTime = tw.div`
  bg-green-400
  rounded-full
  h-1
  w-40
`

export const Time = tw.span`
  text-xs
  text-zinc-400
`

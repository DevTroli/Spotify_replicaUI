import { Container, MainContainer } from '@/styles/Containers'

import { MainContent } from '../components/MainContent'
import { Aside } from '../components/Aside/Index'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <Container>
      <MainContainer>
        <Aside />
        <MainContent />
      </MainContainer>
      <Footer />
    </Container>
  )
}

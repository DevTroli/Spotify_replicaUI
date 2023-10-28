import React from 'react'
import {
  ContainerCard,
  Card,
  CardImg,
  CardInfo,
  CardName,
  CardDescription
} from './styles'
export function PrevMusics() {
  return (
    <>
      <ContainerCard>
        <Card>
          <CardImg src="./images/On-Repeat.jpg" alt="Album" />
          <CardInfo>
            <CardName>On Repeat</CardName>
            <CardDescription>Your favorite song</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/estoicismo.jpg" alt="Album" />
          <CardInfo>
            <CardName>Prática Estóica</CardName>
            <CardDescription>Ándré Cicarreli</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/AJR.jpg" alt="Album" />
          <CardInfo>
            <CardName>AJR Picks</CardName>
            <CardDescription>Artists - AJR</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/hades.jpg" alt="Album" />
          <CardInfo>
            <CardName>Hades</CardName>
            <CardDescription>Daren Korb</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/sia.jpg" alt="Album" />
          <CardInfo>
            <CardName>This is Sia</CardName>
            <CardDescription>Album - Sia</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/anthem.jpg" alt="Album" />
          <CardInfo>
            <CardName>Anthem Lights</CardName>
            <CardDescription>Album - Anthem</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
      <ContainerCard>
        <Card>
          <CardImg src="./images/rihana.jpg" alt="Album" />
          <CardInfo>
            <CardName className=" font-semibold">Lift me up</CardName>
            <CardDescription>Artist - Rihanna</CardDescription>
          </CardInfo>
        </Card>
      </ContainerCard>
    </>
  )
}

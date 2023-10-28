import React from 'react'
import { CadArtist, CadInfo, CardName, Card, CardImg, Grid, Nav } from './Styles'
export function YourLibrary() {
  return (
    <Nav>
      <Grid>
        <Card>
          <CardImg
            src="./images/liked-songs.png"
            alt="Album"
          />
          <CadInfo>
            <CardName>Liked Songs</CardName>
            <CadArtist>Playlist - 701 songs</CadArtist>
          </CadInfo>
        </Card>
        <Card>
          <CardImg
            src="./images/billieEilish.jpg"
            alt="Album"
          />
          <CadInfo>
            <CardName>
              Happier Than Never
            </CardName>
            <CadArtist>Album - Billie Eilish</CadArtist>
          </CadInfo>
        </Card>
        <Card>
          <CardImg
            src="./images/TheGreatestShowman.jpg"
            alt="Album"
          />
          <CadInfo>
            <CardName>
              The Greatest Showman
            </CardName>
            <CadArtist>
              Album - Several artists
            </CadArtist>
          </CadInfo>
        </Card>
        <Card>
          <CardImg
            src="./images/devsCansados.jpg"
            alt="Album"
          />
          <CadInfo>
            <CardName>Devs Cansados</CardName>
            <CadArtist>
              Podcast - Devs Cansados
            </CadArtist>
          </CadInfo>
        </Card>
      </Grid>
    </Nav>
  )
}

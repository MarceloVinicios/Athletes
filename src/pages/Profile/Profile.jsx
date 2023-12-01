import React from 'react'
import BannerProfile from '../../components/ui/Profile/BannerProfile'
import SideBar from '../../components/SideBar/SideBar'
import { Container } from '../Profile/StyledProfile'

function Profile() {
  return (
    <Container>
      <SideBar />
      <BannerProfile />
    </Container>
  )
}

export default Profile

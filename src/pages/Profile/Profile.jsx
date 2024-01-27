import React from 'react'
import BannerProfile from '../../components/ui/Profile/BannerProfile'
import SideBar from '../../components/SideBar/SideBar'
import { Container } from '../Profile/StyledProfile'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../../components/helper/Loading'

function Profile() {
  return (
    <Container>
      <SideBar />
      <BannerProfile />
    </Container>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});

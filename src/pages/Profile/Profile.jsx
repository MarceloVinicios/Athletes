import React from 'react'
import BannerProfile from '../../components/ui/Profile/BannerProfile'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loading from '../../components/helper/Loading'

function Profile() {
  return (
    <>
      <BannerProfile />
    </>
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});

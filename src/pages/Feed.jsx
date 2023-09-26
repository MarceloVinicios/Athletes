import React from 'react'
import styled from "styled-components";
import SideBar from '../components/common/SideBar';

const Main = styled.main`
  width: 100vw;
  height: 100vh;
`

const Feed = () => {
  return (
    <Main>
      <SideBar />
    </Main>
  )
}

export default Feed


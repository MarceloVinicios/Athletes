import React from "react";
import styled from "styled-components";

const BannerContainerDad = styled.div`
    margin: 20px;
    border-radius: 15px;
    background-color: black;
    height: 15vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
` 
const ImageBanner = styled.image`
    background-image: cover;
`

const UserNameBanner = styled.h1`
    color: white;
`

const UserFollwers = styled.h2`
    color: white;
`

function BannerProfile() {
    return(
        <BannerContainerDad>
            <ImageBanner src="src\assets\images\FotoBanner.png" alt="" />
            <UserNameBanner>Usuário</UserNameBanner>
            <UserFollwers>100</UserFollwers>
            <UserFollwers>Seguindo</UserFollwers>
            <UserFollwers>150</UserFollwers>
            <UserFollwers>Seguidores</UserFollwers>
        </BannerContainerDad>
        )
}

export default BannerProfile
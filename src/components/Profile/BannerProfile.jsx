import React from "react";
import styled from "styled-components";

const BannerContainerDad = styled.div`
    padding: 0px;
    margin: 0px;
    background-color: green;
    height: 102px;
    width: 500px;
` 
const TextBanner = styled.h1`
    color: white;
`

function BannerProfile() {
    return(
        <BannerContainerDad>
            <TextBanner>11</TextBanner>
        </BannerContainerDad>
        )
}

export default BannerProfile
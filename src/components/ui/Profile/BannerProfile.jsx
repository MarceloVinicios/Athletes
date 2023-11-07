import React, { useEffect, useState } from "react";
import { ProfileContainer, ProfileCard, AvatarProfile, Name, SportUser, Bio,
  Stats, Stat, StatNumber, StatLabel, }
from './StyledBannerProfile';
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../hooks/useFetch";
import { GetUser } from "../../../api/UserApi";
import SideBar from "../../SideBar/SideBar";

const BannerProfile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [dataUser, setDataUser] = useState(null);
  const { loading, request } = useFetch();

  useEffect(() => {
    async function getUserData() {
      const token = await getAccessTokenSilently();
      const { url, options } = GetUser(token);
      const { response, json } = await request(url, options);

      if (response.status === 200) {
        setDataUser(json.response);
      }
    }
    getUserData();
  }, [getAccessTokenSilently, request]);

  if (window.location.href === "http://localhost:5173/register") {
    return null;
  }
  return (
    <>
    <SideBar />
     <ProfileContainer>
       <ProfileCard>
          {dataUser ? (
            <div>
              <AvatarProfile src={dataUser.picture} alt="Perfil" />
              <Name>{dataUser.name}</Name>
              </div>
            ) : (
              null
            )}
          <SportUser>Basquete</SportUser>
         <Bio>THE BIG PLAYER</Bio>
         <Stats>
           <Stat>
             <StatNumber>250</StatNumber>
             <StatLabel>Repositories</StatLabel>
           </Stat>
           <Stat>
             <StatNumber>5.2k</StatNumber>
             <StatLabel>Followers</StatLabel>
           </Stat>
           <Stat>
             <StatNumber>35</StatNumber>
             <StatLabel>Following</StatLabel>
           </Stat>
         </Stats>
       </ProfileCard>
     </ProfileContainer>
     </>
  );
 };

 export default BannerProfile;





import styled from 'styled-components';

export const ProfileContainer = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 50vh;
`;

export const ProfileCard = styled.div`
 width: 873px;
 height: 200px;
 margin-top: 150px;
 padding: 10px;
 border-radius: 10px;
 box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
 background-color: white;
 background-image: url(https://thefans.com.br/wp-content/uploads/2022/08/Untitled-1-18-732x412.jpg);
 background-position: center;
`;

export const AvatarProfile = styled.img`
 width: 150px;
 height: 150px;
 border-radius: 50%;
 margin-top: 100px;
 margin-left: 20px;
 object-fit: cover;
 border: 4px solid white;
`;

export const Name = styled.h1`
 font-size: 24px;
 margin-left: 180px;
 margin-top: -60px;
 margin-bottom: 5px;
 color: #ffffff;
`;

export const SportUser = styled.h2`
 font-size: 18px;
 margin-left: 750px;
 margin-bottom: 20px;
 color: #ffffff;
`;

export const Bio = styled.p`
 font-size: 14px;
 text-align: center;
 color: #ffffff;
`;

export const Stats = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 20px;
`;

export const Stat = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const StatNumber = styled.span`
 font-size: 24px;
 font-weight: bold;
 margin-bottom: 5px;
`;

export const StatLabel = styled.span`
 font-size: 12px;
 color: #999;
`;

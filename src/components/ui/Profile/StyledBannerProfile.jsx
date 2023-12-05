import styled from "styled-components";

export const Container = styled.div``;

export const ProfileContainer = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 200px;

  @media (max-width: 900px) {
    margin-left: initial;
  }
`;

export const ProfileCard = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1280px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 9px;
  object-fit: cover;
`;

export const ContainerOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 80px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    margin-top: 106px;
  }

  @media (max-width: 320px) {
    margin-top: 115px;
  }
`;

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: -140px;

  @media (max-width: 500px) {
    align-self: start;
  }
`;

export const AvatarProfile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;

  @media (max-width: 450px) {
    width: 100px;
  height: 100px;
  }

  @media (max-width: 320px) {
    width: 80px;
  height: 80px;
  }
`;

export const Name = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-top: 5px;
  color: #ffffff;

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const SportUser = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-top: -130px;

  @media (max-width: 500px) {
    margin-left: 10px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
    font-size: 22px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ContainerGoal = styled.div`
  margin-top: 30px;
  background-color: #263238;
  padding: 10px 20px;
  border-radius: 9px;

  @media (max-width: 450px) {
    margin-top: initial;
  }
`;

export const SubTitleGoal = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Goal = styled.p``;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 40px;
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

export const Line = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 9px;
  background-color: #f7f9f8;
  margin-top: 30px;
`;

export const ListNoOrderContentProfile = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  @media (max-width: 450px) {
    gap: 20px;
  }
`;

export const ListItemProfile = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 450px) {
    gap: 1px;
  }
`;

export const ContainerPublications = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0 20px;
`;

export const NoContent = styled.h2`
  margin-top: 50px;
  font-size: 2rem;
  font-weight: 600;
`

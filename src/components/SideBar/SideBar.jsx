import React from "react";
import { MdTravelExplore } from "react-icons/md";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { AiFillHome, AiFillStar } from "react-icons/ai";
import { Container, List, ListNotOrdered } from "./StyledSideBar";
import { FaUserFriends } from "react-icons/fa";

const SideBar = () => {
  const iconSize = "25px";
  const iconColor = "#EBC556";

  const sidebarItems = [
    { to: "/feed", icon: <AiFillHome fontSize={iconSize} color={iconColor} />, label: "Início" },
    { to: "/explore", icon: <MdTravelExplore fontSize={iconSize} color={iconColor} />, label: "Explorar" },
    { to: "/chat", icon: <BiSolidMessageSquareDetail fontSize={iconSize} color={iconColor} />, label: "Mensagens" },
    { to: "/connections", icon: <FaUserFriends fontSize={iconSize} color={iconColor} />, label: "Conexões" },
    { to: "/feed/publications/likes", icon: <AiFillStar fontSize={iconSize} color={iconColor} />, label: "Gostei" },
  ];

  return (
    <Container>
      <ListNotOrdered>
        {sidebarItems.map((item, index) => (
          <a key={index} href={item.to}>
            <List>
              {item.icon}
              {item.label}
            </List>
          </a>
        ))}
      </ListNotOrdered>
    </Container>
  );
};

export default SideBar;

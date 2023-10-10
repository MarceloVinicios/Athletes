import React, { useState, useEffect } from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import { Button } from "@chakra-ui/react";

function Like() {
 const [liked, setLiked] = useState(false);
 const [count, setCount] = useState(0);

 const handleClick = () => {
    setLiked(!liked);
    setCount(liked ? (count > 0 ? count - 1 : 0) : count + 1);
 };

 return (
    <div>
      <Button
        variant="ghost"
        justifySelf={"start"}
        onClick={handleClick}
      >
        {liked ? (
          <MdStar fill="#ebc556" fontSize={"24px"} />
        ) : (
          <MdStarBorder fontSize={"24px"} />
        )}
        {count} Gostei
      </Button>
    </div>
 );
}

export default Like;

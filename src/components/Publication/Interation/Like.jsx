import React, { useState } from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import { Button } from "@chakra-ui/react";

function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Button
        variant="ghost" justifySelf={"start"}
        onClick={() => setLiked(!liked)}
      >
        {liked ? (
          <MdStar fill="#ebc556" fontSize={"24px"} />
        ) : (
          <MdStarBorder fontSize={"24px"} leftIcon />
        )}
        Gostei
      </Button>
    </div>
  );
}

export default Like;

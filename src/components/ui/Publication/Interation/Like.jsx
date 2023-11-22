import React, { useState, useEffect } from "react";
import { MdStarBorder, MdStar } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import useFetch from "../../../../hooks/useFetch";
import { AddLike, DeleteLike } from "../../../../api/LikeApi";
import debounce from "lodash/debounce";

function Like({ publication_id }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const { getAccessTokenSilently } = useAuth0();
  const { request } = useFetch();

  const handleClick = debounce(async () => {
    setLiked(!liked);
    setCount(liked ? (count > 0 ? count - 1 : 0) : count + 1);

    try {
      const token = await getAccessTokenSilently();
      if (!liked) {
        const { url, options } = AddLike(publication_id, token);
        const { response } = await request(url, options);

        if (response.statusCode === 200) {
          console.log("Successfully added like");
        }
      } else {
        const { url, options } = DeleteLike(publication_id, token);
        const { response } = await request(url, options);

        if (response.statusCode === 200) {
          console.log("Deleted successfully like");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, 300);

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

import React, { useState } from 'react'
import { MdStarBorder, MdStar } from "react-icons/md"
import {  Button, IconButton } from '@chakra-ui/react';

function Like() {
    const [liked, setLiked] = useState(false)

  return (
    <div>
       <Button flex='1' variant='ghost' leftIcon
          onClick={() => setLiked(!liked)}>
           {liked ? (
             <MdStar fill="#ebc556" fontSize={'24px'}  />
                 ) : (
              <MdStarBorder fontSize={'24px'} leftIcon />
           )}
            Like
       </Button>
    </div>
  )
};


export default Like

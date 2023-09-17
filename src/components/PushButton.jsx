import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const PushButton = ({value, ...props}) => {
  return (
    <Button colorScheme= "yellow" size= 'sm' {...props}>{value}</Button>
  )
}

export default PushButton

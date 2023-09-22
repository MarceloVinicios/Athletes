import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdInsertLink, MdFlag } from 'react-icons/md'


export default function MoreOptionsPubli() {
  return (
    
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <IconButton
            aria-label="More server options"
            icon={<BsThreeDotsVertical />}
            variant="solid"
            w="fit-content"
          />
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                colorScheme='blue'
                rightIcon={<MdInsertLink />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm">
                Copy Link
              </Button>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<MdFlag />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm">
                Denunciar
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}

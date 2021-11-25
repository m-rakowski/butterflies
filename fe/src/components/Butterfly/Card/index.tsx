import {
  Box, Flex, Image, Link, Tooltip, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { DeleteIcon, StarIcon } from '@chakra-ui/icons';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';

const ButterflyCard: React.FC<{
  butterfly: Butterfly;
  onDelete?: (id: number) => void;
  onToggleWishlist?: (id: number) => void;
  readonlyMode?: boolean
}> = ({
  butterfly,
  onDelete,
  onToggleWishlist,
  readonlyMode = false,
}) => (
  <Box
    bg={useColorModeValue('white', 'gray.800')}
    borderWidth="1px"
    rounded="lg"
    shadow="lg"
    position={'relative'}
  >

    {!readonlyMode
    && <StarIcon
      size="10px"
      position="absolute"
      top={2}
      color={butterfly.on_the_wishlist ? 'yellow.300' : 'black'}
      right={2}
      onClick={() => onToggleWishlist(butterfly.id)}
      h={7} w={7}
      aria-label="Toggle wishlist star"
    />}

    <Image
      src={butterfly.image_url}
      alt={`Picture of ${butterfly.name}`}
      roundedTop="lg"
      w={'100%'}
    />

    <Box p="6">
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated>
          {butterfly.name}
        </Box>

        {!readonlyMode
        && <Tooltip
          label="Delete"
          bg="white"
          placement={'top'}
          color={'gray.800'}
          fontSize={'1.2em'}>
          <Box display={'flex'}>
            <DeleteIcon
              alignSelf={'center'} h={5} w={5} onClick={() => onDelete(butterfly.id)}
              aria-label="Search database"
            />
          </Box>
        </Tooltip>}
      </Flex>

      <Flex alignContent="center">
        <Link href={butterfly.link}
              target={'_blank'}
              px={2}
              py={1}
              rounded={'md'}
              _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
              }}>
          Read more </Link>
      </Flex>
    </Box>
  </Box>);
export default ButterflyCard;

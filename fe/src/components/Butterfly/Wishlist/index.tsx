import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';
import ButterflyCard from '../Card';

const Wishlist = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    axios
      .get<Butterfly[]>('http://localhost:8000/butterflies?on_the_wishlist=true')
      .then((bfs) => setButterflies(bfs.data));
  }, []);

  return (<SimpleGrid minChildWidth="240px" spacing="40px">
    {
      butterflies.map((b: Butterfly) => (
        <Box key={b.name}>
          <ButterflyCard
            butterfly={b}
            readonlyMode={true}/>
        </Box>
      ))
    }
  </SimpleGrid>);
};

export default Wishlist;

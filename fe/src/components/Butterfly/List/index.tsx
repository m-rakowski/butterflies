import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';
import ButterflyCard from '../Card';

const ButterflyList = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  const deleteButterflyWithId = (id: number) => {
    axios.delete(`http://localhost:8000/butterflies/${id}`)
      .then(() => {
        setButterflies(butterflies.filter((butterfly) => butterfly.id !== id));
      });
  };
  const toggleWishlist = (id: number) => {
    axios.post(`http://localhost:8000/butterflies/${id}/toggle-wishlist-star`)
      .then(() => {
        const newList = butterflies.map((item: Butterfly) => {
          if (item.id === id) {
            const updatedItem: Butterfly = {
              ...item,
              on_the_wishlist: !item.on_the_wishlist,
            };
            return updatedItem;
          }
          return item;
        });
        setButterflies(newList);
      });
  };
  useEffect(() => {
    axios
      .get<Butterfly[]>('http://localhost:8000/butterflies')
      .then((bfs) => setButterflies(bfs.data));
  }, []);

  return (<SimpleGrid minChildWidth="240px" spacing="40px">
    {
      butterflies.map((b: Butterfly) => (
        <Box key={b.name}>
          <ButterflyCard
            butterfly={b}
            onDelete={deleteButterflyWithId}
            onToggleWishlist={toggleWishlist}/>
        </Box>
      ))
    }
  </SimpleGrid>);
};

export default ButterflyList;

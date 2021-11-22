import React, { useState, useEffect } from 'react'
import { Butterfly } from '../../../../../server/controllers/butterfly/types'
import ButterflyCard from '../Card'
import axios from 'axios'

const styles = require('./list.css').default

const ButterflyList = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  const deleteButterflyWithId = (id: number) => {
    axios.delete(`http://localhost:8000/butterflies/${id}`).then(() => {
      setButterflies(butterflies.filter((butterfly) => butterfly.id !== id));
    });
  };
  const toggleWishlist = (id: number) => {
    axios.post(`http://localhost:8000/butterflies/${id}/toggle-wishlist-star`).then(() => {
      const newList = butterflies.map((item: Butterfly) => {
        if (item.id === id) {
          const updatedItem: Butterfly = {
            ...item,
            on_the_wishlist: !item.on_the_wishlist
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

  return <div className={styles.grid}>
    {
      butterflies.map(b => <div key={b.id} className={styles.item}>
        <div className={styles.itemWrapper}>
          <ButterflyCard butterfly={b}
                         onDelete={deleteButterflyWithId}
                         onToggleWishlist={toggleWishlist}
                         />
        </div>
      </div>)
    }
    </div>
}

export default ButterflyList

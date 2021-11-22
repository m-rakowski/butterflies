import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';
import ButterflyCard from '../Card';

const styles = require('./list.css').default;

const Wishlist = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([]);

  useEffect(() => {
    axios
      .get<Butterfly[]>('http://localhost:8000/butterflies?on_the_wishlist=true')
      .then((bfs) => setButterflies(bfs.data));
  }, []);

  return <div className={styles.grid}>
    {
      butterflies.map((b) => <div key={b.id} className={styles.item}>
        <div className={styles.itemWrapper}>
          <ButterflyCard butterfly={b}
                         readonlyMode={true}
                         />
        </div>
      </div>)
    }
    </div>;
};

export default Wishlist;

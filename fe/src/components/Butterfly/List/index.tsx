import React, { useState, useEffect } from 'react'
import { Butterfly } from '../../../../../server/controllers/butterfly/types'
import ButterflyCard from '../Card'

const styles = require('./list.css').default

const ButterflyList = () => {
  const [butterflies, setButterflies] = useState<Butterfly[]>([])

  useEffect(() => {
    fetch('http://localhost:8000/butterflies')
      .then(r => r.json())
      .then(bfs => setButterflies(bfs))
  }, [])

  return <div className={styles.grid}>
    {
      butterflies.map(b => <div key={b.id} className={styles.item}>
        <div className={styles.itemWrapper}>
          <ButterflyCard {...b}/>
        </div>
      </div>)
    }
  </div>
}

export default ButterflyList

import React from 'react';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';

const styles = require('./card.css').default

const ButterflyCard: React.FC<{ butterfly: Butterfly; onDelete: any }> = ({
  butterfly,
  onDelete,
}) => ( <div>
  <img className={styles.image} src={butterfly.image_url} alt={butterfly.name}/>
  <p className={styles.name}>{butterfly.name}</p>
  <p className={styles.species}>{butterfly.species}</p>
  <button type="button" onClick={() => onDelete(butterfly.id)}>Delete</button>
  <a href={butterfly.link} target="_blank">read more</a>
</div>)

export default ButterflyCard

import React from 'react';
import { Butterfly } from '../../../../../server/controllers/butterfly/types';

const styles = require('./card.css').default

const ButterflyCard: React.FC<Butterfly> = (props) => <div>
  <img className={styles.image} src={props.image_url} alt={props.name}/>
  <p className={styles.name}>{props.name}</p>
  <p className={styles.species}>{props.species}</p>
  <a href={props.link} target="_blank">read more</a>
</div>

export default ButterflyCard
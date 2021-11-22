import React from 'react';
import { ButterflyCardProps } from './ButterflyCardProps';

const styles = require('./card.css').default;

const ButterflyCard: React.FC<ButterflyCardProps> = (
  {
    butterfly,
    readonlyMode = false,
    onDelete,
    onToggleWishlist,
  },
) => (<div>
  <img className={styles.image} src={butterfly.image_url} alt={butterfly.name}/>
  <p className={styles.name}>{butterfly.name}
    {!readonlyMode && <button type="button"
            onClick={() => onToggleWishlist(butterfly.id)}
            className={[styles.wishListStar, butterfly.on_the_wishlist ? styles.wishListStarSelected : ''].join(' ')}
    >★
    </button> }
  </p>
  <p className={styles.species}>{butterfly.species}</p>
  {!readonlyMode && <button type="button" onClick={() => onDelete(butterfly.id)}>Delete</button>}
  <a href={butterfly.link} target="_blank">read more</a>
</div>)

export default ButterflyCard

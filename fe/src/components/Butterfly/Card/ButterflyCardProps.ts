import { Butterfly } from '../../../../../server/controllers/butterfly/types';

export interface ButterflyCardProps
{
  butterfly: Butterfly;
  onDelete?: any;
  onToggleWishlist?: any;
  readonlyMode: boolean;
}

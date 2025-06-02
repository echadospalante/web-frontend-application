import { Quote } from './quote';
import { VentureState } from './state';

export interface QuotesBoard {
  id: string;
  name: VentureState;
  cards: Quote[];
}

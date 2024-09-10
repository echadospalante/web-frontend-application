import { Quote } from "./quote";
import { QuoteState } from "./state";

export interface QuotesBoard {
  id: string;
  name: QuoteState;
  cards: Quote[];
}

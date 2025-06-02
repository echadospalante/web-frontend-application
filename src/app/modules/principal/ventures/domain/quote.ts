import { QuoteAdvisor } from './advisor';
import { QuoteArea } from './area';
import { QuoteClient } from './client';
import { VentureState } from './state';

export interface Quote {
  id: string;
  name: string;
  code: string;
  date: Date;
  form?: string;
  area: QuoteArea;
  advisor?: QuoteAdvisor;
  client?: QuoteClient;
  state: VentureState;
}

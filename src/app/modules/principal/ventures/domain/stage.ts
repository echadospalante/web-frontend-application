import { Note } from './note';

export interface QuoteLine {
  id: number;
  date: Date;
  name: string;
  notes?: Note[];
}

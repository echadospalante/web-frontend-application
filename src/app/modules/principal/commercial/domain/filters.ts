import { QuoteAdvisor } from "./advisor";
import { QuoteArea } from "./area";
import { QuoteState } from "./state";

export interface DateRange {
  min?: Date;
  max?: Date;
}

export enum QuoteInclude {
  Formulario = "Formulario",
  Etapas = "Etapas",
}

export interface QuoteFilter {
  search: string;
  dateRange: DateRange;
  areas: QuoteArea[];
  advisors: QuoteAdvisor[];
  states: QuoteState[];
  include: QuoteInclude[];
}

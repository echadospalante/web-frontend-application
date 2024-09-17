import { QuoteAdvisor } from "./advisor";
import { QuoteArea } from "./area";
import { VentureState } from "./state";

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
  states: VentureState[];
  include: QuoteInclude[];
}

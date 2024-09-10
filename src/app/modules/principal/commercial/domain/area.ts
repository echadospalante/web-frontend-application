// export enum QuoteArea {
//   SOFTWARE_DEVELOPMENT = "Desarrollo de Software",
//   FORMS_DIGITALIZATION = "Digitalización de Formularios",
//   UI_UX_DESIGN = "Diseño UI/UX",
//   DIGITAL_MARKETING = "Marketing Digital",
// }

import { QuoteState } from "./state";

export interface QuoteAreaCreate {
  name: string;
}

export interface QuoteArea {
  id: number;
  name: string;
  summaries?: AreaSummary[];
  createdAt?: Date;
}

export interface AreaSummary {
  count: number;
  estado: QuoteState;
}

export enum QuoteState {
  ACTIVE = "ACTIVA",
  COMPLETED = "TERMINADA",
  NOT_COMPLETED = "NO_TERMINADA",
}

export const getQuoteStateColor = (state: QuoteState) => {
  switch (state) {
    case QuoteState.ACTIVE:
      return "info";
    case QuoteState.COMPLETED:
      return "success";
    case QuoteState.NOT_COMPLETED:
      return "danger";
    default:
      return "primary";
  }
};

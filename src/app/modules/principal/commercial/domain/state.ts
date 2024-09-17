export enum VentureState {
  ACTIVE = "ACTIVA",
  COMPLETED = "TERMINADA",
  NOT_COMPLETED = "NO_TERMINADA",
}

export const getVentureStateColor = (state: VentureState) => {
  switch (state) {
    case VentureState.ACTIVE:
      return "info";
    case VentureState.COMPLETED:
      return "success";
    case VentureState.NOT_COMPLETED:
      return "danger";
    default:
      return "primary";
  }
};

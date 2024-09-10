import { useSelector } from "react-redux";

import {
  changeFilterAdvisors,
  changeFilterArea,
  changeFilterDateRange,
  changeFilterIncludedFields,
  changeFilterSearch,
  changeFilterState,
  selectQuotes,
} from "../../../../config/redux/reducers/quotes.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { QuoteArea } from "../domain/area";
import { DateRange, QuoteInclude } from "../domain/filters";
import { QuoteState } from "../domain/state";
import { QuoteAdvisor } from "../domain/advisor";

const useQuoteFilters = () => {
  const dispatch = useAppDispatch();

  const { filters } = useSelector(selectQuotes);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeFilterSearch(value));
  };

  const handleChangeAreas = (areas: QuoteArea[]) => {
    dispatch(changeFilterArea(areas));
  };

  const handleChangeAdvisors = (advisors: QuoteAdvisor[]) => {
    dispatch(changeFilterAdvisors(advisors));
  };

  const handleChangeStates = (states: QuoteState[]) => {
    dispatch(changeFilterState(states));
  };

  const handleChangeDateRange = (dateRange: DateRange) => {
    dispatch(changeFilterDateRange(dateRange));
  };

  const handleChangeIncludedFields = (include: QuoteInclude[]) => {
    dispatch(changeFilterIncludedFields(include));
  };

  return {
    filters,
    handleChangeAreas,
    handleChangeStates,
    handleChangeSearch,
    handleChangeAdvisors,
    handleChangeDateRange,
    handleChangeIncludedFields,
  };
};

export default useQuoteFilters;

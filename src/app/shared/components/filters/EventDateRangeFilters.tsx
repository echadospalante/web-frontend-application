import { Spanish } from 'flatpickr/dist/l10n/es.js';
import Flatpickr from 'react-flatpickr';

import 'flatpickr/dist/themes/material_blue.css';

import useEventsFilters from '../../../modules/principal/ventures/hooks/useEventsFilters';
import { Label } from 'reactstrap';

const EventDateRangeFilters = () => {
  const { dateRange, changeDateRange } = useEventsFilters();

  return (
    <div className="mt-3">
      <Label htmlFor="events-search">Rango de fecha</Label>
      <Flatpickr
        options={{
          mode: 'range',
          dateFormat: 'Y-m-d',
          locale: Spanish,
        }}
        value={[dateRange.from, dateRange.to]}
        onChange={([from, to]) => changeDateRange({ from, to })}
        className="form-control text-center px-0 mx-0 btn-soft-primary rounded rounded-md"
      />
    </div>
  );
};

export default EventDateRangeFilters;

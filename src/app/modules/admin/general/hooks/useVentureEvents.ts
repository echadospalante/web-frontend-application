import { useEffect, useState } from "react";

import { EventCategory, EventLocation } from "echadospalante-domain";
import { useSelector } from "react-redux";

import { selectVentureEventsManagement } from "../../../../config/redux/reducers/admin/venture-events-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { textToRGB } from "../../../../shared/helpers/colors";
import { fetchVentureEventsMiddleware } from "../api/middleware/venture-events.middleware";

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  location: EventLocation;
  categories: EventCategory[];
  backgroundColor: string;
}

const useVentureEvents = () => {
  const { filters, events } = useSelector(selectVentureEventsManagement);
  const [eventsRequest, setEventsRequest] = useState({
    loading: true,
    error: false,
  });

  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>(
    events.items.map((item) => ({
      id: item.id,
      title: item.title,
      start: item.startDate,
      end: item.endDate,
      description: item.description,
      location: item.location,
      categories: item.categories,
      backgroundColor: textToRGB(item.title),
    }))
  );

  useEffect(() => {
    setCalendarEvents(
      events.items.map((item) => ({
        id: item.id,
        title: item.title,
        start: item.startDate,
        end: item.endDate,
        description: item.description,
        location: item.location,
        categories: item.categories,
        backgroundColor: textToRGB(item.title),
      }))
    );
  }, [events]);

  const dispatch = useAppDispatch();

  const fetchVentureEvents = () => {
    setEventsRequest({
      loading: true,
      error: false,
    });

    setCalendarEvents([]);

    dispatch(fetchVentureEventsMiddleware(filters))
      .then(() => {
        setEventsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setEventsRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    setEventsRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVentureEventsMiddleware(filters))
      .then(() => {
        setEventsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setEventsRequest({
          loading: false,
          error: true,
        });
      });
  }, [dispatch, filters]);

  return {
    ...eventsRequest,
    ...filters,
    calendarEvents,
    ...events,
    fetchVentureEvents,
  };
};

export default useVentureEvents;

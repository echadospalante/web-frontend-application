import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import {
  selectVentureSponsorsManagement,
  setVentureSponsorsFilters,
} from "../../../../config/redux/reducers/admin/venture-sponsorships-management.reducer";
import { useAppDispatch } from "../../../../config/redux/store/store.config";
import { fetchVentureSponsorshipsMiddleware } from "../api/middleware/venture-sponsorships.middleware";

const useVentureSponsorships = () => {
  const { filters, sponsors } = useSelector(selectVentureSponsorsManagement);

  const dispatch = useAppDispatch();

  const [sponsorsRequest, setSponsorsRequest] = useState({
    loading: true,
    error: false,
  });

  const fetchVentureSponsors = () => {
    setSponsorsRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVentureSponsorshipsMiddleware(filters))
      .then(() => {
        setSponsorsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setSponsorsRequest(() => ({
          loading: false,
          error: true,
        }));
      });
  };

  const setPage = (page: number) => {
    dispatch(setVentureSponsorsFilters({ ...filters, page }));
  };

  useEffect(() => {
    setSponsorsRequest({
      loading: true,
      error: false,
    });

    dispatch(fetchVentureSponsorshipsMiddleware(filters))
      .then(() => {
        setSponsorsRequest({
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setSponsorsRequest({
          loading: false,
          error: true,
        });
      });
  }, [dispatch, filters]);

  return {
    ...sponsorsRequest,
    ...filters,
    ...sponsors,
    fetchVentureSponsors,
    setPage,
  };
};

export default useVentureSponsorships;

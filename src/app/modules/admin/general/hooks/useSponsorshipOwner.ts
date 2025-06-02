import { useEffect, useState } from 'react';

import { User } from 'echadospalante-domain';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { fetchOwnerBySponsorshipIdMiddleware } from '../api/middleware/venture-sponsorships.middleware';

const useSponsorshipOwner = (sponsorshipId: string) => {
  const dispatch = useAppDispatch();
  const [ownerRequest, setOwnerRequest] = useState({
    owner: undefined as User | undefined,
    loading: true,
    error: false,
  });

  const fetchAllVentureCategories = () => {
    setOwnerRequest({
      owner: undefined,
      loading: true,
      error: false,
    });

    dispatch(fetchOwnerBySponsorshipIdMiddleware(sponsorshipId))
      .then((owner) => {
        setOwnerRequest({
          owner,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setOwnerRequest(() => ({
          owner: undefined,
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    setOwnerRequest({
      owner: undefined,
      loading: true,
      error: false,
    });

    dispatch(fetchOwnerBySponsorshipIdMiddleware(sponsorshipId))
      .then((owner) => {
        setOwnerRequest({
          owner,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setOwnerRequest({
          owner: undefined,
          loading: false,
          error: true,
        });
      });
  }, [dispatch]);

  return {
    ...ownerRequest,
    fetchAllVentureCategories,
  };
};

export default useSponsorshipOwner;

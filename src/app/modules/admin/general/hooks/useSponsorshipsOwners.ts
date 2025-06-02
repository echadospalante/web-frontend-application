import { useEffect, useState } from 'react';

import { User } from 'echadospalante-domain';

import { useAppDispatch } from '../../../../config/redux/store/store.config';
import { fetchOwnerBySponsorshipIdMiddleware } from '../api/middleware/venture-sponsorships.middleware';

const useSponsorshipsOwners = (sponsorshipIds: string[]) => {
  const dispatch = useAppDispatch();
  const [ownerRequest, setOwnerRequest] = useState({
    owners: [] as { id: string; owner: User }[],
    loading: true,
    error: false,
  });

  const fetchAllSponsorshipsOwners = () => {
    setOwnerRequest({
      owners: [],
      loading: true,
      error: false,
    });

    return Promise.all(
      sponsorshipIds.map((sponsorshipId) =>
        dispatch(fetchOwnerBySponsorshipIdMiddleware(sponsorshipId)).then(
          (owner) => ({ id: sponsorshipId, owner }),
        ),
      ),
    )
      .then((owners) => {
        setOwnerRequest({
          owners,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setOwnerRequest(() => ({
          owners: [],
          loading: false,
          error: true,
        }));
      });
  };

  useEffect(() => {
    setOwnerRequest({
      owners: [],
      loading: true,
      error: false,
    });

    Promise.all(
      sponsorshipIds.map((sponsorshipId) =>
        dispatch(fetchOwnerBySponsorshipIdMiddleware(sponsorshipId)).then(
          (owner) => ({ id: sponsorshipId, owner }),
        ),
      ),
    )
      .then((owners) => {
        setOwnerRequest({
          owners,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        setOwnerRequest(() => ({
          owners: [],
          loading: false,
          error: true,
        }));
      });
  }, [dispatch]);

  return {
    ...ownerRequest,
    fetchAllSponsorshipsOwners,
  };
};

export default useSponsorshipsOwners;

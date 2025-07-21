import axios from 'axios';

import {
  EventDonation,
  Pagination,
  PublicationCategory,
  VentureSponsorship,
} from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain';

import env from '../../../../../../environment/environment';

export interface PublicationCategoriesStats {
  id: string;
  name: string;
  slug: string;
  publicationsCount: number;
}

export class ContributionsApi {
  private static readonly DONATIONS_API_BASE_URL = `${env.API_URL}/api/v1/events`;
  private static readonly SPONSORSHIPS_API_BASE_URL = `${env.API_URL}/api/v1/ventures`;

  public static fetchUserDonations(
    type: 'sent' | 'received',
    pagination: Pagination,
  ): Promise<PaginatedBody<EventDonation>> {
    // return axios
    //   .get<PaginatedBody<EventDonation>>(`${ContributionsApi.DONATIONS_API_BASE_URL}/owned-donations`, {
    //     withCredentials: true,
    //     params: {
    //       type,
    //       ...pagination,
    //     },
    //   })
    //   .then(({ data }) => data);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const res: PaginatedBody<EventDonation> = {
      total: 3,
      items: [
        {
          id: '123',
          amount: 100000,
          currency: 'COP',
          createdAt: yesterday,
          donor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          event: {
            id: 'bc5cc5f8-1e78-46e5-a1be-01bc75f7fea7',
            title: 'Prueba 2',
            description: 'Prueba 2 descripción',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-publications-bucket/biciArreglos.png',
            slug: 'prueba-2',
            venture: {
              id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
              name: 'Empanadas Don Pepe',
              slug: 'empanadas-don-pepe',
              coverPhoto:
                'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
              description:
                'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
              active: true,
              verified: false,
              subscriptionsCount: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
              categories: [],
              events: [],
              sponsorships: [],
              subscriptions: [],
              publications: [],
            },
            location: {
              id: '1461f7ff-fcee-4e7f-9c8d-f2ba0c309023',
              location: {
                type: 'Point',
                coordinates: [-75.4359, 6.0282],
              },
              description: 'Barrio La Aldea',
              municipality: {
                id: 0,
                name: '',
                department: {
                  id: 0,
                  name: '',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            },
            categories: [],
            datesAndHours: [
              {
                date: '2025-07-18',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
              {
                date: '2025-07-19',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
            contact: {
              id: '',
            },
            donations: [],
          },
        },
        {
          id: '234',
          amount: 50000,
          currency: 'COP',
          createdAt: yesterday,
          donor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          event: {
            id: 'bc5cc5f8-1e78-46e5-a1be-01bc75f7fea7',
            title: 'Prueba 2',
            description: 'Prueba 2 descripción',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-publications-bucket/biciArreglos.png',
            slug: 'prueba-2',
            venture: {
              id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
              name: 'Empanadas Don Pepe',
              slug: 'empanadas-don-pepe',
              coverPhoto:
                'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
              description:
                'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
              active: true,
              verified: false,
              subscriptionsCount: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
              categories: [],
              events: [],
              sponsorships: [],
              subscriptions: [],
              publications: [],
            },
            location: {
              id: '1461f7ff-fcee-4e7f-9c8d-f2ba0c309023',
              location: {
                type: 'Point',
                coordinates: [-75.4359, 6.0282],
              },
              description: 'Barrio La Aldea',
              municipality: {
                id: 0,
                name: '',
                department: {
                  id: 0,
                  name: '',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            },
            categories: [],
            datesAndHours: [
              {
                date: '2025-07-18',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
              {
                date: '2025-07-19',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
            contact: {
              id: '',
            },
            donations: [],
          },
        },
        {
          id: '345',
          amount: 50000,
          currency: 'COP',
          createdAt: yesterday,
          donor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          event: {
            id: 'bc5cc5f8-1e78-46e5-a1be-01bc75f7fea7',
            title: 'Prueba 2',
            description: 'Prueba 2 descripción',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-publications-bucket/biciArreglos.png',
            slug: 'prueba-2',
            venture: {
              id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
              name: 'Empanadas Don Pepe',
              slug: 'empanadas-don-pepe',
              coverPhoto:
                'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
              description:
                'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
              active: true,
              verified: false,
              subscriptionsCount: 0,
              createdAt: new Date(),
              updatedAt: new Date(),
              categories: [],
              events: [],
              sponsorships: [],
              subscriptions: [],
              publications: [],
            },
            location: {
              id: '1461f7ff-fcee-4e7f-9c8d-f2ba0c309023',
              location: {
                type: 'Point',
                coordinates: [-75.4359, 6.0282],
              },
              description: 'Barrio La Aldea',
              municipality: {
                id: 0,
                name: '',
                department: {
                  id: 0,
                  name: '',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
            },
            categories: [],
            datesAndHours: [
              {
                date: '2025-07-18',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
              {
                date: '2025-07-19',
                workingRanges: [
                  {
                    end: '17:00',
                    start: '09:00',
                  },
                ],
              },
            ],
            createdAt: new Date(),
            updatedAt: new Date(),
            contact: {
              id: '',
            },
            donations: [],
          },
        },
      ],
    };

    return Promise.resolve(res);
  }

  public static fetchUserSponsorships(
    type: 'sent' | 'received',
    pagination: Pagination,
  ): Promise<PaginatedBody<VentureSponsorship>> {
    // return axios
    //   .get<PaginatedBody<VentureSponsorship>>(
    //     `${ContributionsApi.SPONSORSHIPS_API_BASE_URL}/owned-sponsorships`,
    //     {
    //       withCredentials: true,
    //       params: {
    //         type,
    //         ...pagination,
    //       },
    //     },
    //   )
    //   .then(({ data }) => data);

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const res: PaginatedBody<VentureSponsorship> = {
      total: 3,
      items: [
        {
          id: '123',
          monthlyAmount: 100000,
          createdAt: yesterday,
          sponsor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          venture: {
            id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
            name: 'Empanadas Don Pepe',
            slug: 'empanadas-don-pepe',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
            description:
              'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
            active: true,
            location: {
              id: '123',
              municipality: {
                id: 0,
                name: 'La Ceja',
                department: {
                  id: 0,
                  name: 'Antioquia',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              description: 'Barrio La Aldea',
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            verified: false,
            subscriptionsCount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            categories: [],
            events: [],
            sponsorships: [],
            subscriptions: [],
            publications: [],
          },
          updatedAt: new Date(),
        },
        {
          id: '234',
          monthlyAmount: 100000,
          createdAt: yesterday,
          sponsor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          venture: {
            id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
            name: 'Empanadas Don Pepe',
            slug: 'empanadas-don-pepe',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
            description:
              'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
            active: true,
            verified: false,
            location: {
              id: '123',
              municipality: {
                id: 0,
                name: 'La Ceja',
                department: {
                  id: 0,
                  name: 'Antioquia',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            subscriptionsCount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            categories: [],
            events: [],
            sponsorships: [],
            subscriptions: [],
            publications: [],
          },
          updatedAt: new Date(),
        },
        {
          id: '345',
          monthlyAmount: 100000,
          createdAt: yesterday,
          sponsor: {
            id: '0259cbbf-653b-4478-b9ea-145cfc7818ef',
            picture:
              'https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/12.jpg',
            email: 'Sandra.Gottlieb@gmail.com',
            firstName: 'Sandra',
            lastName: 'Gottlieb',
            active: true,
            createdAt: new Date(),
            updatedAt: new Date(),
            onboardingCompleted: false,
            verified: false,
            roles: [],
            gender: 'M',
            birthDate: new Date('1990-01-01'),
            municipality: {
              id: 0,
              name: '',
              department: {
                id: 0,
                name: '',
                municipalities: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              lat: 0,
              lng: 0,
              ventureLocations: [],
              eventLocations: [],
              users: [],
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            preferences: [],
            comments: [],
            donations: [],
            notifications: [],
            publicationClaps: [],
            sponsorships: [],
            subscriptions: [],
            ventures: [],
          },
          venture: {
            id: '5eed440e-e0f9-4e5c-922a-e877894aecb0',
            name: 'Empanadas Don Pepe',
            slug: 'empanadas-don-pepe',
            coverPhoto:
              'https://storage.googleapis.com/echadospalante-ventures-bucket/7ad7063a-64c8-4a6e-a434-8bbc200da257.jpeg',
            description:
              'Empanadas Don Pepe es el rincón donde el sabor casero cobra vida en cada bocado: crujientes por fuera, jugosas por dentro y hechas con la receta tradicional que ha conquistado paladares por generaciones. ¡Sabor que se siente, tradición que se comparte!',
            location: {
              id: '123',
              municipality: {
                id: 0,
                name: 'La Ceja',
                department: {
                  id: 0,
                  name: 'Antioquia',
                  municipalities: [],
                  createdAt: new Date(),
                  updatedAt: new Date(),
                },
                lat: 0,
                lng: 0,
                ventureLocations: [],
                eventLocations: [],
                users: [],
                createdAt: new Date(),
                updatedAt: new Date(),
              },
              createdAt: new Date(),
              updatedAt: new Date(),
            },
            active: true,
            verified: false,
            subscriptionsCount: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            categories: [],
            events: [],
            sponsorships: [],
            subscriptions: [],
            publications: [],
          },
          updatedAt: new Date(),
        },
      ],
    };

    return Promise.resolve(res);
  }
}

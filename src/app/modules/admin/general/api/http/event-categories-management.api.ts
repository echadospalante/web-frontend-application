import axios from 'axios';

import { EventCategory } from 'echadospalante-domain';
import { PaginatedBody } from 'echadospalante-domain';

import env from '../../../../../../environment/environment';

export interface EventCategoriesStats {
  id: string;
  name: string;
  slug: string;
  eventsCount: number;
}

export class EventCategoriesApi {
  private static readonly API_BASE_URL = `${env.API_URL}/api/v1/events/categories`;

  public static fetchEventCategories(): Promise<
    PaginatedBody<EventCategory>
  > {
    return axios
      .get<PaginatedBody<EventCategory>>(
        `${EventCategoriesApi.API_BASE_URL}/all`,
        {
          withCredentials: true,
        },
      )
      .then(({ data }) => data);
  }

  public static fetchEventCategoriesStats() {
    return axios
      .get<
        PaginatedBody<EventCategoriesStats>
      >(`${EventCategoriesApi.API_BASE_URL}/count-stats`, { withCredentials: true })
      .then(({ data }) => data);
  }

  public static updateEventCategory(
    id: string,
    category: EventCategory,
  ): Promise<void> {
    console.log({ id, category });
    throw new Error('Method not implemented.');
  }

  public static createEventCategory(
    // category: EventCategoryCreate,
    category: any
  ): Promise<void> {
    console.log({ category });
    throw new Error('Method not implemented.');
  }
}

import { Sponsorship } from "../donations/sponsor";
import { VentureEvent } from "../feeds/event";
import { Publication } from "../feeds/publication";
import { Subscription } from "./subscription";
import { Venture } from "./venture";

export interface VentureDetail {
  id: number;
  venture: Venture;
  events: VentureEvent[];
  sponsorships: Sponsorship[];
  subscriptions: Subscription[];
  publications: Publication[];
}

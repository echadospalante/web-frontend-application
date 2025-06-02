import { QuoteCompany } from './company';

export interface QuoteClient {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  company: QuoteCompany;
  createdAt: Date;
}

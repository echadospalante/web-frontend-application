import { Role } from './Role';

export interface LoginResponse {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  picture: string;
  active: boolean;
  createdAt: Date;
  onboardingCompleted: boolean;
  roles: Role[];
}

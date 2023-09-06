import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CustomerServiceRepresentativeInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  joined_at?: any;
  left_at?: any;
  status?: string;
  role?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface CustomerServiceRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  status?: string;
  role?: string;
}

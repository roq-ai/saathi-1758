import { CustomerInterface } from 'interfaces/customer';
import { CustomerServiceRepresentativeInterface } from 'interfaces/customer-service-representative';
import { RechargeCouponInterface } from 'interfaces/recharge-coupon';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  customer?: CustomerInterface[];
  customer_service_representative?: CustomerServiceRepresentativeInterface[];
  recharge_coupon?: RechargeCouponInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    customer?: number;
    customer_service_representative?: number;
    recharge_coupon?: number;
    team_member?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

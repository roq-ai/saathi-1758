const mapping: Record<string, string> = {
  customers: 'customer',
  'customer-service-representatives': 'customer_service_representative',
  organizations: 'organization',
  'recharge-coupons': 'recharge_coupon',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

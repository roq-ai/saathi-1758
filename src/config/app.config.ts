interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'Saathi',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View the details of the Organization',
    'Purchase recharge coupons',
    'Chat with other users anonymously',
    'Manage chat history and profile details',
  ],
  ownerAbilities: [
    'Manage the organization',
    'Invite team members and customer service representatives to the organization',
    'Manage recharge coupons',
  ],
};

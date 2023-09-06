import axios from 'axios';
import queryString from 'query-string';
import { RechargeCouponInterface, RechargeCouponGetQueryInterface } from 'interfaces/recharge-coupon';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRechargeCoupons = async (
  query?: RechargeCouponGetQueryInterface,
): Promise<PaginatedInterface<RechargeCouponInterface>> => {
  const response = await axios.get('/api/recharge-coupons', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRechargeCoupon = async (rechargeCoupon: RechargeCouponInterface) => {
  const response = await axios.post('/api/recharge-coupons', rechargeCoupon);
  return response.data;
};

export const updateRechargeCouponById = async (id: string, rechargeCoupon: RechargeCouponInterface) => {
  const response = await axios.put(`/api/recharge-coupons/${id}`, rechargeCoupon);
  return response.data;
};

export const getRechargeCouponById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/recharge-coupons/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRechargeCouponById = async (id: string) => {
  const response = await axios.delete(`/api/recharge-coupons/${id}`);
  return response.data;
};

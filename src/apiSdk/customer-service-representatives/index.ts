import axios from 'axios';
import queryString from 'query-string';
import {
  CustomerServiceRepresentativeInterface,
  CustomerServiceRepresentativeGetQueryInterface,
} from 'interfaces/customer-service-representative';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerServiceRepresentatives = async (
  query?: CustomerServiceRepresentativeGetQueryInterface,
): Promise<PaginatedInterface<CustomerServiceRepresentativeInterface>> => {
  const response = await axios.get('/api/customer-service-representatives', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCustomerServiceRepresentative = async (
  customerServiceRepresentative: CustomerServiceRepresentativeInterface,
) => {
  const response = await axios.post('/api/customer-service-representatives', customerServiceRepresentative);
  return response.data;
};

export const updateCustomerServiceRepresentativeById = async (
  id: string,
  customerServiceRepresentative: CustomerServiceRepresentativeInterface,
) => {
  const response = await axios.put(`/api/customer-service-representatives/${id}`, customerServiceRepresentative);
  return response.data;
};

export const getCustomerServiceRepresentativeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/customer-service-representatives/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteCustomerServiceRepresentativeById = async (id: string) => {
  const response = await axios.delete(`/api/customer-service-representatives/${id}`);
  return response.data;
};

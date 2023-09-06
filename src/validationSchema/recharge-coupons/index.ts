import * as yup from 'yup';

export const rechargeCouponValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  validity: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});

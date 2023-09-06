import * as yup from 'yup';

export const customerServiceRepresentativeValidationSchema = yup.object().shape({
  joined_at: yup.date().required(),
  left_at: yup.date().nullable(),
  status: yup.string().nullable(),
  role: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});

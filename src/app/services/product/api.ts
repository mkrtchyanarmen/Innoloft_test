import { CardLayoutProps } from '@layout/CardLayout';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductType, TransformedDataType } from './type';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URI }),
  endpoints: (builder) => ({
    getProduct: builder.query<TransformedDataType, { id?: string }>({
      query: ({ id }) => `/product/${id}/`,
      transformResponse: ({ company, user }: ProductType): TransformedDataType => {
        const layoutProps: Omit<CardLayoutProps, 'children'> = {
          companyLogo: company?.logo,
          companyName: company?.name,
          img: user.profilePicture,
          name: user.firstName,
          surname: user.lastName,
          companyAddress: `${company?.address.street} ${company?.address.house} \n ${company?.address.zipCode} ${company?.address.city.name}, ${company?.address.country.name} `,
          map: {
            latitude: company?.address.latitude,
            longitude: company?.address.longitude,
          },
        };

        return { layoutProps };
      },
    }),
  }),
});

export const { useGetProductQuery } = productApi;

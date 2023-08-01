import { CardLayoutProps } from '@layout/CardLayout/CardLayout';

type BusinessModelType = { id: number; name: string };
type CategoryType = { id: number; name: string };

type AddressType = {
  city: { name: string };
  country: { name: string };
  house: string;
  latitude: string;
  longitude: string;
  street: string;
  zipCode: string;
};

type CompanyType = {
  address: AddressType;
  logo: string;
  name: string;
};

type TrlType = {
  id: number;
  name: string;
};

type UserType = {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  position: string;
  profilePicture: string;
  sex: number;
};

export type ProductType = {
  businessModels?: BusinessModelType[];
  categories?: CategoryType[];
  company?: CompanyType;
  description?: string;
  id: number;
  investmentEffort?: string;
  name?: string;
  picture?: string;
  trl?: TrlType;
  type: {
    id: number;
    name: string;
  };
  user: UserType;
  video?: string;
};

export type TransformedDataType = {
  layoutProps: Omit<CardLayoutProps, 'children'>;
};

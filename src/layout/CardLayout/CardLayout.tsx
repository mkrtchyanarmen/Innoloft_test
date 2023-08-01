import LocationIcon from '@assets/icon/location.svg';
import UserInfo, { UserInfoProps } from '@components/UserInfo';
import { FC, ReactElement } from 'react';

export type CardLayoutProps = {
  children: ReactElement;
  companyAddress?: string;
  companyLogo?: string;
  map?: {
    latitude?: string;
    longitude?: string;
  };
  showMap?: boolean;
} & UserInfoProps;

const CardLayout: FC<CardLayoutProps> = ({
  children,
  companyLogo,
  companyAddress,
  map,
  showMap = true,
  ...userProps
}) => {
  return (
    <div className="flex">
      <div className="grow bg-green-500">{children}</div>
      <div className="w-96 p-5">
        <h4 className="text-base font-semibold mb-5">Offered By</h4>
        <img alt="Company logo" className="mb-2 h-9" src={companyLogo} />
        <UserInfo {...userProps} />
        <div className="my-3 py-2 flex gap-1">
          <LocationIcon />
          <p className="whitespace-pre-line text-sm">{companyAddress}</p>
        </div>
        {showMap && (
          <iframe
            height="200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3046.5915835532114!2d${map?.longitude}!3d${map?.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shy!2sam!4v1690758298103!5m2!1shy!2sam`}
            style={{ border: 0 }}
            title="map"
            width="100%"
          />
        )}
      </div>
    </div>
  );
};

export default CardLayout;

import { FC } from 'react';

export type UserInfoProps = {
  companyName?: string;
  img?: string;
  name?: string;
  surname?: string;
};
const UserInfo: FC<UserInfoProps> = ({ img, companyName, name, surname }) => {
  return (
    <div className="w-full h-14 flex gap-4 items-center">
      <img alt="User profile" className="w-14 h-14 rounded-full" src={img} />
      <div>
        <h6 className="text-lg font-semibold">{`${name} ${surname}`}</h6>
        <p className="text-sm">{companyName}</p>
      </div>
    </div>
  );
};

export default UserInfo;

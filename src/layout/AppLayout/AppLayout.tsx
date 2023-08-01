import HomeIcon from '@assets/icon/home.svg';
import UserInfo from '@components/UserInfo';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

type AppLayoutProps = {
  children: ReactElement;
};
const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center px-5 text-black">
      <Header />
      <div className="w-full max-w-360 h-screen pt-20 flex justify-between gap-5">
        <div className="w-72 flex flex-col gap-3">
          <UserInfo
            companyName="Innoloft GmbH"
            img="https://img.innoloft.com/users/user_8d48197d.png"
            name="Sven"
            surname="Pietsch"
          />
          <Link to="/">
            <div className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-slate-200">
              <HomeIcon />
              <p className="text-sm">Home</p>
            </div>
          </Link>
        </div>
        <div className="max-w-7xl grow">{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;

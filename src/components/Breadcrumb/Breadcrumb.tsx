import ArrowIcon from '@assets/icon/arrow.svg';
import HomeIcon from '@assets/icon/home.svg';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbProps = {
  route: { title: string; to: string }[];
};

const Breadcrumb: FC<BreadcrumbProps> = ({ route }) => {
  return (
    <div className="flex gap-2 items-center">
      <Link to="/">
        <HomeIcon />
      </Link>
      {route.map(({ to, title }, index) => (
        <Link key={index} to={to}>
          <div className="flex gap-1 items-center">
            <ArrowIcon />
            <p>{title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Breadcrumb;

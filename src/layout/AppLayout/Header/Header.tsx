import Logo from '@assets/icon/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-screen h-14 fixed left-0 top-0 flex justify-center px-5 bg-primary">
      <div className="w-full max-w-360 h-full flex items-center justify-between gap-5">
        <div className="w-72">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="max-w-7xl grow bg-red-500">hello</div>
      </div>
    </div>
  );
};

export default Header;

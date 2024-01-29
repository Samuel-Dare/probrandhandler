import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="text-colorGrey900">
      <img src="assets/logo.png" alt="logo" className="w-[150px]" />
    </NavLink>
  );
}

export default Logo;

import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/" className="text-colorGrey900">
      <img
        src="../assets/logo3.png"
        alt="logo"
        className="w-[150px] border-2 border-colorBlue100"
      />
    </NavLink>
  );
}

export default Logo;

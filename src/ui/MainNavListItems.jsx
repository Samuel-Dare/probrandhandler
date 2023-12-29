import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useScreenSize } from '../contexts/ScreenSize';

const liStyle = 'border-colorBrand500 border-b p-5 md:border-none md:p-0';

function NavListItems() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isSmallScreen } = useScreenSize();

  const toggleDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  return (
    <div className="text-colorGrey800 md:flex md:justify-between">
      {/* Mobile Menu Icon */}
      <button
        className="focus:outline-none md:hidden"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <FaBars />
      </button>

      {/* Navigation Menu (Hidden on Small Screens) */}
      <ul
        className={`${
          isSmallScreen && isMobileMenuOpen
            ? 'absolute left-0 top-0 h-screen w-2/3 space-y-5 border-y-2 border-colorBrand500 bg-colorGrey50 p-5 opacity-95'
            : 'hidden'
        }  md:flex md:gap-7 `}
      >
        <li className={liStyle}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/services">Our Services</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/how-it-works">How it Works</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li className={liStyle}>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavListItems;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import OverlayContent from './OverlayContent';
import { useScreenSize } from '../contexts/ScreenSize';
import { useOverlay } from '../contexts/OverlayContext';

export function HeaderOverlayContent() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState('');
  const { isOverlayVisible, handleCloseOverlay } = useOverlay();

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (data) => {
    handleCloseOverlay();
    //   navigate('/task-description-form');
    console.log(data);
  };
  return (
    <div className=" flex flex-col items-center justify-center space-y-8 rounded-md bg-colorGrey100 px-5 py-10 shadow-lg md:h-[300px] md:w-[600px] md:px-3 md:py-20 md:text-2xl">
      <h1 className="text-1xl font-bold text-colorGrey800 md:text-2xl">
        How Can We Help You?
      </h1>
      <p className="w-4/5 border-b border-colorGrey400"></p>

      <Button type="primary" onClick={() => handleClick('data')}>
        Let's Talk!
      </Button>

      <p className="text-center text-base">
        If your business is a startup, for as little as $50, we can create a
        brand with a strong identity for your business. Reach us now to get
        started.
      </p>

      {isOverlayVisible && (
        <OverlayContent>
          <form action="submit" className="space-y-3">
            <input
              className="w-full p-2"
              type="text"
              //   value={inputText}
              //   onChange={handleChange}
              placeholder="Name"
            />
            <input
              className="w-full p-2"
              type="text"
              //   value={inputText}
              //   onChange={handleChange}
              placeholder="Email"
            />
            <input
              className="w-full p-2"
              type="text"
              //   value={inputText}
              //   onChange={handleChange}
              placeholder="How can we help you?"
            />
            <Button type="primaryFull">Submit</Button>
          </form>
        </OverlayContent>
      )}
    </div>
  );
}

function Header() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/home-mobile.png'
    : 'assets/home.png';

  return (
    <div className={`h-auto md:h-screen ${isSmallScreen ? 'h-auto' : 'mb-0'}`}>
      <div
        className=" h-full w-full justify-center md:flex md:items-center 
      "
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPositionY: 'top',
          backgroundPositionX: 'left',
          height: isSmallScreen ? '250px' : '',
        }}
      >
        <main className="hidden md:block">
          <HeaderOverlayContent />
        </main>
      </div>

      <main className="md:hidden">
        <HeaderOverlayContent />
      </main>
    </div>
  );
}

export default Header;

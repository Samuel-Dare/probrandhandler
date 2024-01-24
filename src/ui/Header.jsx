import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import OverlayContent from './OverlayContent';
import { useScreenSize } from '../contexts/ScreenSize';
import { useOverlay } from '../contexts/OverlayContext';
import Animation from '../utils/Animation';

const primaryFull =
  'inline-block text-sm bg-colorBrand1 font-semibold uppercase tracking-wide text-colorGrey50 transition-colors duration-300 hover:bg-colorBrand2 focus:bg-colorBrand2 focus:outline-none focus:ring focus:ring-colorBrand2 focus:ring-offset-2 disabled:cursor-not-allowed w-full rounded-none px-4 py-3 md:px-6 md:py-4 md:text-lg';

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
  };
  return (
    <Animation type="1">
      <div className=" flex flex-col items-center justify-center space-y-5 bg-colorGrey100 px-5 py-10 shadow-lg md:w-[580px]  md:p-5 md:text-2xl">
        <h1 className="text-1xl font-bold text-colorGrey800 md:text-3xl">
          Get Your Dream Brand
        </h1>
        <p className="w-4/5 border-b border-colorGrey400"></p>

        <Button type="primary" to="https://wa.me/message/JISFLWSZK74GD1">
          Let's Talk!
        </Button>
        {/* <Button type="primary" onClick={() => handleClick('data')}>
          Let's Talk!
        </Button> */}

        <p className="text-center text-base">
          If your business is a startup, for as little as $50, we can create a
          brand with a strong identity for your business. Reach us now to get
          started.
        </p>

        {/* {isOverlayVisible && (
          <OverlayContent>
            <form
              action="https://formsubmit.io/send/probrandhandler@qualityservice.com"
              method="POST"
            >
              <div>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Email Message from Probrandhandlers!"
                />
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://sam-dare.netlify.app/thankyou.html"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="mb-2 w-full p-2"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="mb-2 w-full p-2"
                  required
                />
              </div>

              <textarea
                rows="4"
                name="message"
                placeholder="Your Message"
                className="w-full p-2"
                required
              ></textarea>

              <input
                name="_formsubmit_id"
                type="text"
                style={{ display: 'none' }}
              />

              <input type="submit" value="Submit" className={primaryFull} />
            </form>
          </OverlayContent>
        )} */}
      </div>
    </Animation>
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
        className=" h-full w-full justify-center md:flex md:items-end 
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

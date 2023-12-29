import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';
import Style2 from '../ui/Style2';
import ServiceBranding from '../ui/ServiceBranding';
import ServiceCategories from '../ui/serviceCategories';
import ServiceMarketing from '../ui/ServiceMarketing';
import ServiceOthers from '../ui/ServiceOthers';
import Advert4 from '../ui/Advert4';

function Services() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/our-services-mobile.png'
    : 'assets/our-services.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />
      <ServiceCategories />
      <ServiceBranding />
      <ServiceMarketing />
      <ServiceOthers />
      <Advert4 />
    </div>
  );
}

export default Services;

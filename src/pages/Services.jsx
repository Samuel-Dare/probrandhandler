import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';
import ServiceBranding from '../ui/ServiceBranding';
import ServiceCategories from '../ui/ServiceCategories';
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
      <Header2 bannerImage={bannerImage} label="services" />
      <ServiceCategories />
      <ServiceBranding />
      <ServiceMarketing />
      <ServiceOthers />
      <Advert4 />
    </div>
  );
}

export default Services;

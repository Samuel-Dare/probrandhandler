import React from 'react';
import Header from '../ui/Header';
import WhyChooseUs from '../ui/WhyChooseUs';
import Animation from '../utils/Animation';
import Advert1 from '../ui/Advert1';
import Advert2 from '../ui/Advert2Two';

export default function Home() {
  return (
    <div>
      <Header />
      <WhyChooseUs />
      <Advert1 />
      <Advert2 />
    </div>
  );
}

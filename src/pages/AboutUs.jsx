import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';

function AboutUs() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder',
      description: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'assets/img.jpg',
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      description: 'Consectetur adipiscing elit.',
      imageUrl: 'assets/img.jpg',
    },
    {
      name: 'Bob Johnson',
      role: 'Developer',
      description: 'Praesent euismod tellus nec.',
      imageUrl: 'assets/img.jpg',
    },
  ];

  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/about-us-mobile.png'
    : 'assets/about-us.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 p-4">
        <h1 className="mb-8 text-center text-3xl font-bold">About Us</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Company Overview */}
          <div>
            <h2 className="mb-4 text-xl font-bold">Our Story</h2>
            <img
              src="assets/img.jpg"
              alt=""
              className="mb-4 h-40 w-full rounded object-cover"
            />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
              odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. libero. Sed cursus ante dapibus
              diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam.
            </p>
          </div>

          {/* Team Members */}
          <div>
            <h2 className="mb-4 text-xl font-bold">Our Team</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div key={index} className="rounded border p-4">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="mb-4 h-40 w-full rounded object-cover"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-700 mb-2">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

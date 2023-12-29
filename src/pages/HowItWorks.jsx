import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';

function HowItWorks() {
  const steps = [
    {
      title: 'Step 1',
      description: 'Sign up for an account.',
      icon: '📝',
    },
    {
      title: 'Step 2',
      description: 'Explore our features and services.',
      icon: '🚀',
    },
    {
      title: 'Step 3',
      description: 'Customize your profile and preferences.',
      icon: '⚙️',
    },
    {
      title: 'Step 4',
      description: 'Start using our platform and enjoy the benefits!',
      icon: '💼',
    },
  ];

  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/how-it-works-mobile.png'
    : 'assets/how-it-works.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} />

      <div className="container mx-auto mt-8 p-4">
        <h1 className="mb-8 text-center text-3xl font-bold">How It Works</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-500 text-white mb-4 inline-block rounded-full p-4">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold">{step.title}</h2>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

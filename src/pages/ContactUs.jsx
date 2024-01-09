import React from 'react';
import Header2 from '../ui/Header2';
import { useScreenSize } from '../contexts/ScreenSize';
import Button from '../ui/Button';

function ContactUs() {
  const { isSmallScreen } = useScreenSize();

  const bannerImage = isSmallScreen
    ? 'assets/contact-us-mobile.png'
    : 'assets/contact-us.png';

  return (
    <div>
      <Header2 bannerImage={bannerImage} title="Contact Us" />

      <div className="container mx-auto mt-8 p-4">
        {/* <h1 className="mb-8 text-center text-3xl font-bold">Contact Us</h1> */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded border p-2"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded border p-2"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-semibold"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full rounded border p-2"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <Button
                type="primary"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-xl font-bold">Our Contact Information</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:probrandhandlers@qualityservice.com">
                probrandhandlers@qualityservice.com
              </a>
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+2348154005211">+2348154005211</a>
            </p>
            {/* <p className="text-gray-700">
              <span className="font-semibold">Address:</span> 123 Jide Str,
              Lekki-Ajah, Lagos
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

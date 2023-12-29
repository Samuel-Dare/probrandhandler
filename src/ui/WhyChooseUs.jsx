const WhyChooseUs = () => {
  return (
    <div className="p-10 md:p-16 lg:p-20">
      <div className="mx-auto">
        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Why You Should Choose Us?
        </h2>
        <p className="mb-10 text-center text-base">
          It's noteworthy to recognize that many businesses fall short of
          expectations, despite ample market opportunities for their products or
          services. This shortfall often stems from the use of generic
          strategies and brand guidelines that lack distinctiveness and
          uniqueness tailored specifically to the individual business. We
          emphasize the importance of crafting branding and marketing solutions
          that are not only unique but also align seamlessly with the
          distinctive brand identity of your business.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col">
            <img
              src="/assets/img.jpg"
              width="300"
              alt="Service 1"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Compelling Brand Design
            </h3>
            <p>
              {' '}
              We help craft a visual identity that mirrors your distinctive
              values and captivates your intended audience. This encompasses
              memorable logos, visually appealing graphics, and a consistent
              brand voice tailored to resonate with your ideal customer.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/img.jpg"
              alt="Service 2"
              width="300"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Strategic Digital Marketing Campaigns
            </h3>
            <p className="text-gray-600">
              Rejecting one-size-fits-all solutions, we collaborate closely with
              you to comprehend your target audience, formulate data-driven
              digital strategies, and execute precise campaigns across various
              platforms.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/img.jpg"
              alt="Service 2"
              width="300"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Measurable Results
            </h3>
            <p className="text-gray-600">
              Our commitment to transparency and accountability is reflected in
              our approach. We meticulously track the performance of your
              campaigns, providing you with clear, actionable insights to ensure
              you achieve your objectives.
            </p>
          </div>

          <div className="flex flex-col">
            <img
              src="/assets/img.jpg"
              alt="Service 2"
              width="300"
              className="mx-auto mb-4 h-auto rounded-md"
            />
            <h3 className="mb-5 text-2xl font-semibold">
              &#10003; Collaborative Partnership
            </h3>
            <p className="text-gray-600">
              Beyond being service providers, we are your growth partners.
              Engaging with you at every juncture, we ensure your voice is
              prominent, and your brand is authentically represented throughout
              our collaborative journey.
            </p>
          </div>
        </div>
        <p className="mt-10 text-center text-base">
          At Probrand Handlers, we take it upon ourselves to ensure your
          business boasts a professional brand, offering comprehensive branding
          and marketing solutions. We empower SMEs to establish meaningful
          connections with their ideal customers.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;

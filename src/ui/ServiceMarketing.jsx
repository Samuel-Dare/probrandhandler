import Style1 from './Style1';

function ServiceMarketing() {
  return (
    <div className="px-5">
      <Style1
        reverseOrder={true}
        removeBgColor={true}
        title="Marketing Solutions"
        image="assets/333.png"
        l1="Marketing Strategy: Formulating an all-encompassing marketing strategy aligned with the brand strategy, focusing on delivering the right message to the right audience through the right channels."
        l2=" Marketing Automation: Assisting SMEs in utilizing marketing automation tools to streamline processes and enhance efficiency."
        l3="Content Marketing: Providing guidance to SMEs in creating high-quality content that captivates the target audience and drives conversions."
        l4=" Social Media Marketing: Developing and executing effective social media marketing campaigns to reach the target audience and elevate brand awareness.
        "
        l5="Advertising: Managing paid advertising campaigns on platforms like Google Ads and Facebook Ads to drive targeted traffic to the client's website.
        "
      />
    </div>
  );
}

export default ServiceMarketing;

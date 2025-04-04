import React, { useState } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import PhoneSystemContent from './PhoneSystemContent';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Modal from './Modal';
import BusinessPhoneSystemForm from './BusinessPhoneSystemForm';
import TableOfContents from './TableOfContents';

const PhoneSystemsPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const systems = [
  
    {
      name: "Ooma Office",
      logo: "/images/ooma.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "https://www.ooma.com/?srsltid=AfmBOopMghJy72vEAYHkgK_7Ny9Js61zv5HdvxWmPXpeW3AhzGg_Q0cz",
      linkText: "Links to Ooma Office"
    },
    {
      name: "RingEX",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Ease of Use",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to RingEX"
    },
    {
      name: "Zoom",
      logo: "/images/zoom.png",
      bestFor: "Video Conferencing",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Zoom"
    },
    {
      name: "NextivoONE",
      logo: "/images/nextiva.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
    {
      name: "Vonage",
      logo: "/images/vonage.png",
      bestFor: "Best for Support",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
  ];

  const contents = [
    { id: 1, title: "Introduction to Best Phone System", slug: "intro-phonesystem" },
    { id: 2, title: "What Is Business Phone System?", slug: "what-is-phonesystem" },
    { id: 3, title: "Benefits of Implementing a Business Phone System", slug: "phonesystem-benefits" },
    { id: 4, title: "Key Features to Look For", slug: "phonesystem-features" },
    { id: 5, title: "Pricing Models for Business Phone System", slug: "phonesystem-pricing" },
    { id: 6, title: "Types of Best Business Phone Systems", slug: "phonesystem-types" },
    { id: 7, title: "Integration Capabilities", slug: "integration" },
    { id: 8, title: "Implementation Process", slug: "implementation" },
    { id: 9, title: "Case Studies & Success Stories", slug: "case-studies" },
    { id: 10, title: "Comparing Top CRM Providers", slug: "comparison" },
    { id: 11, title: "FAQs", slug: "phonesystem-faq" },
    { id: 12, title: "What is the difference between Phone Services and a Business Phone System", slug: "phonesystem-diff" }
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height =` ${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const additionalText = "The modern business communication landscape has evolved significantly, with VoIP (Voice over Internet Protocol) systems replacing traditional PBX setups in many organizations. Today's business phone systems offer advanced features like AI-powered voicemail transcription, intelligent call routing, CRM integration, and comprehensive analytics dashboards. These tools help businesses track performance metrics, improve customer satisfaction, and streamline their communication processes. When evaluating different providers, it's important to consider factors such as scalability, reliability, security features, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and collaboration tools in a single platform.";

  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Business Phone Systems of 2025</h1>
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Modern business phone systems boast AI tools for conversation intelligence, video capabilities, detailed analytics and more.
        </p>
        
        <div className="flex flex-wrap items-center mt-2">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 mr-3"></div>
          <div>
            <p className="text-xs md:text-sm">
              <span>Written by: <strong>Jessica Elliott</strong>, Senior Analyst</span>
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                ✓ Editor Verified: <strong>Chad Brooks</strong>
              </span>
            </p>
            <p className="text-xs text-gray-500">Updated Mar 03, 2025</p>
          </div>
        </div>

        <div className="text-xs md:text-sm text-gray-600 mt-4 pb-4 border-b">
          Business.com earns commissions from some listed providers. <a href="#" className="text-blue-600 hover:underline">Editorial Guidelines</a>.
        </div>
      </header>

      <section className="mb-6">
          <p className="text-gray-800 text-sm md:text-base">
            As your business grows, ensuring you have the right communication tools is critical. Startups can often get by with a basic business phone 
            system that doesn't include many bells and whistles. But, as your business becomes more sophisticated, it is critical that your communication 
            tools also become more advanced.
            {showMore && (
              <span className="block mt-3">{additionalText}</span>
            )}
          </p>
          <button 
            className="mt-2 text-blue-600 font-medium flex items-center"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'LESS -' : 'MORE +'}
          </button>
        </section>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {systems.map((system, index) => (
          <PhoneSystemCardCommon 
            key={index} 
            system={system} 
            createRipple={createRipple} 
            onCompareQuotesClick={() => setIsModalOpen(true)}
          />
        ))}
      </div>
      <TableOfContents contents={contents} />

      {/* Added Business component */}
      <PhoneSystemContent />
    </div>
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BusinessPhoneSystemForm />
      </Modal>
    </>
  );
};

export default PhoneSystemsPage;
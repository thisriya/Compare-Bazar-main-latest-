import React, { useState,useEffect,useRef } from 'react';
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
   const [widgetLoaded, setWidgetLoaded] = useState(false);
    const widgetRef = useRef(null);

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

  useEffect(() => {
    // Check if the script is already loaded to prevent duplicates
    if (document.querySelector('script[src*="bzWidget.min.js"]')) return;
  
    const script1 = document.createElement('script');
    script1.src = "https://cdn.buyerzone.com/apps/widget/bzWidget.min.js";
    script1.async = true;
    script1.setAttribute('data-bzwidget', '');
    script1.setAttribute('data-bzwidget-pub-id', '59578');
    script1.setAttribute('data-bzwidget-color-palette-name', 'default');
    script1.setAttribute('data-bzwidget-category-id', '10144');
  
    // Add the script to the buyerzone-widget-container instead of body
    const container = document.getElementById('buyerzone-widget-container');
    if (container) {
      container.appendChild(script1);
      
      // Initialize after script loads
      script1.onload = () => {
        if (typeof bzWidget !== 'undefined') {
          bzWidget.init();
        }
      };
    }
  
    return () => {
      // Clean up
      if (container && container.contains(script1)) {
        container.removeChild(script1);
      }
    };
  }, []);

   useEffect(() => {
      // Create and set up an iframe to embed the form
      const iframe = document.createElement('iframe');
      iframe.src = 'about:blank'; // Start with empty src
      iframe.style.width = '100%';
      iframe.style.height = '650px'; // Adjust height as needed
      iframe.style.border = 'none';
      iframe.style.overflow = 'hidden';
      
      // Reference to widget container
      const widgetContainer = document.getElementById('buyerzone-widget-container');
      
      if (widgetContainer) {
        // Clear any existing content
        widgetContainer.innerHTML = '';
        widgetContainer.appendChild(iframe);
        
        // Set iframe content with the embedded form
        setTimeout(() => {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Phone Systems Comparison</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
                .loading {
                  text-align: center;
                  padding: 30px;
                }
                .spinner {
                  border-radius: 50%;
                  width: 50px;
                  height: 50px;
                  animation: spin 1s linear infinite;
                  margin: 20px auto;
                }
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              </style>
            </head>
            <body>
              <div id="bzWidgetContainer">
                <div class="loading">
                  <div class="spinner"></div>
                  <p>Loading comparison tool...</p>
                </div>
              </div>
              
              <!-- BuyerZone Widget Script -->
              <script data-bzwidget
                src="https://cdn.buyerzone.com/apps/widget/bzWidget.min.js"
                data-bzwidget-pub-id="59578"
                data-bzwidget-color-palette-name="default"
                data-bzwidget-category-id="10144">
              </script>
              
              <script>
                // Initialize widget after it loads
                function initBzWidget() {
                  if (typeof bzWidget !== 'undefined') {
                    bzWidget.init();
                    document.getElementById('bzWidgetContainer').querySelector('.loading').style.display = 'none';
                  } else {
                    setTimeout(initBzWidget, 500);
                  }
                }
                
                // Check if widget loaded
                document.addEventListener('DOMContentLoaded', function() {
                  setTimeout(initBzWidget, 1000);
                  
                  // Fallback if widget fails to load
                  setTimeout(function() {
                    if (typeof bzWidget === 'undefined') {
                      document.getElementById('bzWidgetContainer').innerHTML = 
                        '<p style="text-align:center; padding:20px; color:#e74c3c;">Unable to load the comparison tool. Please refresh and try again.</p>';
                    }
                  }, 10000);
                });
              </script>
            </body>
            </html>
          `);
          iframeDoc.close();
          
          setWidgetLoaded(true);
        }, 0);
      }
      
      return () => {
        // Cleanup if needed
      };
    }, []);


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

       {/* BuyerZone Widget Integration - Method 1: Custom container */}
       <div 
  className="widget-container p-6 rounded-lg my-10 relative"
  style={{
    backgroundImage: "url('https://stabilitynetworks.com/wp-content/uploads/2019/08/5-Advantages-of-Getting-a-Cloud-Based-VoIP-Phone-System-for-Your-Small-Business.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-white opacity-60 rounded-lg"></div>
  
  {/* Content positioned on top of the overlay */}
  <div className="relative z-10">
    <h2 className="widget-title text-4xl font-semibold text-center mb-6 text-gray-800">Compare Phone System Providers</h2>
    <div className="flex lg:flex-row flex-col  gap-8 items-center justify-between">
        {/* Image on the left */}
        <div className="flex-shrink-0">
            <img 
                src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/banners/120x600.gif" 
                title="Free Business Phone Systems Quotes from BuyerZone.com" 
                alt="Free Business Phone Systems Quotes from BuyerZone.com" 
                className="h-auto" 
                border="0" 
            />
        </div>
        
        {/* Centered paragraph in the middle */}
        <div className="text-center text-[#ff8633] mx-4 text-4xl flex-grow-0 w-64">
    <p className="font-medium">Just answer a few questions to help us better serve you. It takes less than a minute and is 100% free. No obligation to buy.</p>
</div>
        
        {/* Form container on the right */}
        <div id="buyerzone-widget-container" className="flex-grow min-h-96">
            {/* Widget will be loaded by the useEffect */}
        </div>
    </div>
</div>
</div>

      <TableOfContents contents={contents} />

      {/* Added Business component */}
      <PhoneSystemContent />
    </div>
    <div id="buyerzone-widget-container" className="my-8"></div>
    <WideDiv/>
    <Footer/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BusinessPhoneSystemForm />
      </Modal>
    </>
  );
};

export default PhoneSystemsPage;
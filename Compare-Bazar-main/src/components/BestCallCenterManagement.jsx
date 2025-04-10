import React, { useState, useEffect, useRef } from 'react';
import PhoneSystemCardCommon from './PhoneSystemCardCommon';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import Feedback from './Feedback';
import CallCenterForm from './CallCenterForm';
import Modal from './Modal';

const BestCallCenterManagement = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const widgetRef = useRef(null);
  
  // Systems data
  const systems = [
    {
      name: "GoTo",
      logo: "/images/goto.png",
      bestFor: "Best for Small Businesses Management",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to RingEX"
    },
    {
      name: "RingCentral",
      logo: "/images/ringcentral.png",
      bestFor: "Best for Inbound Customer Services",
      price: "Starts at $19.95 per user/month",
      videoCapacity: "Video capacity: 100",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Ooma Office"
    },
    {
      name: "Goanswer",
      logo: "/images/goan.png",
      bestFor: "Best Outsourced Call Center Service",
      price: "Starts at $10 per user/month",
      videoCapacity: "Video capacity: 1000",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to Zoom"
    },
    {
      name: "Twiilio",
      logo: "/images/bomb.png",
      bestFor: "Best for Complex Communication",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
    {
      name: "Salesforce",
      logo: "/images/cloud.png",
      bestFor: "Best for Improving Customer Service",
      price: "Starts at $36 per user/month",
      videoCapacity: "Video capacity: 250",
      support: "24/7 customer support",
      link: "#",
      linkText: "Links to NextivoONE"
    },
  ];

  // Ripple effect for buttons
  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
    ripple.classList.add("ripple");
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };
  
  const advantages = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="5" />
          <path d="M3 21h18a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
          <path d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M17 18h-2m-3 0H5" />
          <rect x="8" y="14" width="8" height="4" rx="1" />
        </svg>
      ),
      title: 'Highly trained and skilled professionals'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <line x1="12" y1="8" x2="12" y2="8" />
          <path d="M15 4.5A3 3 0 0 0 9 6a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2c0 1.1-.9 2-2 2" />
          <path d="M9 12a2 2 0 0 1 0-4" />
        </svg>
      ),
      title: 'Expertise in technology'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14 2v4" />
          <path d="M18 4l-2 2" />
        </svg>
      ),
      title: 'Enables 24*7 customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'Preferred destination for outsourcing'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Cost-effective customer support'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="2" x2="9" y2="4" />
          <line x1="15" y1="2" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="22" />
          <line x1="15" y1="20" x2="15" y2="22" />
          <line x1="20" y1="9" x2="22" y2="9" />
          <line x1="20" y1="14" x2="22" y2="14" />
          <line x1="2" y1="9" x2="4" y2="9" />
          <line x1="2" y1="14" x2="4" y2="14" />
        </svg>
      ),
      title: 'Modernized Infrastructure and technology'
    }
  ];

  //values
  const valueProps = [
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 15C45 12.9 44.1 11.1 42.6 9.6C41.1 8.1 39.3 7.2 37.2 7.2H27C27 5.1 26.1 3.3 24.6 1.8C23.1 0.3 21.3 0 19.2 0H15C12.9 0 11.1 0.9 9.6 2.4C8.1 3.9 7.2 5.7 7.2 7.8V37.2C7.2 39.3 8.1 41.1 9.6 42.6C11.1 44.1 12.9 45 15 45H37.2C39.3 45 41.1 44.1 42.6 42.6C44.1 41.1 45 39.3 45 37.2V15Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Experts',
      description: '2 decades of experience'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 7.5C33.9 7.5 37.5 8.7 40.8 11.1C44.1 13.5 46.2 16.8 47.1 21H39C38.4 19.2 37.5 17.7 36.3 16.5C35.1 15.3 33.6 14.4 31.8 13.8C30 13.2 28.2 13.2 26.4 13.8C24.6 14.4 23.1 15.3 21.9 16.5C20.7 17.7 19.8 19.2 19.2 21H10.5C11.4 16.8 13.5 13.5 16.8 11.1C20.1 8.7 24 7.5 28.5 7.5H30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M31.8 46.2C33.6 45.6 35.1 44.7 36.3 43.5C37.5 42.3 38.4 40.8 39 39H47.1C46.2 43.2 44.1 46.5 40.8 48.9C37.5 51.3 33.9 52.5 30 52.5H28.5C24 52.5 20.1 51.3 16.8 48.9C13.5 46.5 11.4 43.2 10.5 39H19.2C19.8 40.8 20.7 42.3 21.9 43.5C23.1 44.7 24.6 45.6 26.4 46.2C28.2 46.8 30 46.8 31.8 46.2Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <path d="M37.5 30C37.5 31.6 36.9 33 35.7 34.2C34.5 35.4 33.1 36 31.5 36H27C27 37.6 26.4 39 25.2 40.2C24 41.4 22.6 42 21 42H19.5C17.9 42 16.5 41.4 15.3 40.2C14.1 39 13.5 37.6 13.5 36V24C13.5 22.4 14.1 21 15.3 19.8C16.5 18.6 17.9 18 19.5 18H21C22.6 18 24 18.6 25.2 19.8C26.4 21 27 22.4 27 24H31.5C33.1 24 34.5 24.6 35.7 25.8C36.9 27 37.5 28.4 37.5 30Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
          <circle cx="38" cy="26" r="4" stroke="#3B6794" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Minds',
      description: '2000+ agile thinking minds'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="24" stroke="#000e54" strokeWidth="2" fill="none"/>
          <path d="M30 12L34.9 23.2L47 24.7L38.5 33.4L40.8 45.7L30 39.8L19.2 45.7L21.5 33.4L13 24.7L25.1 23.2L30 12Z" 
          stroke="#000e54" 
          strokeWidth="2" 
          fill="none"/>
        </svg>
      ),
      title: 'Results',
      description: '6 Fortune 500 clients'
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20V8M20 8L15 13M20 8L25 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M30 20V8M30 8L25 13M30 8L35 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M40 20V8M40 8L35 13M40 8L45 13" stroke="#000e54" strokeWidth="2"/>
          <path d="M20 50V40M30 50V40M40 50V40" stroke="#000e54" strokeWidth="2"/>
          <circle cx="20" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="40" cy="30" r="6" stroke="#000e54" strokeWidth="2" fill="none"/>
          <circle cx="30" cy="33" r="4" stroke="#000e54" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Growth',
      description: '20+ languages'
    }
  ];

  // choose best service center
  const serviceTypes = [
    {
      name: "Inbound Call Centers",
      description: "Handle incoming customer calls for support, inquiries, and orders",
      bestFor: "Customer service, technical support, order processing"
    },
    {
      name: "Outbound Call Centers",
      description: "Make outgoing calls for sales, surveys, and follow-ups",
      bestFor: "Telemarketing, lead generation, customer retention"
    },
    {
      name: "Omnichannel Contact Centers",
      description: "Integrated platforms handling calls, emails, chats, and social media",
      bestFor: "Businesses needing multichannel customer engagement"
    },
    {
      name: "Virtual Call Centers",
      description: "Cloud-based solutions with remote agents",
      bestFor: "Distributed teams, businesses needing flexibility"
    }
  ];

  const evaluationCriteria = [
    {
      title: "Technology Stack",
      details: [
        "Cloud-based vs on-premise solutions",
        "IVR (Interactive Voice Response) capabilities",
        "Call routing algorithms (skills-based, round-robin)",
        "Integration with CRM (Salesforce, HubSpot, Zendesk)",
        "API availability for custom integrations",
        "AI features (sentiment analysis, chatbots)"
      ]
    },
    {
      title: "Performance Metrics",
      details: [
        "Service Level (e.g., 80% of calls answered in 20 seconds)",
        "Average Speed to Answer (ASA)",
        "First Call Resolution (FCR) rate",
        "Call Abandonment Rate (target <5%)",
        "Average Handle Time (AHT)",
        "Customer Satisfaction (CSAT) scores"
      ]
    },
    {
      title: "Security & Compliance",
      details: [
        "PCI DSS compliance for payment processing",
        "HIPAA compliance for healthcare",
        "GDPR compliance for EU customers",
        "Data encryption standards",
        "Call recording storage policies",
        "Disaster recovery protocols"
      ]
    }
  ];

  const vendorComparison = [
    { feature: "24/7 Support", essential: true, premium: true },
    { feature: "Multilingual Agents", essential: false, premium: true },
    { feature: "CRM Integration", essential: true, premium: true },
    { feature: "Advanced Analytics", essential: false, premium: true },
    { feature: "AI Capabilities", essential: false, premium: true },
    { feature: "Scalable Seats", essential: true, premium: true },
    { feature: "Custom Reporting", essential: false, premium: true },
    { feature: "Quality Monitoring", essential: true, premium: true }
  ];
  
  const additionalText = "The modern business communication landscape has evolved significantly, with VoIP (Voice over Internet Protocol) systems replacing traditional PBX setups in many organizations. Today's business phone systems offer advanced features like AI-powered voicemail transcription, intelligent call routing, CRM integration, and comprehensive analytics dashboards. These tools help businesses track performance metrics, improve customer satisfaction, and streamline their communication processes. When evaluating different providers, it's important to consider factors such as scalability, reliability, security features, and total cost of ownership. Many systems now include unified communications capabilities, bringing together voice, video, messaging, and collaboration tools in a single platform.";

  // Effect to handle BuyerZone widget integration
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
                border: 5px solid #f3f3f3;
                border-top: 5px solid #3498db;
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
  

  return (
    <>
      <Navbar/>
      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Best Call Center Management Software, 2025</h1>
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

        {/* how does call center works */}
        <div className="max-w-6xl mx-auto py-12">
  <div className="text-center mb-16">
    <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-4">
      How <span className="text-[#000e54]">Modern Call Centers</span> Work
    </h1>
    <p className="text-xl text-gray-800 max-w-3xl mx-auto">
      The complete technology stack and operational processes behind today's customer service centers
    </p>
  </div>

  {/* Overview Section */}
  <div className="bg-white rounded-xl  mb-16">
    <h2 className="text-xl font-semibold text-gray-800 mb-6">Call Center Overview</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-gray-800 text-lg mb-4">
          Modern call centers are sophisticated operations that blend technology, human expertise, and data analytics to deliver exceptional customer service. They handle millions of interactions daily across multiple channels including phone, email, chat, and social media.
        </p>
        <p className="text-gray-800 text-lg mb-6">
          Today's call centers leverage cloud computing, artificial intelligence, and omnichannel platforms to provide seamless customer experiences while optimizing operational efficiency.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-lg text-[#000e54] mb-2">Key Statistics:</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start text-lg">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>90% of customers rate immediate response as important when they have a customer service question</span>
            </li>
            <li className="flex items-start text-lg">
              <svg className="w-5 h-5 text-[#000e54] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Call centers handling 1M+ calls/month save $300k annually with AI routing</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Call center operation" 
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>
    </div>
  </div>

  {/* Detailed Workflow Section */}
  <div className="mb-20">
    <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">The Call Center Workflow</h2>
    <div className="relative">
      {/* SVG Connector Lines */}
      <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
        <path 
          d="M100,150 Q250,150 300,100 Q350,50 500,50 Q650,50 700,100 Q750,150 900,150" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="5,5"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
  
  {/* Step 1 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">1. Multi-Channel Initiation</h3>
    <p className="text-gray-800 text-center text-lg">
      Customers contact through phone, email, chat, social media, or web forms. The omnichannel routing system captures and queues all interactions uniformly.
    </p>
    <div className="mt-4 bg-blue-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> Omnichannel ACD, VoIP, SIP Trunking, WebRTC
    </div>
  </div>

  {/* Step 2 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">2. Intelligent IVR Processing</h3>
    <p className="text-gray-800 text-center text-lg">
      Advanced IVR systems with natural language understanding collect caller intent through voice or menu selections, reducing misrouting by 40%.
    </p>
    <div className="mt-4 bg-purple-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> NLP, Conversational AI, DTMF Recognition
    </div>
  </div>

  {/* Step 3 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">3. Contextual Routing</h3>
    <p className="text-gray-800 text-center text-lg">
      Real-time analysis of customer profile, sentiment, and value routes to the best-qualified agent with full historical context.
    </p>
    <div className="mt-4 bg-green-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> Machine Learning, Predictive Routing, CTI
    </div>
  </div>

  {/* Row 2 */}
  
  {/* Step 4 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">4. Agent Engagement</h3>
    <p className="text-gray-800 text-center text-lg">
      Agents receive calls with complete customer journey data, AI-suggested responses, and real-time guidance to ensure consistent service quality.
    </p>
    <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> CRM Integration, Knowledge Management, Real-Time Analytics
    </div>
  </div>

  {/* Step 5 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">5. Resolution & Automation</h3>
    <p className="text-gray-800 text-center text-lg">
      Complex issues trigger automated workflows while simple inquiries are resolved through self-service, with AI verifying resolution completeness.
    </p>
    <div className="mt-4 bg-red-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> RPA, Workflow Automation, AI Validation
    </div>
  </div>

  {/* Step 6 */}
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">6. Post-Call Optimization</h3>
    <p className="text-gray-800 text-center text-lg">
      Automated follow-ups, CSAT surveys, and conversation analytics feed continuous improvement loops for both processes and agent training.
    </p>
    <div className="mt-4 bg-indigo-50 p-3 rounded-lg text-lg text-gray-800">
      <strong>Technology:</strong> Speech Analytics, Survey Tools, BI Reporting
    </div>
  </div>
</div>
    </div>
  </div>

  {/* Technology Deep Dive */}
  <div className="max-w-6xl mx-auto mb-16">
    <h2 className="text-4xl font-semibold text-center text-gray-900 mb-10">Core Call Center Technologies</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* VoIP Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VoIP Telephony</h3>
            <p className="text-gray-800 text-lg">
              Voice over IP (VoIP) technology transmits calls over the internet instead of traditional phone lines. Modern systems offer:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-lg">
              <li>HD voice quality with 99.99% uptime</li>
              <li>Global virtual numbers with local presence</li>
              <li>Seamless integration with business applications</li>
              <li>Significant cost savings over PSTN</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ACD Technology */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-purple-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatic Call Distribution (ACD)</h3>
            <p className="text-gray-800 text-lg">
              ACD systems intelligently route incoming calls to the most appropriate agent based on:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-lg">
              <li>Agent skills and certifications</li>
              <li>Customer priority and value</li>
              <li>Current wait times and service levels</li>
              <li>Historical interaction patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CRM Integration */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">CRM Integration</h3>
            <p className="text-gray-800 text-lg">
              Customer Relationship Management systems provide agents with complete customer context:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-lg">
              <li>360-degree customer view with interaction history</li>
              <li>Real-time screen pops with relevant data</li>
              <li>Automated workflows for common scenarios</li>
              <li>Seamless handoffs between channels</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-start mb-4">
          <div className="bg-yellow-100 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Analytics</h3>
            <p className="text-gray-800 text-lg">
              Comprehensive reporting and analytics provide insights into:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-800 text-lg">
              <li>Agent performance metrics (AHT, FCR, CSAT)</li>
              <li>Call volume forecasting and staffing</li>
              <li>Customer sentiment analysis</li>
              <li>Process bottlenecks and improvement areas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Future Trends */}
  <div className="bg-gradient-to-r from-indigo-900 to-blue-800 rounded-2xl p-8 text-white">
    <h2 className="text-4xl font-semibold mb-6">The Future of Call Centers</h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-[#000e54] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          AI-Powered Automation
        </h3>
        <p className="text-gray-800 text-lg">
          Advanced AI will handle routine inquiries while seamlessly transferring complex issues to human agents with full context.
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-purple-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Predictive Analytics
        </h3>
        <p className="text-gray-800 text-lg">
          Systems will anticipate customer needs before they call and proactively offer solutions through preferred channels.
        </p>
      </div>
      
      <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-3 flex items-center text-gray-800">
          <svg className="w-6 h-6 text-green-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Human-AI Collaboration
        </h3>
        <p className="text-gray-800 text-lg">
          Agents will work alongside AI assistants that provide real-time guidance, sentiment analysis, and compliance monitoring.
        </p>
      </div>
    </div>
  </div>
</div>

{/* benefits of call center */}
<div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-900 sm:text-4xl">
          The Strategic Advantages of Professional Call Center Services
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
          Discover how outsourcing your customer interactions can transform your business operations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Benefit 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
            </div>
            <p className="text-gray-800 text-lg">
              Professional call centers provide round-the-clock support, ensuring your customers receive assistance whenever they need it. This leads to higher customer satisfaction, increased loyalty, and reduced churn. With global coverage across time zones, you never miss an opportunity to engage with your customers.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Cost Efficiency</h3>
            </div>
            <p className="text-gray-800 text-lg">
              Outsourcing call center operations eliminates the need for expensive infrastructure, technology investments, and full-time staff training. You pay only for the services you use, converting fixed costs into variable costs. This operational flexibility allows for better budget management and significant savings.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Scalability & Flexibility</h3>
            </div>
            <p className="text-gray-800 text-lg">
              Easily scale operations up or down based on seasonal demands or business growth without the challenges of hiring or layoffs. Call centers can quickly adjust to your changing needs, providing more agents during peak periods and reducing capacity during slower times.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Enhanced Security & Compliance</h3>
            </div>
            <p className="text-gray-800 text-lg">
              Professional call centers maintain rigorous security standards including PCI-DSS compliance, data encryption, and secure payment processing. They stay updated with changing regulations (GDPR, HIPAA, etc.) ensuring your customer interactions remain compliant and protected from data breaches.
            </p>
          </div>
        </div>

        {/* Benefit 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-medium text-gray-800">Performance Analytics</h3>
            </div>
            <p className="text-gray-800 text-lg">
              Gain access to comprehensive reporting and analytics that track call volumes, resolution times, customer satisfaction scores, and agent performance. These insights help identify trends, improve processes, and make data-driven decisions to enhance your customer experience strategy.
            </p>
          </div>
        </div>

        {/* Benefit 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                <svg className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-800">Multilingual Support</h3>
            </div>
            <p className="text-gray-800">
              Expand your global reach with agents fluent in multiple languages. This eliminates language barriers, improves communication quality, and demonstrates cultural sensitivity to diverse customer bases. Multilingual support is particularly valuable for businesses targeting international markets.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#000e54] py-8 px-4 rounded-lg mt-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Call Center in India Advantages
          </h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 flex flex-col items-center text-center rounded-sm"
                >
                  <div className="text-[#000e54] hover:text-[#ff8633] mb-4">
                    {advantage.icon}
                  </div>
                  <p className="text-gray-800 text-sm">{advantage.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
</div>

{/* how to choose best call center service */}
<div className="max-w-6xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 sm:tracking-tight mb-6">
          The Complete Guide to Choosing the Best Call Center Service
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-800">
          Everything you need to evaluate, compare, and select the perfect call center solution for your business requirements
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Understanding Your Call Center Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceTypes.map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-blue-200 transition-all">
              <h3 className="text-xl font-semibold text-[#000e54] mb-3">{type.name}</h3>
              <p className="text-gray-800 text-lg mb-4">{type.description}</p>
              <div className="bg-blue-50 p-3 rounded">
                <h4 className="text-lg font-medium text-[#000e54] mb-1">Best for:</h4>
                <p className="text-lg text-[#000e54]">{type.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16  rounded-xl max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Key Evaluation Criteria</h2>
        <div className="space-y-10">
          {evaluationCriteria.map((criteria, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center">
                <span className="bg-blue-100 text-[#000e54] w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                {criteria.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                {criteria.details.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="h-5 w-5 text-[#000e54] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">Vendor Comparison Checklist</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">
                    Feature
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">
                    Essential Service
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">
                    Premium Service
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vendorComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-800">
                      {item.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.essential ? (
                        <span className="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Included
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Not Included
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-lg leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Included
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4 sm:px-6">
  <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Implementation Roadmap</h2>
  <div className="relative">
    {/* Vertical line - hidden on mobile, shown on md+ */}
    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-blue-100 transform -translate-x-1/2"></div>
    
    <div className="space-y-12 md:space-y-0">
      {/* Phase 1 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content - shown on right on mobile */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Discovery Phase (1-2 weeks)</h3>
          <ul className="text-gray-800 text-lg space-y-2">
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Define business objectives and KPIs</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Map current customer journey</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Identify integration requirements</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Establish success metrics</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator - always shown but positioned differently */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-lg md:text-base">
            1
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 2 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-lg md:text-base">
            2
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Vendor Selection (2-4 weeks)</h3>
          <ul className="text-gray-800 text-lg space-y-2">
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Create RFP and evaluate proposals</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Conduct product demos and trials</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Check references and case studies</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Negotiate contract terms</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Phase 3 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pr-8 md:text-left order-2 md:order-1">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Implementation (4-8 weeks)</h3>
          <ul className="text-gray-800 text-lg space-y-2">
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>System configuration and customization</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>CRM and other integrations</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Agent training and certification</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Test calls and quality assurance</span>
            </li>
          </ul>
        </div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-lg md:text-base">
            3
          </div>
        </div>
        
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-3"></div>
      </div>
      
      {/* Phase 4 */}
      <div className="relative w-full flex flex-col md:flex-row justify-between items-center">
        {/* Empty spacer - hidden on mobile */}
        <div className="hidden md:block md:w-5/12 order-1"></div>
        
        {/* Number indicator */}
        <div className="w-full md:w-2/12 flex justify-start md:justify-center mb-4 md:mb-0 order-1 md:order-2">
          <div className="h-10 w-10 rounded-full bg-[#000e54] flex items-center justify-center text-white font-bold text-lg md:text-base">
            4
          </div>
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-5/12 mb-4 md:mb-0 md:pl-8 order-2 md:order-3">
          <h3 className="text-xl font-semibold text-[#000e54] mb-3">Go-Live & Optimization (Ongoing)</h3>
          <ul className="text-gray-800 text-base md:text-lg space-y-2">
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Phased rollout and monitoring</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Performance benchmarking</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Continuous improvement cycles</span>
            </li>
            <li className="flex items-start text-lg">
              <span className="inline-block w-1 h-1 rounded-full bg-[#000e54] mt-2 mr-2"></span>
              <span>Quarterly business reviews</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="bg-[#000e54] rounded-xl p-10 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Critical Questions to Ask Potential Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Technical Questions</h3>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>What is your average system uptime?</li>
                <li>How do you handle peak call volumes?</li>
                <li>What disaster recovery plans are in place?</li>
                <li>How frequently do you update your software?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Service Questions</h3>
              <ul className="space-y-2 text-gray-800 text-lg">
                <li>What are your standard SLAs?</li>
                <li>How do you measure and report quality?</li>
                <li>What training do your agents receive?</li>
                <li>How do you handle escalations?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Commercial Questions</h3>
              <ul className="space-y-2 text-gray-800 text-lg">
                <li>What's included in the base price?</li>
                <li>What are common additional costs?</li>
                <li>What's your contract termination policy?</li>
                <li>Do you offer volume discounts?</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-5 rounded-lg">
              <h3 className="text-xl text-gray-800 font-semibold mb-3">Strategic Questions</h3>
              <ul className="space-y-2 text-gray-800 text-lg">
                <li>How do you support business growth?</li>
                <li>What innovation roadmap do you have?</li>
                <li>How do you incorporate customer feedback?</li>
                <li>What differentiates you from competitors?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">Cost Comparison Framework</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">Cost Factor</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">In-House</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">Outsourced</th>
                <th className="px-6 py-3 bg-gray-100 text-left text-lg font-semibold text-gray-800 uppercase tracking-wider">Hybrid</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-800">Setup Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">High (equipment, software)</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Low to moderate</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-800">Monthly Costs</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Fixed salaries + benefits</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Per-minute/agent fees</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Combination</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-800">Scalability Cost</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">High (hiring/training)</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Low (pay for what you use)</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Moderate</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-800">Technology Updates</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Your responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Vendor responsibility</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">Shared</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-semibold text-gray-800">Typical ROI Period</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">12-24 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">3-6 months</td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-800">6-12 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      
    </div>
        
        {/* BuyerZone Widget Integration - Method 1: Custom container */}
        <div className="widget-container bg-gray-100 p-6 rounded-lg shadow-md my-10">
          <h2 className="widget-title text-2xl font-bold text-center mb-6 text-gray-800">Compare Phone System Providers</h2>
          <div id="buyerzone-widget-container" className="min-h-96 w-full">
            {/* Widget will be loaded here by useEffect */}
          </div>
        </div>
        
        {/* features of call center */}
        <div className="w-full py-10">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="text-[#000e54] mb-4">
                      {prop.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-700">
                      {prop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
        
        <Feedback/>
      </div>
      <WideDiv/>
      <Footer/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CallCenterForm />
      </Modal>
    </>
  );
};

export default BestCallCenterManagement;
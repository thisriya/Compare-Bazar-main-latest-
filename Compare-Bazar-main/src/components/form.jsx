// import React, { useState, useEffect, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha";

// const WhitePaperForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedPaper, setSelectedPaper] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [animateIn, setAnimateIn] = useState(false);
//   const [captchaValue, setCaptchaValue] = useState(null);
//   const captchaRef = useRef(null);

//   const whitepapers = [
//     { 
//       id: 1, 
//       title: "Empowering Digital Transformation", 
//       downloadUrl: "/images/roi.pdf",
//       color: "from-blue-500 to-purple-600",
//       icon: "📱"
//     },
//     { 
//       id: 2, 
//       title: "AI in Modern Business", 
//       downloadUrl: "/whitepapers/ai-business.pdf",
//       color: "from-green-500 to-teal-600",
//       icon: "🤖"
//     },
//     { 
//       id: 3, 
//       title: "Cloud Computing Strategies", 
//       downloadUrl: "/whitepapers/cloud-strategies.pdf",
//       color: "from-cyan-500 to-blue-600",
//       icon: "☁"
//     },
//     { 
//       id: 4, 
//       title: "Cybersecurity Best Practices", 
//       downloadUrl: "/whitepapers/cybersecurity.pdf",
//       color: "from-red-500 to-pink-600",
//       icon: "🔒"
//     },
//     { 
//       id: 5, 
//       title: "Data Analytics Revolution", 
//       downloadUrl: "/whitepapers/data-analytics.pdf",
//       color: "from-orange-500 to-red-600",
//       icon: "📊"
//     },
//     { 
//       id: 6, 
//       title: "Blockchain Applications", 
//       downloadUrl: "/whitepapers/blockchain.pdf",
//       color: "from-indigo-500 to-purple-600",
//       icon: "⛓"
//     },
//     { 
//       id: 7, 
//       title: "IoT Implementation Guide", 
//       downloadUrl: "/whitepapers/iot-guide.pdf",
//       color: "from-green-500 to-emerald-600",
//       icon: "🔌"
//     },
//     { 
//       id: 8, 
//       title: "Future of Remote Work", 
//       downloadUrl: "/whitepapers/remote-work.pdf",
//       color: "from-yellow-500 to-amber-600",
//       icon: "🏠"
//     },
//     { 
//       id: 9, 
//       title: "Digital Marketing Trends", 
//       downloadUrl: "/whitepapers/digital-marketing.pdf",
//       color: "from-purple-500 to-fuchsia-600",
//       icon: "📢"
//     },
//     { 
//       id: 10, 
//       title: "Customer Experience Transformation", 
//       downloadUrl: "/whitepapers/customer-experience.pdf",
//       color: "from-pink-500 to-rose-600",
//       icon: "😊"
//     }
//   ];

//   useEffect(() => {
//     if (showModal) {
//       setTimeout(() => {
//         setAnimateIn(true);
//       }, 50);
//     } else {
//       setAnimateIn(false);
//     }
//   }, [showModal]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!captchaValue) {
//       alert("Please complete the reCAPTCHA verification");
//       return;
//     }
    
//     setIsLoading(true);
//     const formData = new FormData(e.target);
//     formData.append("g-recaptcha-response", captchaValue);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setIsSubmitted(true);
//         downloadPDF(selectedPaper.downloadUrl);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const downloadPDF = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "whitepaper.pdf");
//     link.setAttribute("target", "_blank");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const openModal = (paper) => {
//     setSelectedPaper(paper);
//     setShowModal(true);
//     setCaptchaValue(null); // Reset captcha when opening new modal
//     if (captchaRef.current) {
//       captchaRef.current.reset(); // Reset the captcha widget
//     }
//   };

//   const closeModal = () => {
//     setAnimateIn(false);
//     setTimeout(() => {
//       setShowModal(false);
//       setSelectedPaper(null);
//       setIsSubmitted(false);
//       setCaptchaValue(null);
//     }, 300);
//   };

//   return (
//     <div className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-50 to-white">
//       <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 relative">
//         <span className="absolute -top-1 -left-1 w-full h-full text-indigo-200 select-none" style={{ textShadow: 'none' }}>Our Whitepapers</span>
//         <span className="relative">Our Whitepapers</span>
//       </h1>
//       <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//         Discover our collection of industry-leading whitepapers. Download now to gain valuable insights and stay ahead of the curve.
//       </p>
      
//       {/* Whitepaper Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {whitepapers.map((paper) => (
//           <div 
//             key={paper.id} 
//             className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
//           >
//             <div className={`h-24 bg-gradient-to-r ${paper.color} flex items-center justify-center`}>
//               <span className="text-4xl">{paper.icon}</span>
//             </div>
//             <div className="p-4 bg-white relative">
//               <div className="absolute -top-6 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 border-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//               <h3 className="text-lg font-semibold mb-2 mt-1">{paper.title}</h3>
//               <p className="text-gray-600 mb-3 text-sm">
//                 Explore the latest insights on {paper.title.toLowerCase()}.
//               </p>
//               <button
//                 onClick={() => openModal(paper)}
//                 className="w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                 </svg>
//                 Download Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
//           onClick={closeModal}
//           style={{
//             backdropFilter: 'blur(3px)'
//           }}
//         >
//           <div 
//             className={`bg-white rounded-lg shadow-xl max-w-md w-full transition-all duration-300 ${animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {isSubmitted ? (
//               <div className="p-6 text-center">
//                 <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h2 className="text-xl font-bold mb-3">Thank You!</h2>
//                 <p className="mb-4 text-gray-600 text-sm">Your whitepaper is downloading now.</p>
//                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                   <button
//                     onClick={() => downloadPDF(selectedPaper.downloadUrl)}
//                     className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm flex items-center justify-center"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                     </svg>
//                     Download Again
//                   </button>
//                   <button
//                     onClick={closeModal}
//                     className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 text-sm"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="relative">
//                 <div className={`h-16 bg-gradient-to-r ${selectedPaper?.color} flex items-center justify-between px-6`}>
//                   <h2 className="text-lg font-bold text-white">
//                     Download Whitepaper
//                   </h2>
//                   <button 
//                     type="button" 
//                     onClick={closeModal}
//                     className="text-white hover:text-gray-200 transition-colors"
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-md border border-gray-100">
//                     <div className="text-3xl">{selectedPaper?.icon}</div>
//                     <div>
//                       <h3 className="font-semibold text-md">{selectedPaper?.title}</h3>
//                       <p className="text-xs text-gray-600">PDF Whitepaper</p>
//                     </div>
//                   </div>
                  
//                   <input type="hidden" name="access_key" value="4e9faa02-cb51-4253-98e6-b5794f4ece3a" />
//                   <input type="hidden" name="subject" value={`Whitepaper Download: ${selectedPaper?.title}`} />
//                   <input type="hidden" name="from_name" value="Compare Bazaar" />
//                   <input type="hidden" name="whitepaper_title" value={selectedPaper?.title} />

//                   <div className="mb-3">
//                     <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="name">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                         </svg>
//                       </div>
//                       <input
//                         className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                         type="text"
//                         id="name"
//                         name="name"
//                         placeholder="John Smith"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="email">
//                       Email Address <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                       </div>
//                       <input
//                         className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="john@company.com"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="mb-3">
//                     <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="phone">
//                       Phone Number <span className="text-red-500">*</span>
//                     </label>
//                     <div className="relative">
//                       <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                         </svg>
//                       </div>
//                       <input
//                         className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         placeholder="+1 (555) 123-4567"
//                         pattern="^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$"
//                         title="Please enter a valid phone number"
//                       />
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Format: +1 (555) 123-4567</p>
//                   </div>

//                   <div className="mb-4">
//                     <label className="flex items-center">
//                       <input 
//                         type="checkbox" 
//                         name="marketing_consent" 
//                         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
//                       />
//                       <span className="ml-2 text-xs text-gray-600">
//                         I'd like to receive updates about related products and services.
//                       </span>
//                     </label>
//                   </div>

//                   {/* reCAPTCHA Section */}
//                   <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
//                     <div className="flex flex-col sm:flex-col sm:items-center gap-4">
//                       <h2 className="text-sm text-gray-800 font-semibold sm:min-w-[200px] sm:mr-4">
//                         Please verify that you're not a robot
//                       </h2>
//                       <div className="transform sm:scale-100 scale-90 origin-left">
//                         <ReCAPTCHA
//                           ref={captchaRef}
//                           sitekey="6Lc5JPMqAAAAANPk6zNgRNwyGzaIuSs--uwPRf4T"
//                           onChange={(value) => setCaptchaValue(value)}
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <button
//                       type="button"
//                       onClick={closeModal}
//                       className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 text-sm"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={isLoading || !captchaValue}
//                       className={`px-6 py-2 rounded-md text-sm flex items-center ${
//                         isLoading || !captchaValue
//                           ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:opacity-90 transition-opacity duration-300"
//                       }`}
//                     >
//                       {isLoading ? (
//                         <div className="flex items-center">
//                           <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                           </svg>
//                           Processing...
//                         </div>
//                       ) : (
//                         <div className="flex items-center">
//                           <span>Download</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
//                           </svg>
//                         </div>
//                       )}
//                     </button>
//                   </div>
                  
//                   <p className="mt-3 text-xs text-gray-500 text-center">
//                     Your privacy is important to us. We'll never share your information with third parties.
//                   </p>

//                   <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
//                     <p className="text-xs text-blue-800 flex items-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                       By submitting this form, you'll receive immediate access to the "{selectedPaper?.title}" whitepaper.
//                     </p>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WhitePaperForm;















































import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const WhitePaperForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef(null);

  const whitepapers = [
    { 
      id: 1, 
      title: "Empowering Digital Transformation", 
      downloadUrl: "/images/roi.pdf",
      color: "from-blue-500 to-purple-600",
      icon: "📱"
    },
    { 
      id: 2, 
      title: "AI in Modern Business", 
      downloadUrl: "/whitepapers/ai-business.pdf",
      color: "from-green-500 to-teal-600",
      icon: "🤖"
    },
    { 
      id: 3, 
      title: "Cloud Computing Strategies", 
      downloadUrl: "/whitepapers/cloud-strategies.pdf",
      color: "from-cyan-500 to-blue-600",
      icon: "☁"
    },
    { 
      id: 4, 
      title: "Cybersecurity Best Practices", 
      downloadUrl: "/whitepapers/cybersecurity.pdf",
      color: "from-red-500 to-pink-600",
      icon: "🔒"
    },
    { 
      id: 5, 
      title: "Data Analytics Revolution", 
      downloadUrl: "/whitepapers/data-analytics.pdf",
      color: "from-orange-500 to-red-600",
      icon: "📊"
    },
    { 
      id: 6, 
      title: "Blockchain Applications", 
      downloadUrl: "/whitepapers/blockchain.pdf",
      color: "from-indigo-500 to-purple-600",
      icon: "⛓"
    },
    { 
      id: 7, 
      title: "IoT Implementation Guide", 
      downloadUrl: "/whitepapers/iot-guide.pdf",
      color: "from-green-500 to-emerald-600",
      icon: "🔌"
    },
    { 
      id: 8, 
      title: "Future of Remote Work", 
      downloadUrl: "/whitepapers/remote-work.pdf",
      color: "from-yellow-500 to-amber-600",
      icon: "🏠"
    },
    { 
      id: 9, 
      title: "Digital Marketing Trends", 
      downloadUrl: "/whitepapers/digital-marketing.pdf",
      color: "from-purple-500 to-fuchsia-600",
      icon: "📢"
    },
    { 
      id: 10, 
      title: "Customer Experience Transformation", 
      downloadUrl: "/whitepapers/customer-experience.pdf",
      color: "from-pink-500 to-rose-600",
      icon: "😊"
    }
  ];

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setAnimateIn(true);
      }, 50);
    } else {
      setAnimateIn(false);
    }
  }, [showModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if captcha is completed
    if (!captchaValue) {
      setCaptchaError(true);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create FormData from form
      const formData = new FormData(e.target);
      
      // Add captcha value to form data
      formData.append("g-recaptcha-response", captchaValue);
      
      // Add the required access key for web3forms
      formData.append("access_key", "4e9faa02-cb51-4253-98e6-b5794f4ece3a");
      
      // Log form data entries for debugging
      console.log("Form data entries:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      // Simulate API call - for immediate testing, removing the actual API call
      // In production, uncomment the fetch code below
      /*
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      console.log("Response data:", data);
      
      if (data.success) {
        setIsSubmitted(true);
        downloadPDF(selectedPaper.downloadUrl);
      } else {
        console.error("API error:", data);
        alert("Error submitting form. Please try again.");
      }
      */
      
      // For testing purposes - simulating successful submission
      setTimeout(() => {
        setIsSubmitted(true);
        downloadPDF(selectedPaper.downloadUrl);
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
      setIsLoading(false);
    }
  };

  const downloadPDF = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "whitepaper.pdf");
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (paper) => {
    setSelectedPaper(paper);
    setShowModal(true);
    // Reset form state when opening modal
    setIsSubmitted(false);
    setCaptchaValue(null);
    setCaptchaError(false);
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setShowModal(false);
      setSelectedPaper(null);
      setIsSubmitted(false);
      setCaptchaValue(null);
      setCaptchaError(false);
      if (captchaRef.current) {
        captchaRef.current.reset();
      }
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-10 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 relative">
        <span className="absolute -top-1 -left-1 w-full h-full text-indigo-200 select-none" style={{ textShadow: 'none' }}>Our Whitepapers</span>
        <span className="relative">Our Whitepapers</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover our collection of industry-leading whitepapers. Download now to gain valuable insights and stay ahead of the curve.
      </p>
      
      {/* Whitepaper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {whitepapers.map((paper) => (
          <div 
            key={paper.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className={`h-24 bg-gradient-to-r ${paper.color} flex items-center justify-center`}>
              <span className="text-4xl">{paper.icon}</span>
            </div>
            <div className="p-4 bg-white relative">
              <div className="absolute -top-6 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 mt-1">{paper.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">
                Explore the latest insights on {paper.title.toLowerCase()}.
              </p>
              <button
                onClick={() => openModal(paper)}
                className="w-full px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={closeModal}
          style={{
            backdropFilter: 'blur(3px)'
          }}
        >
          <div 
            className={`bg-white rounded-lg shadow-xl max-w-md w-full transition-all duration-300 ${animateIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {isSubmitted ? (
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-3">Thank You!</h2>
                <p className="mb-4 text-gray-600 text-sm">Your whitepaper is downloading now.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => downloadPDF(selectedPaper.downloadUrl)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Again
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 text-sm"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className={`h-16 bg-gradient-to-r ${selectedPaper?.color} flex items-center justify-between px-6`}>
                  <h2 className="text-lg font-bold text-white">
                    Download Whitepaper
                  </h2>
                  <button 
                    type="button" 
                    onClick={closeModal}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-md border border-gray-100">
                    <div className="text-3xl">{selectedPaper?.icon}</div>
                    <div>
                      <h3 className="font-semibold text-md">{selectedPaper?.title}</h3>
                      <p className="text-xs text-gray-600">PDF Whitepaper</p>
                    </div>
                  </div>
                  
                  {/* These hidden fields are now added directly in the form submission */}
                  <input type="hidden" name="subject" value={`Whitepaper Download: ${selectedPaper?.title}`} />
                  <input type="hidden" name="from_name" value="Compare Bazaar" />
                  <input type="hidden" name="whitepaper_title" value={selectedPaper?.title} />

                  <div className="mb-3">
                    <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="block text-gray-700 mb-1 font-medium text-sm" htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        className="w-full border border-gray-300 pl-10 px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Format: +1 (555) 123-4567</p>
                  </div>

                  <div className="mb-4">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        name="marketing_consent" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                      />
                      <span className="ml-2 text-xs text-gray-600">
                        I'd like to receive updates about related products and services.
                      </span>
                    </label>
                  </div>

                  {/* reCAPTCHA section */}
                  <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex flex-col sm:flex-column sm:items-center gap-4">
                      <h2 className="text-sm text-gray-800 font-semibold sm:min-w-[200px] sm:mr-4 order-1 sm:order-none">
                        Please verify that you're not a robot
                      </h2>
                      <div className="order-2 sm:order-none transform sm:scale-100 scale-90 origin-left">
                        <ReCAPTCHA
                          ref={captchaRef}
                          sitekey="6Lc5JPMqAAAAANPk6zNgRNwyGzaIuSs--uwPRf4T"
                          onChange={(value) => {
                            setCaptchaValue(value);
                            setCaptchaError(false);
                          }}
                        />
                      </div>
                    </div>
                    {captchaError && (
                      <div className="mt-2 text-red-500 text-xs flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Please verify that you're not a robot
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-all duration-300 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-md hover:opacity-90 transition-opacity duration-300 text-sm flex items-center"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <span>Download</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </div>
                      )}
                    </button>
                  </div>
                  
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    Your privacy is important to us. We'll never share your information with third parties.
                  </p>

                  <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100">
                    <p className="text-xs text-blue-800 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      By submitting this form, you'll receive immediate access to the "{selectedPaper?.title}" whitepaper.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitePaperForm;
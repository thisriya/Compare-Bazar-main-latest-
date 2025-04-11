// other page 
import React from 'react';

const ShopComponent = () => {
  const handleGetQuotes = () => {
    // Navigate to the BuyerZone form URL in the same tab
    window.location.href = 'http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789';
  };

  return (
    <div className="bg-blue-900 text-center p-5 rounded-lg">
      <h1 className="text-xl font-bold text-white">Ready to Shop?</h1>
      <p className="mb-4 font-bold text-white">Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
      <button
        onClick={handleGetQuotes}
        className="px-4 py-2 text-sm bg-orange-500 text-white rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
      >
        GET FREE QUOTES
      </button>
    </div>
  );
};

export default ShopComponent;



// popped on the same page with cross
// import React, { useState } from 'react';
// const ShopComponent = () => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleGetQuotes = () => {
//     setShowPopup(true);
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="relative">
//       {/* Main Button Component */}
//       <div className="bg-blue-900 text-center p-5 rounded-lg">
//         <h1 className="text-xl font-bold text-white">Ready to Shop?</h1>
//         <p className="mb-4 font-bold text-white">Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
//         <button
//           onClick={handleGetQuotes}
//           className="px-4 py-2 text-sm bg-orange-500 text-white rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
//         >
//           GET FREE QUOTES
//         </button>
//       </div>

//       {/* Popup with iFrame - transparent background */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 mt-15">
//           <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl mx-4 relative">
//             <button 
//               onClick={closePopup}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10 bg-white p-1 rounded-full shadow-md"
//             >
//               ✕
//             </button>
            
//             <div className="h-96 lg:h-128">
//               <iframe
//                 src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
//                 title="BuyerZone Quote Request Form"
//                 className="w-full h-full border-0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopComponent;



// popped on the same page with no cross
// import React, { useState } from 'react';
// const ShopComponent = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleGetQuotes = () => {
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className='bg-gradient-to-r from-[#000e54] to-[#203299]' style={{ textAlign: 'center', padding: '20px' }}>
//       <h1 className='text-xl font-bold text-white'>Ready to Shop?</h1>
//       <p className='mb-4 font-bold text-white'>Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
//       <button
//         onClick={handleGetQuotes}
//         style={{
//           padding: '8px 18px',
//           fontSize: '14px',
//           cursor: 'pointer',
//           background: '#ff8633',
//           color: '#FFF',
//           border: 'none',
//           borderRadius: '30px',
//           boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//           transition: 'background 0.3s ease',
//         }}
//         onMouseOver={(e) => {
//           e.currentTarget.style.background = 'white';
//           e.currentTarget.style.color = '#ff8633';
//         }}
//         onMouseOut={(e) => {
//           e.currentTarget.style.background = '#ff8633';
//           e.currentTarget.style.color = '#FFF';
//         }}
//       >
//         GET FREE QUOTES
//       </button>

//       {/* Modal/Popup */}
//       {showModal && (
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 1000,
//         }} onClick={closeModal}>
//           <div style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '8px',
//             maxWidth: '90%',
//             maxHeight: '90vh',
//             overflow: 'auto',
//           }} onClick={(e) => e.stopPropagation()}>
//             <button 
//               onClick={closeModal}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 background: 'none',
//                 border: 'none',
//                 fontSize: '20px',
//                 cursor: 'pointer',
//               }}
//             >
//               ×
//             </button>
//             <iframe 
//               src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789" 
//               title="Free Business Phone Systems Quotes"
//               style={{
//                 width: '800px',
//                 height: '600px',
//                 border: 'none',
//               }}
//             ></iframe>
//             <p style={{ textAlign: 'center', marginTop: '10px' }}>
//               Can't see the form? <a href="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789" target="_blank" rel="noopener noreferrer">Click here</a> to open in a new tab.
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopComponent;
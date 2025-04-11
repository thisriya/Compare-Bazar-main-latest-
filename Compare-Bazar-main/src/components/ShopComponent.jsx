// other page 
// import React from 'react';

// const ShopComponent = () => {
//   const handleGetQuotes = () => {
//     // Open the BuyerZone form URL in a new tab
//     window.open('http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789', '_blank');
//   };

//   return (
//     <div className="bg-blue-900 text-center p-5 rounded-lg">
//       <h1 className="text-xl font-bold text-white">Ready to Shop?</h1>
//       <p className="mb-4 font-bold text-white">Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
//       <button
//         onClick={handleGetQuotes}
//         className="px-4 py-2 text-sm bg-orange-500 text-white rounded-full shadow-lg hover:bg-white hover:text-orange-500 transition-colors duration-300"
//       >
//         GET FREE QUOTES
//       </button>
//     </div>
//   );
// };

// export default ShopComponent;

import React, { useState } from 'react';

const ShopComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleGetQuotes = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Main Button Component */}
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

      {/* Popup with iFrame - transparent background */}
      {showPopup && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-4 w-full max-w-4xl mx-4 relative">
            <button 
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-10 bg-white p-1 rounded-full shadow-md"
            >
              ✕
            </button>
            
            <div className="h-96 lg:h-128">
              <iframe
                src="http://www.buyerzone.com/telecom-equipment/business-phone-systems/rfqz/?publisherId=59578&publisherTypeId=1789"
                title="BuyerZone Quote Request Form"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopComponent;
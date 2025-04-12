import React from 'react';

const ShopComponent = () => {
  const handleGetQuotes = () => {
    // Handle the action when the button is clicked
    alert('Redirecting to get free quotes...');
  };

  return (
    <div className='bg-gradient-to-r from-[#000e54] to-[#203299]' style={{ textAlign: 'center', padding: '20px' }}>
      <h1 className='text-xl font-bold text-white'>Ready to Shop?</h1>
      <p className='mb-4 font-bold text-white'>Receive up to 5 FREE price quotes from pre-qualified suppliers.</p>
      <button
        onClick={handleGetQuotes}
        style={{
          padding: '8px 18px', // Reduced padding
          fontSize: '14px', // Reduced font size
          cursor: 'pointer',
          // background: 'linear-gradient(45deg, #4CAF50, #81C784)',
          background: '#ff8633',
          color: '#FFF',
          border: 'none',
          borderRadius: '30px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'background 0.3s ease',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = 'white';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background= '#ff8633';
        }}
      >
        GET FREE QUOTES
      </button>
    </div>
  );
};

export default ShopComponent;


<div className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
        <h2 className="text-3xl font-bold text-white text-center">Connect with Us!</h2>
        <p className="text-white text-center text-lg mt-2">Fill out the form below and we'll be in touch soon.</p>
      </div>
      
      {formSubmitted ? (
        <div className="p-8 text-center">
          <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="text-2xl font-bold text-gray-800 mt-4">Thank You!</h3>
          <p className="text-gray-600 mt-2">Your message has been sent. We'll contact you shortly at your provided email address.</p>
          <button 
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setFormSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {formError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-700">{formError}</p>
            </div>
          )}
          
          {/* Web3Forms requires this hidden field with your access key */}
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          
          {/* Bot detection honeypot field - important for Web3Forms */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                accessKey="f"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                accessKey="l"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              accessKey="c"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              accessKey="e"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              accessKey="p"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              accessKey="w"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="promoCode" className="block text-gray-700 font-medium mb-2">
              Promo Code
            </label>
            <input
              type="text"
              id="promoCode"
              name="promoCode"
              accessKey="o"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.promoCode}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Briefly describe what your company sells
            </label>
            <textarea
              id="description"
              name="description"
              accessKey="d"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
              I agree to receive email communications from your company
            </label>
          </div>
          
          <div className="mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isSubmitting ? 'Sending...' : 'GET STARTED'}
            </button>
          </div>
        </form>
      )}
    </div>
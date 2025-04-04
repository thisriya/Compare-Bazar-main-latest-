import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { sendFormData } from './emailService';

const BusinessPhoneSystemForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    phoneSystemNeeds: '',
    phonesNeeded: '',
    zipCode: '',
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // State for CAPTCHA value
  const captchaRef = useRef(null); // Ref for CAPTCHA component

  // Auto-hide success message after 10 seconds
  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
        if (onClose) onClose();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setFormData({
      phoneSystemNeeds: '',
      phonesNeeded: '',
      zipCode: '',
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: ''
    });
    setCurrentStep(1);
    setCaptchaValue(null); // Reset CAPTCHA value
    if (captchaRef.current) {
      captchaRef.current.reset(); // Reset CAPTCHA widget
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use the emailService to send the email with timeout
      const response = await sendFormData(formData);
      console.log('Email sent successfully:', response);
      
      // Show success message and reset form
      setShowSuccess(true);
      resetForm();
      
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Sorry, there was a problem submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Which best describes your phone system needs?</h2>
            <div className="space-y-2">
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phoneSystemNeeds === 'Installing new phone system' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phoneSystemNeeds', 'Installing new phone system')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phoneSystemNeeds" 
                      className="sr-only"
                      checked={formData.phoneSystemNeeds === 'Installing new phone system'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phoneSystemNeeds === 'Installing new phone system' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phoneSystemNeeds === 'Installing new phone system' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">Installing new phone system</span>
                </label>
              </div>
              
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phoneSystemNeeds === 'Replacing existing phone system' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phoneSystemNeeds', 'Replacing existing phone system')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phoneSystemNeeds" 
                      className="sr-only"
                      checked={formData.phoneSystemNeeds === 'Replacing existing phone system'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phoneSystemNeeds === 'Replacing existing phone system' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phoneSystemNeeds === 'Replacing existing phone system' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">Replacing existing phone system</span>
                </label>
              </div>
              
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phoneSystemNeeds === 'Expanding existing phone system' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phoneSystemNeeds', 'Expanding existing phone system')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phoneSystemNeeds" 
                      className="sr-only"
                      checked={formData.phoneSystemNeeds === 'Expanding existing phone system'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phoneSystemNeeds === 'Expanding existing phone system' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phoneSystemNeeds === 'Expanding existing phone system' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">Expanding existing phone system</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Approximately how many phones do you need?</h2>
            <div className="space-y-2">
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phonesNeeded === '50+' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phonesNeeded', '50+')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phonesNeeded" 
                      className="sr-only"
                      checked={formData.phonesNeeded === '50+'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phonesNeeded === '50+' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phonesNeeded === '50+' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">50+</span>
                </label>
              </div>
              
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phonesNeeded === '4-49' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phonesNeeded', '4-49')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phonesNeeded" 
                      className="sr-only"
                      checked={formData.phonesNeeded === '4-49'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phonesNeeded === '4-49' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phonesNeeded === '4-49' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">4-49</span>
                </label>
              </div>
              
              <div 
                className={`p-3 rounded-md bg-blue-50 cursor-pointer ${formData.phonesNeeded === '1-3' ? 'border-2 border-[#ff8633]' : ''}`}
                onClick={() => handleRadioChange('phonesNeeded', '1-3')}
              >
                <label className="flex items-center cursor-pointer">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" 
                      name="phonesNeeded" 
                      className="sr-only"
                      checked={formData.phonesNeeded === '1-3'}
                      onChange={() => {}}
                    />
                    <div className={`w-4 h-4 border rounded-full flex items-center justify-center ${formData.phonesNeeded === '1-3' ? 'bg-[#ff8633] border-[#ff8633]' : 'border-gray-400 bg-white'}`}>
                      {formData.phonesNeeded === '1-3' && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-2 text-sm">1-3</span>
                </label>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What's your zip code?</h2>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter zip code"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              maxLength="5"
            />
          </div>
        );
        
      case 4:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">What's your email address?</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
            />
            <p className="text-xs text-gray-500 mt-2">By entering your email above, you consent to receive marketing emails from business.com.</p>
          </div>
        );
        
      case 5:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Last step! Who do we have the pleasure of working with?</h2>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
              />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+XX 1234567890"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff8633]"
                pattern="^\+[0-9]{2} [0-9]{10}$"
              />
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By clicking "Finish" above, I consent to receive from business.com and any party on its behalf at any time e-mails, 
              telemarketing calls using an autodialer, artificial/prerecorded voice or pre-recordings and SMS text messages, which could result 
              in wireless charges at the number provided above. I understand that consent is not a condition of purchase. I also 
              agree to the <a href="#" className="text-[#ff8633] hover:underline">Terms and Conditions</a> and <a href="#" className="text-[#ff8633] hover:underline">Privacy Policy</a> which are also linked at the bottom of this page.
            </p>
          </div>
        );
        
      case 6:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-3">Please verify that you're not a robot</h2>
            <ReCAPTCHA
              ref={captchaRef}
              sitekey="6LdQQ_MqAAAAAFVMO-x87CxPwWUmJXhIo4g2HI2Z" // Replace with your reCAPTCHA site key
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>
        );
        
      default:
        return null;
    }
  };

  const renderProgressDots = () => {
    const dots = [];
    for (let i = 1; i <= 6; i++) {
      dots.push(
        <div 
          key={i} 
          className={`h-2 w-2 rounded-full ${currentStep === i ? 'bg-[#ff8633]' : 'bg-gray-300'}`}
        ></div>
      );
    }
    return <div className="flex justify-center space-x-2 my-3">{dots}</div>;
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.phoneSystemNeeds !== '';
      case 2:
        return formData.phonesNeeded !== '';
      case 3:
        return formData.zipCode !== '';
      case 4:
        return formData.email !== '' && formData.email.includes('@');
      case 5:
        const phoneRegex = /^\+[0-9]{2} [0-9]{10}$/;
        return formData.firstName !== '' && 
               formData.lastName !== '' && 
               formData.phoneNumber !== '' &&
               phoneRegex.test(formData.phoneNumber);
      case 6:
        return captchaValue !== null; // CAPTCHA must be filled
      default:
        return true;
    }
  };

  return (
    <div className="w-full bg-white relative">
      {/* Success notification */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border-l-4 border-[#ff8633] z-1000 slide-in-right">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-[#ff8633]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3 w-0 flex-1">
              <h3 className="text-base font-medium text-gray-900">Thank you!</h3>
              <p className="mt-1 text-xs text-gray-500">
                Your submission has been received. We will get back to you soon.
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form */}
      <div>
        <form onSubmit={handleSubmit}>
          <div className="px-1 py-2">
            {renderStep()}
          </div>
          
          <div className="mt-6 flex items-center">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="flex items-center text-gray-600 px-3 py-1 rounded-md hover:bg-gray-100 text-sm"
                disabled={isSubmitting}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back
              </button>
            )}
            
            <button
              type="button"
              onClick={currentStep === 6 ? handleSubmit : nextStep}
              className={`ml-auto px-6 py-2 rounded-md font-medium text-sm ${
                isStepValid() 
                  ? 'bg-orange-400 hover:bg-orange-500 text-white' 
                  : 'bg-gray-300 cursor-not-allowed text-gray-500'
              }`}
              disabled={!isStepValid() || isSubmitting}
            >
              {isSubmitting 
                ? 'Processing...' 
                : currentStep === 6 
                  ? 'FINISH' 
                  : 'NEXT'
              }
            </button>
          </div>
          
          {renderProgressDots()}
        </form>
      </div>

      {/* Add CSS for slide-in animation */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .slide-in-right {
          animation: slideInRight 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BusinessPhoneSystemForm;
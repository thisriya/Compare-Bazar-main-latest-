import { useState } from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';

const LimitTheUse = () => {
  const [optOutStatus, setOptOutStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    requestType: '',
    informationType: [],
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    details: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        informationType: [...formData.informationType, name]
      });
    } else {
      setFormData({
        ...formData,
        informationType: formData.informationType.filter(type => type !== name)
      });
    }
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    const submissionData = {
      access_key: "4e9faa02-cb51-4253-98e6-b5794f4ece3a", // replace this with your actual key
      subject: "New Privacy Request",
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      request_type: formData.requestType,
      information_types: formData.informationType.join(', '),
      phone: formData.phone,
      details: formData.details
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({
          requestType: '',
          informationType: [],
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          details: ''
        });

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting to Web3Forms:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
    <Navbar/>
    <div className="max-w-6xl mt-10 mx-auto px-4 bg-white rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-gray-900">Limit the Use of My Sensitive Personal Information</h1>

      {/* Privacy Information Section */}
      <div className="space-y-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Rights Regarding Sensitive Personal Information</h2>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium text-[#000e54] mb-2">Key Information</h3>
          <p className="text-[#000e54] text-lg">
            You have the right to limit our use of your sensitive personal information to only those purposes necessary
            to provide our services. This page explains what constitutes sensitive information and how to exercise your rights.
          </p>
        </div>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Legal Basis for These Rights</h3>
          <p className="mb-4 text-lg">
            These rights are granted under several privacy laws, with specific provisions for sensitive data:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-gray-800">
            <li>
             California Privacy Rights Act (CPRA): Provides California residents with the right to limit
              use of sensitive personal information to specified business purposes.
            </li>
            <li>
              Virginia Consumer Data Protection Act (VCDPA): Requires opt-in consent for processing
              sensitive data categories.
            </li>
            <li>
              General Data Protection Regulation (GDPR): Establishes special protections for "special categories"
              of personal data under Article 9.
            </li>
            <li>
              Colorado Privacy Act (CPA) and Connecticut Data Privacy Act (CTDPA): Similar protections
              for sensitive data in these states.
            </li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">What Constitutes Sensitive Personal Information?</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2">Government Identifiers</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Social Security number</li>
                <li>Driver's license number</li>
                <li>Passport number</li>
                <li>State ID card number</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl">Financial Information</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Bank account numbers</li>
                <li>Credit/debit card numbers</li>
                <li>Account access credentials</li>
                <li>Precise financial geolocation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-xl mb-2">Health & Biometric Data</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-lg">
                <li>Medical conditions</li>
                <li>Health insurance information</li>
                <li>Biometric data (fingerprints, faceprints)</li>
                <li>Genetic data</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl">Demographic Characteristics</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Racial or ethnic origin</li>
                <li>Religious/philosophical beliefs</li>
                <li>Union membership</li>
                <li>Sexual orientation</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl">Communications & Location</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Mail/email contents (unless we're the recipient)</li>
                <li>Precise geolocation (within 1,750 feet)</li>
                <li>Private communications</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-xl">Other Sensitive Data</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Citizenship/immigration status</li>
                <li>Mental/physical health diagnoses</li>
                <li>Contents of private messages</li>
                <li>Login credentials</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-[#000e54] mb-2">Important Notes</h4>
            <p className="text-[#000e54] text-lg">
              Some information may be considered sensitive under one law but not another. We apply the broadest
              protections regardless of your location. Certain data elements (like ZIP code alone) typically don't
              qualify as sensitive.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Use Sensitive Information</h3>
          <p className="mb-4 text-lg">
            Without your explicit consent, we only use sensitive personal information for these permitted purposes:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl">Service Provision</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Processing payments for purchases</li>
                <li>Providing healthcare services (if applicable)</li>
                <li>Delivering core product functionality</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl">Security & Fraud Prevention</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Detecting security incidents</li>
                <li>Protecting against fraud</li>
                <li>Verifying identity</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl">Legal Compliance</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Complying with federal/state laws</li>
                <li>Responding to law enforcement</li>
                <li>Exercising legal rights</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-xl">Internal Business Purposes</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Maintaining service quality</li>
                <li>Short-term transient use</li>
                <li>Performing services on your behalf</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-[#000e54]">
            <h4 className="font-semibold text-xl mb-2 text-gray-800">Prohibited Uses Without Consent</h4>
            <p className="mb-2 text-lg text-gray-800">
              We will never use your sensitive information for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
              <li>Cross-context behavioral advertising</li>
              <li>Building advertising profiles</li>
              <li>Training AI models without de-identification</li>
              <li>Any purpose beyond what's necessary for our services</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How We Protect Sensitive Information</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Technical Safeguards</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>End-to-end encryption</li>
                <li>Tokenization of payment data</li>
                <li>Strict access controls</li>
                <li>Multi-factor authentication</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Organizational Measures</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Limited employee access</li>
                <li>Mandatory privacy training</li>
                <li>Data minimization policies</li>
                <li>Regular audits</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-gray-800 text-xl">Third-Party Protections</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
                <li>Strict contractual obligations</li>
                <li>Purpose limitations</li>
                <li>Data protection assessments</li>
                <li>Prohibitions on secondary use</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Privacy Choices Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Manage Your Sensitive Data Preferences</h2>
        
        <section className="bg-blue-50 p-5 rounded-lg">
          <h3 className="text-lg font-medium text-[#000e54] mb-2">What Changes When You Limit Use</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1 text-[#000e54]">Immediate Effects:</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-[#000e54]">
                <li>We stop using sensitive data for non-essential purposes</li>
                <li>Existing sensitive data is restricted to permitted uses</li>
                <li>Future collection is minimized to only what's necessary</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-lg text-[#000e54]">What Doesn't Change:</h4>
              <ul className="list-disc pl-5 space-y-1 text-lg text-[#000e54]">
                <li>Essential service functionality requiring this data</li>
                <li>Legal/regulatory compliance requirements</li>
                <li>Fraud prevention measures</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">How to Exercise Your Rights</h3>
          
          <div className="mb-6 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-5">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">Option 1: Online Request Portal</h4>
              <p className="mb-4 text-lg text-gray-800">
                Our secure portal allows you to submit and track requests regarding your sensitive data:
              </p>
              <button className="bg-[#000e54] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                Access Sensitive Data Request Portal
              </button>
            </div>
            <div className="bg-gray-50 p-5 border-t">
              <h4 className="font-semibold text-xl text-gray-800 mb-3">Option 2: Email Request</h4>
              <p className="mb-2 text-lg text-gray-800">
                Send an email to <span className="font-semibold text-gray-800">privacy@yourcompany.com</span> with:
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-1 text-lg text-gray-800">
                <li>Subject line: "Sensitive Data Request"</li>
                <li>Your full name</li>
                <li>Account information (if applicable)</li>
                <li>Specific request details</li>
              </ul>
            </div>
            <div className="p-5 border-t bg-white">
              <h4 className="font-semibold text-xl text-gray-800 mb-3">Option 3: Phone Request</h4>
              <p className="mb-2 text-lg text-gray-800">
                Call our dedicated privacy line:
              </p>
              <p className="text-xl font-semibold text-[#000e54]">1-800-555-PRIV (7748)</p>
              <p className="mt-2 text-sm text-gray-800">Available Monday-Friday, 9am-5pm EST</p>
            </div>
            <div className="bg-gray-50 p-5 border-t">
              <h4 className="font-semibold text-xl mb-3">Option 4: Mail Request</h4>
              <p className="mb-2 text-lg text-gray-800">
                Send written requests to:
              </p>
              <address className="not-italic text-lg text-gray-800">
                YourCompany Privacy Office<br />
                Attn: Sensitive Data Request<br />
                123 Data Protection Lane<br />
                Privacyville, CA 90210
              </address>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-xl text-[#000e54] mb-2">Verification Process</h4>
            <p className="mb-2 text-[#000e54] text-lg">
              To protect your information, we require verification of your identity before processing sensitive data requests.
              This may involve:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-lg text-[#000e54]">
              <li>Account authentication</li>
              <li>Government ID verification (for certain requests)</li>
              <li>Answering security questions</li>
              <li>Email confirmation</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Response Timeline & Process</h3>
          
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">1</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Request Submission</h4>
                  <p className="text-lg text-gray-800">
                    We acknowledge receipt of your request within 10 business days and provide information about
                    our verification process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">2</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Verification</h4>
                  <p className="text-lg text-gray-800">
                    Most requests are verified within 3-5 business days. Complex cases may take up to 10 days.
                    We'll notify you if additional information is needed.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">3</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Processing</h4>
                  <p className="text-lg text-gray-800">
                    We complete processing within 45 days of verification. For complex requests, we may extend
                    this period by an additional 45 days with notification.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="bg-[#000e54] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1">4</div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-gray-800">Completion</h4>
                  <p className="text-lg text-gray-800">
                    You'll receive a detailed report of actions taken. For limitations, we'll specify the
                    business purposes for which we retain certain sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-[#000e54]">
            <h4 className="font-semibold text-xl mb-2 text-gray-800">Exceptions & Limitations</h4>
            <p className="mb-2 text-lg text-gray-800">
              In certain circumstances, we may deny your request if:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-lg text-gray-800">
              <li>We cannot verify your identity</li>
              <li>The request is manifestly unfounded or excessive</li>
              <li>Retention is required by law or for legal claims</li>
              <li>Data is de-identified or aggregated</li>
              <li>Maintaining the data is necessary for our core services</li>
            </ul>
            <p className="mt-3 text-lg text-gray-800">
              If we deny your request, we'll explain why and provide information about appealing the decision.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Additional Protections</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">For Minors</h4>
              <p className="text-lg text-gray-800">
                We never knowingly sell or share sensitive data of consumers under 16 without affirmative
                authorization. Parents/guardians may make requests on behalf of minors.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-xl mb-2 text-gray-800">Data Retention</h4>
              <p className="text-lg text-gray-800">
                Sensitive data is retained only as long as necessary for the permitted purposes, typically:
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-lg text-gray-800">
                <li>7 years for financial records</li>
                <li>Duration of service plus 3 years for health data</li>
                <li>Immediate deletion of unused biometric data</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Contact Our Privacy Office</h3>
          <p className="mb-4 text-lg text-gray-800">
            For questions about our sensitive data practices or to appeal a decision regarding your request:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">General Inquiries</h4>
              <p className="text-lg">Email: <span className="font-semibold">privacy@yourcompany.com</span></p>
              <p className="text-lg">Phone: 1-800-555-HELP (4357)</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Data Protection Officer</h4>
              <p className="text-lg">Email: <span className="font-semibold">dpo@yourcompany.com</span></p>
              <p className="text-lg">Phone: 1-800-555-DPOA (3762)</p>
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-800">
            For complaints regarding our handling of sensitive data, you may also contact your local data protection authority.
          </p>
        </section>
      </div>
    </div>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          {submitSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-10 w-10 text-[#000e54]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Request Submitted!</h2>
              <p className="text-gray-800 text-lg mb-4">
                We've sent a confirmation to {formData.email}. Your request will be processed within 45 days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h1 className="text-4xl font-semibold text-gray-800 mb-2">Consumer Privacy Rights Request Form</h1>
                <p className="text-lg text-gray-800 mb-6">
                Not all persons are eligible for all data requests. This form will be used to determine your eligibility. To protect your privacy, you will be required to verify that you either are a person about whom we collected information or are someone authorized to act on such a person’s behalf. Requests are fulfilled as soon as practical, usually within 45 days.
                </p>
                <div className="border-b border-gray-200 pb-2 mb-4">
                  <p className="text-lg font-semibold text-[#000e54]">*REQUIRED FIELDS</p>
                </div>
              </div>

              {submitError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
                  {submitError}
                </div>
              )}

              {/* Request Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-1">
                  *Type of Requester:
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Consumer', 'Insurance Partner', 'Vendor', 'Authorized Person', 'Employee', 'Applicant'].map(type => (
                    <div key={type} className="flex items-center">
                      <input
                        id={`request-${type}`}
                        name="requestType"
                        type="radio"
                        value={type}
                        checked={formData.requestType === type}
                        onChange={handleRadioChange}
                        className="h-4 w-4 text-[#000e54] focus:ring-[#000e54] border-gray-300"
                        required
                      />
                      <label htmlFor={`request-${type}`} className="ml-2 block text-sm text-gray-700">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-1">
                  *Type of Personal Information (PI) Request:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'PI Report', 'PI Access', 'PI Deletion', 'Do Not Sell/Share My PI',
                    'Limit the Use of My Sensitive PI', 'Opt Out of Profiling/Automated Decision Making',
                    'Do Not Email', 'Do Not Call/Text', 'Correct My PI'
                  ].map(type => (
                    <div key={type} className="flex items-start">
                      <input
                        id={`info-${type}`}
                        name={type}
                        type="checkbox"
                        checked={formData.informationType.includes(type)}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 mt-1 text-[#000e54] focus:ring-[#000e54] border-gray-300 rounded"
                      />
                      <label htmlFor={`info-${type}`} className="ml-2 block text-sm text-gray-800">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-lg font-semibold text-gray-800">*First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-lg font-semibold text-gray-800">*Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-lg font-semibold text-gray-800">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-800">*Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  />
                </div>
              </div>

              {/* Details */}
              <div>
                <label htmlFor="details" className="block text-lg font-semibold text-gray-800">Request Details:</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
                  placeholder="Please provide additional information..."
                  maxLength="1000"
                ></textarea>
                <p className="mt-1 text-xs text-right text-gray-500">{formData.details.length}/1000 Characters</p>
              </div>

              {/* CAPTCHA (simulated) */}
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                <div className="flex items-center">
                  <input
                    id="captcha"
                    type="checkbox"
                    className="h-4 w-4 text-[#000e54] focus:ring-[#000e54] border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="captcha" className="ml-2 block text-sm text-gray-700">I'm not a robot</label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-[#000e54] transition-all duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Success Toast */}
      {submitSuccess && (
        <div className="fixed bottom-4 right-4 bg-[#000e54] text-white py-2 px-4 rounded-lg shadow-lg flex items-center">
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Form submitted successfully!
        </div>
      )}
    </div>
    <WideDiv/>
    <Footer/>
    </>
  );
};

export default LimitTheUse;
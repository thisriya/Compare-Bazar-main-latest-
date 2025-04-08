import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import Feedback from './Feedback';
import busimage from '/images/bg2.webp';
import { Users, Clock, Shield, BarChart2, Settings, CheckCircle } from 'lucide-react';

const EmployeeSection = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const navigate = useNavigate();

    const handleContactSales = () => {
        navigate('/contact-sales');
    };

    const features = [
        {
            title: "Streamlined Recruitment",
            description: "Simplify your hiring process with our AI-powered recruitment tools. Screen candidates efficiently, schedule interviews automatically, and track applicant progress in one centralized dashboard.",
            icon: "👥"
        },
        {
            title: "Employee Onboarding",
            description: "Automate paperwork, training schedules, and resource allocation for new hires. Our digital onboarding process reduces administrative overhead by 75% and gets new employees productive faster.",
            icon: "🚀"
        },
        {
            title: "Performance Analytics",
            description: "Track employee performance with customizable KPIs and intuitive dashboards. Generate insights that help managers make data-driven decisions and identify top performers.",
            icon: "📊"
        },
        {
            title: "Benefits Management",
            description: "Simplify benefits administration with our comprehensive management system. Employees can self-service their benefits, reducing HR workload while increasing workforce satisfaction.",
            icon: "🏥"
        },
        {
            title: "Compliance Assurance",
            description: "Stay updated with changing labor laws and regulations. Our system automatically flags compliance issues and generates required documentation to keep your business protected.",
            icon: "⚖"
        }
    ];

    const getShortDescription = (description) => {
        if (description.length <= 120) return description;
        return description.substring(0, 120) + '...';
    };

    const notices = [
        {
            title: "System Upgrade",
            description: "We're enhancing our platform on March 25th. Service will be unavailable from 2AM-5AM EST. All employee data will be preserved during this upgrade.",
            priority: "high"
        },
        {
            title: "New Features Released",
            description: "The latest update includes improved time tracking, integrated payroll processing, and enhanced reporting tools. Check your dashboard for tutorials.",
            priority: "medium"
        },
        {
            title: "Compliance Update",
            description: "Recent labor law changes have been incorporated into our compliance module. All forms and procedures are now current with 2025 regulations.",
            priority: "high"
        },
        {
            title: "Customer Support Hours",
            description: "Our support team is now available 24/7 to assist with any employment management questions or technical issues you may encounter.",
            priority: "low"
        }
    ];
  // faq
  const employeeFAQs = [
    {
      question: "How does your employee management system streamline HR processes?",
      answer: [
        "Automates routine HR tasks like attendance tracking and leave management",
        "Centralizes employee data for easy access and management",
        "Simplifies onboarding with digital paperwork and task checklists",
        "Provides self-service portals for employees to update their information",
        "Integrates with payroll systems to reduce manual data entry"
      ]
    },
    {
      question: "What features does your system offer for performance management?",
      answer: [
        "360-degree feedback and performance reviews",
        "Goal setting and tracking with OKRs/KPIs",
        "Real-time performance analytics and reporting",
        "Skill gap analysis and development planning",
        "Recognition and reward system integration"
      ]
    },
    {
      question: "How does your system handle employee onboarding?",
      answer: "Our onboarding module automates the entire process from offer acceptance to first-day readiness. It includes digital document signing, task assignments for multiple departments, equipment provisioning workflows, training scheduling, and automated reminders to ensure nothing falls through the cracks."
    },
    {
      question: "Can the system help with compliance and labor laws?",
      answer: [
        "Yes, our compliance features include:",
        "Automatic updates for changing labor regulations",
        "Required documentation tracking and alerts",
        "Customizable policy acknowledgments",
        "Audit trails for all HR actions",
        "Built-in templates for compliance documents"
      ]
    },
    {
      question: "How does your time and attendance tracking work?",
      answer: "Our system offers multiple tracking options including biometric devices, mobile check-in/check-out, GPS verification for remote workers, and integration with existing time clocks. It automatically calculates overtime, manages shift schedules, and flags attendance patterns that may need attention."
    },
    {
      question: "What reporting capabilities does the system offer?",
      answer: "We provide over 50 standard reports covering turnover, headcount, compensation analysis, diversity metrics, and more. All reports can be customized, scheduled for automatic delivery, and exported in multiple formats. Our analytics dashboard offers real-time visualization of key HR metrics."
    },
    {
      question: "How secure is our employee data in your system?",
      answer: [
        "We employ enterprise-grade security including:",
        "SOC 2 Type II and GDPR compliance",
        "Role-based access controls with multi-factor authentication",
        "End-to-end encryption for all sensitive data",
        "Regular third-party security audits",
        "Geographically redundant data centers"
      ]
    },
    {
      question: "Can the system integrate with our existing HR software?",
      answer: "Yes, our platform offers pre-built integrations with most major payroll providers, benefits administrators, ATS systems, and accounting software. We also provide a robust API for custom integrations with your unique tech stack."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via phone, email, and live chat. Every customer gets a dedicated account manager, quarterly business reviews, and access to our online knowledge base with video tutorials. Implementation includes hands-on training for your team."
    },
    {
      question: "How does your system improve employee engagement?",
      answer: [
        "Engagement features include:",
        "Pulse surveys and sentiment analysis",
        "Peer recognition and reward tools",
        "Career pathing and development planning",
        "Internal mobility and job posting features",
        "Social features for team connection"
      ]
    }
  ];


   const articles1 = [
      {
        id: 1,
        title: "VoIP vs Landline Phone System",
        image: busimage,
        author: "Catie",
        date: "November 21, 2019",
        excerpt: "American businesses today face a major debate when deciding on technology. Should I get VoIP vs. a traditional landline ...",
        link: "#"
      },
      {
        id: 2,
        title: "RingCentral Business Phone System: Features, Pricing, Pros and Cons",
        image: busimage,
        author: "Catie",
        date: "October 7, 2020",
        excerpt: "RingCentral Overview RingCentral is a popular VoIP provider offering both cloud-based and hosted solutions for businesses of various sizes. They ...",
        link: "#"
      },
      {
        id: 3,
        title: "8 Steps for Choosing the Right VoIP Service Provider",
        image: busimage,
        author: "Catie",
        date: "January 11, 2023",
        excerpt: "As a business leader, surely you want to find the best business phone system for your organization's needs. With ...",
        link: "#"
      }
    ];

    const homeTestimonials = [
        {
          avatar: "P",
          avatarColor: "bg-purple-600",
          name: "Pedro G.",
          date: "06/12/2024",
          stars: 5,
          text: "Blake and Courtney are a powerhouse if your are new to the leads world. They kept their end of the bargain lots of quality leads."
        },
        {
          avatar: "E",
          avatarColor: "bg-blue-500",
          name: "Eric L.",
          date: "10/31/2023",
          stars: 5,
          text: "I needed a few more vendors to gather information for a lease or purchase of a copier for our church. 360Connect did just that."
        }
      ];

    const getPriorityStyles = (priority) => {
        switch (priority) {
            case 'high':
                return "border-l-4 border-[#000e54]";
            case 'medium':
                return "border-l-4 border-[#000e54]";
            case 'low':
                return "border-l-4 border-[#000e54]";
            default:
                return "";
        }
    };
    


    return (
        <>

         {/* introduction */}
         <div id="intro-employee" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-6">
          <span className="text-gray-900">Empower Your Workforce</span> with Our Management System
        </h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          Streamline HR processes, enhance productivity, and create exceptional employee experiences with our comprehensive management platform.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Centralized Employee Data</h3>
          <p className="text-gray-600">
            Maintain all employee information in one secure, accessible location with advanced search and reporting capabilities.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Time & Attendance</h3>
          <p className="text-gray-600">
            Automated tracking with biometric integration, leave management, and real-time reporting.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Management</h3>
          <p className="text-gray-600">
            Stay compliant with labor regulations through automated documentation and audit trails.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <BarChart2 className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Analytics</h3>
          <p className="text-gray-600">
            Data-driven insights with customizable dashboards and workforce reporting.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
            <Settings className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Automated Workflows</h3>
          <p className="text-gray-600">
            Streamline approvals, notifications, and HR processes with customizable automation.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Management</h3>
          <p className="text-gray-600">
            360° feedback, goal tracking, and continuous performance evaluation tools.
          </p>
        </div>
      </div>

      {/* Visual Demo */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience the Difference</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our intuitive dashboard provides managers and HR professionals with all the tools they need in one place.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-800">Real-time employee data</h4>
                  <p className="text-gray-600 text-sm">Access up-to-date information anytime, anywhere</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-800">Mobile-friendly interface</h4>
                  <p className="text-gray-600 text-sm">Manage your workforce on the go</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-800">Customizable reports</h4>
                  <p className="text-gray-600 text-sm">Generate insights tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 flex items-center justify-center">
            <svg className="w-full max-w-md" viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg">
              {/* Dashboard Background */}
              <rect x="50" y="30" width="400" height="300" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="2"/>
              
              {/* Header Bar */}
              <rect x="50" y="30" width="400" height="50" rx="10" fill="#3b82f6" />
              <text x="70" y="60" fill="white" fontFamily="Arial" fontSize="16" fontWeight="bold">Employee Dashboard</text>
              
              {/* Sidebar */}
              <rect x="50" y="80" width="100" height="250" fill="#f9fafb" />
              <rect x="70" y="100" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="120" width="60" height="10" rx="2" fill="#3b82f6" />
              <rect x="70" y="140" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="160" width="60" height="10" rx="2" fill="#d1d5db" />
              <rect x="70" y="180" width="60" height="10" rx="2" fill="#d1d5db" />
              
              {/* Stats Cards */}
              <rect x="170" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="180" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="180" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="180" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              <rect x="260" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="270" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="270" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="270" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              <rect x="350" y="90" width="80" height="60" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              <rect x="360" y="100" width="40" height="5" rx="1" fill="#9ca3af" />
              <rect x="360" y="115" width="60" height="10" rx="1" fill="#1d4ed8" />
              <rect x="360" y="130" width="30" height="5" rx="1" fill="#9ca3af" />
              
              {/* Main Chart */}
              <rect x="170" y="170" width="260" height="140" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="1" />
              
              {/* Bar Chart */}
              <rect x="190" y="280" width="20" height="20" rx="1" fill="#93c5fd" />
              <rect x="220" y="260" width="20" height="40" rx="1" fill="#3b82f6" />
              <rect x="250" y="240" width="20" height="60" rx="1" fill="#93c5fd" />
              <rect x="280" y="220" width="20" height="80" rx="1" fill="#3b82f6" />
              <rect x="310" y="250" width="20" height="50" rx="1" fill="#93c5fd" />
              <rect x="340" y="270" width="20" height="30" rx="1" fill="#3b82f6" />
              
              {/* Chart Labels */}
              <text x="190" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Mon</text>
              <text x="220" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Tue</text>
              <text x="250" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Wed</text>
              <text x="280" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Thu</text>
              <text x="310" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Fri</text>
              <text x="340" y="300" fill="#6b7280" fontFamily="Arial" fontSize="10">Sat</text>
            </svg>
          </div>
        </div>
      </div>
    </div>


        <div className="bg-white font-sans">

            {/* Features Section */}
            <div className="py-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Solution</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index
                                        ? 'bg-[#000e54] text-white border-l-4 border-[#000e54]'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                onClick={() => {
                                    setActiveFeature(index);
                                    setShowFullDescription(false); // Reset to short description when changing features
                                }}
                            >
                                <div className="flex items-center">
                                    <span className="text-2xl mr-4">{feature.icon}</span>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-span-2 bg-gray-50 p-8 rounded-lg">
                        <div className="mb-4">
                            <span className="text-5xl mb-4 block">{features[activeFeature].icon}</span>
                            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                        </div>
                        <p className="text-gray-700 mb-6">
                            {showFullDescription ? (
                                <>
                                    {features[activeFeature].description}{" "}
                                    <button
                                        onClick={() => setShowFullDescription(false)}
                                        className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                    >
                                        less
                                    </button>
                                </>
                            ) : (
                                <>
                                    {getShortDescription(features[activeFeature].description)}
                                    {features[activeFeature].description.length > 120 && (
                                        <>
                                            ...{" "}
                                            <button
                                                onClick={() => setShowFullDescription(true)}
                                                className="text-[#ff8633] hover:text-[#000e54] font-medium transition-colors focus:outline-none inline-flex items-center"
                                            >
                                                more
                                            </button>
                                        </>
                                    )}
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>

            {/* notice section */}
            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-[#000e54] font-semibold">STAY INFORMED</span>
                        <h2 className="text-3xl font-bold mt-2">Important Notices for Our Customers</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            We're committed to keeping you updated about changes to our service, new features, and important information that may affect your employment management system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {notices.map((notice, index) => (
                            <div
                                key={index}
                                className={`bg-white p-6 rounded-lg shadow-md ${getPriorityStyles(notice.priority)}`}
                            >
                                <div className="flex items-center mb-4">
                                    {notice.priority === 'high' && (
                                        <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2">
                                            Important
                                        </span>
                                    )}
                                    <h3 className="font-bold text-xl">{notice.title}</h3>
                                </div>
                                <p className="text-gray-700 mb-4">{notice.description}</p>
                                <div className="flex justify-end">
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="py-16 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Employment Management?</h2>
                    <p className="text-gray-600 mb-8">Join thousands of companies that have streamlined their HR processes and improved employee satisfaction.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="bg-[#ff8633] border border-gray-300 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#000e54] hover:text-white hover:border-[#ff8633] transition duration-300"
                            onClick={handleContactSales}
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </div>

       

       {/* article */}
        <div id="employee-articles">
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
      </div>

      {/* faq */}
      <div id="employee-faq" className="">
        <FAQ faqs={ employeeFAQs} />
      </div>

      {/* feedback */}
      <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      />
        </>
    );
};

export default EmployeeSection;
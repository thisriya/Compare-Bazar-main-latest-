import React from 'react';
import Navbar from './Navbar';
import WideDiv from './WideDiv';
import Footer from './Footer';
import { Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';



const Advertise = () => {

    const solutions = [
        {
          id: 'traffic',
          title: 'Get Qualified Traffic to Your Landing Page',
          icon: <Zap className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Attract Leads Across the Business.com Marketplace',
          features: [
            'Custom native looking ad placements with high conversion rates',
            'Affordable, pay-per-click pricing ensures you pay for outcomes',
            'Utilize our pixel to track who converts'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633] ',
          link: '/contact-sales'
        },
        {
          id: 'leads',
          title: 'Sales Qualified Leads Directly to Your Inbox',
          icon: <Users className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Get Instant Leads Across 100+ B2B Categories',
          features: [
            'Exclusive or Shared Leads',
            'High Quality Human verified Leads',
            'Fast Lead delivery via email, text, or CRM'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633]',
          link: '/contact-sales'
        },
        {
          id: 'ads',
          title: 'Strategic Sponsored Ads',
          icon: <BarChart3 className="w-8 h-8 text-[#000e54]" />,
          subtitle: 'Amplify Your Brand with Our Content Expertise',
          features: [
            'Sponsor or create a lead generating article with our team',
            'Reach over 10 million SMBs searching for solutions',
            'Generate Brand awareness'
          ],
          color: 'bg-blue-100',
          buttonColor: 'bg-[#ff8633]',
          link: '/contact-sales'
        }
      ];


  return (
    <>
    <Navbar/>
    {/* hero section */}
    <section className="relative max-w-6xl mx-auto  text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-orange-500 rounded-full mix-blend-screen opacity-15 filter blur-3xl"></div>
        
        {/* SVG patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="lg:w-1/2">

            <h1 className="text-4xl text-gray-800 font-semibold mb-6 leading-tight">
              Amplify Your Brand <br className="hidden lg:block"/>With Our Premium Network
            </h1>
            
            <p className="text-xl  mb-8 text-gray-800 max-w-2xl leading-relaxed">
              Join 500+ satisfied advertisers reaching over 2 million targeted professionals monthly. Our data-driven platform delivers exceptional ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 bg-[#ff8633] hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                Request Media Kit
              </button>
              <button className="px-8 py-4 hover:bg-white hover:text-blue-900 text-gray-800 font-semibold rounded-full transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Schedule Consultation
              </button>
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                  <img className="w-8 h-8 rounded-full border-2 border-blue-900" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
                </div>
                <span className="text-lg text-gray-800">Trusted by 500+ brands</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-blue-600/50"></div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-lg text-gray-800">4.9/5 average advertiser rating</span>
              </div>
            </div>
          </div>

          {/* Image/content card */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                <img 
                  src="https://tse4.mm.bing.net/th?id=OIP.XCn-mxd3F6sEkGJxW-3wZQHaE8&pid=Api&P=0&h=180" 
                  alt="Advertising Opportunities" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 w-3/4 border border-white/20">
                <h3 className="text-blue-900 font-semibold text-lg mb-3">Why Advertise With Us?</h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">2M+ targeted visitors monthly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">85% average engagement rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* cards */}
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-semibold text-center mb-8">Find the Right Solution for You</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map(solution => (
          <div 
            key={solution.id}
            className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${solution.color}`}
          >
            <div className="p-6">
              <div className="bg-white inline-flex rounded-lg p-3 shadow-sm mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">{solution.title}</h3>
              <p className="text-lg text-gray-800 font-semibold mb-6">{solution.subtitle}</p>
              
              <ul className="space-y-4 mb-8">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 mr-2">
                      <svg className="h-5 w-5 text-[#000e54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={solution.link}
                className={`block w-full py-3 px-4 rounded-lg text-white font-semibold text-center transition-colors ${solution.buttonColor}`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>


    <WideDiv/>
    <Footer/>
    </>
  );
};

export default Advertise;
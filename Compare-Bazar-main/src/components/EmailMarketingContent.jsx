import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import busimage from '/images/bg2.webp';
import { ChevronRight, Users,TrendingUp,DollarSign, 
    BarChart2,   Zap, 
    Maximize, 
    Globe, 
    Clock, 
    Award, 
    MessageSquare, 
    Heart, Mail, PieChart, Settings, Check, UserPlus, Repeat, Target, BarChart3, Edit, SendHorizontal } from 'lucide-react';




const EmailMarketingContent = () => {
    
  // faq
  const emailFAQs = [
    {
      question: "How does email marketing improve my business operations?",
      answer: [
        "Direct communication with targeted customer segments",
        "Automated lead nurturing and customer onboarding",
        "Increased conversion rates with personalized content",
        "Measurable ROI tracking for marketing campaigns",
        "Better customer engagement with timely promotions"
      ]
    },
    {
      question: "What types of businesses can benefit from email marketing?",
      answer: "Our email marketing solutions work for all types of businesses including e-commerce stores, service providers, B2B companies, nonprofits, and educational institutions. The platform is scalable regardless of your industry or business size."
    },
    {
      question: "How can I improve my email deliverability rates?",
      answer: "Our systems maintain deliverability rates above 98% using advanced authentication protocols like DKIM and SPF. We provide automated list cleaning, bounce management, and sender reputation monitoring to ensure your emails reach the inbox."
    },
    {
      question: "Can I track customer behavior with email marketing?",
      answer: [
        "Yes, our system tracks and reports on:",
        "Open rates and times",
        "Click-through behavior",
        "Conversion tracking",
        "Website activity after email clicks",
        "Provides comprehensive engagement analytics"
      ]
    },
    {
      question: "What happens if my emails go to spam folders?",
      answer: "The platform constantly monitors spam complaints and provides actionable suggestions to improve deliverability. We offer spam testing tools before sending and automatically optimize sending patterns to avoid triggering spam filters."
    },
    {
      question: "How often should I send marketing emails to my list?",
      answer: "Optimal sending frequency varies by industry, but our data shows 1-2 emails per week typically provides the best engagement. Our AI-powered send time optimization determines the ideal timing for each individual subscriber based on their past behavior."
    },
    {
      question: "Can I set up automated email sequences and workflows?",
      answer: [
        "Yes, you can configure automated emails for:",
        "Welcome sequences for new subscribers",
        "Abandoned cart recovery",
        "Post-purchase follow-ups",
        "Re-engagement campaigns",
        "Birthday and anniversary messages",
        "Behavior-triggered notifications"
      ]
    },
    {
      question: "Is the email marketing platform difficult to use?",
      answer: "Our drag-and-drop editor requires no coding skills and includes hundreds of responsive templates. Most users can create and launch their first campaign within 30 minutes of signup. We also offer comprehensive onboarding and free template customization services."
    }
  ];

 



//   alternative




 

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

    const steps = [
        {
          title: "Define Your Audience",
          description: "Identify your target audience based on demographics, behavior, and interests.",
          icon: <Users className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Segment customers based on purchase history",
            "Group by demographics (age, location)",
            "Segment by website behavior and engagement"
          ]
        },
        {
          title: "Build Your Email List",
          description: "Create compelling opt-in forms and landing pages to capture email addresses.",
          icon: <UserPlus className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Create lead magnets (guides, discounts)",
            "Use sign-up forms on your website",
            "Implement pop-ups and exit-intent forms"
          ]
        },
        {
          title: "Choose Email Platform",
          description: "Select an email service provider that matches your needs and budget.",
          icon: <Settings className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Evaluate deliverability rates",
            "Compare automation capabilities",
            "Assess template options and ease of use"
          ]
        },
        {
          title: "Create Compelling Content",
          description: "Design emails with engaging subject lines, clear CTAs, and valuable content.",
          icon: <Edit className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Write attention-grabbing subject lines",
            "Design mobile-responsive templates",
            "Create clear calls-to-action"
          ]
        },
        {
          title: "Send Campaigns",
          description: "Schedule and send your emails at optimal times for engagement.",
          icon: <SendHorizontal className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Test email rendering across devices",
            "Determine optimal sending times",
            "Send welcome sequences for new subscribers"
          ]
        },
        {
          title: "Analyze Performance",
          description: "Track key metrics like open rates, click rates, conversions, and ROI.",
          icon: <BarChart3 className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Monitor open and click-through rates",
            "Track conversion and revenue metrics",
            "Analyze subscriber growth and churn"
          ]
        },
        {
          title: "Optimize & Improve",
          description: "Use data to refine your approach, test new strategies, and improve results.",
          icon: <Repeat className="w-12 h-12 text-[#000e54]" />,
          details: [
            "Conduct A/B testing on various elements",
            "Refine segmentation strategy",
            "Improve content based on engagement data"
          ]
        }
      ];
    
      // Email marketing statistics
      const stats = [
        { label: "ROI", value: "$42", subtext: "for every $1 spent" },
        { label: "Open Rate", value: "18%", subtext: "industry average" },
        { label: "Conversion", value: "3.7%", subtext: "average rate" },
        { label: "Subscribers", value: "81%", subtext: "check email daily" }
      ];
      const [activeCategory, setActiveCategory] = useState('roi');
      const categories = {
        roi: {
          title: "Return on Investment",
          icon: <DollarSign className="h-8 w-8 text-[#000e54]" />,
          color: "bg-blue-50 border-blue-200",
          textColor: "text-[#000e54]",
          hoverColor: "hover:bg-blue-100",
          activeColor: "bg-blue-100",
          benefits: [
            {
              title: "Highest ROI in Digital Marketing",
              description: "Email marketing generates $42 for every $1 spent, outperforming all other digital marketing channels including social media and PPC advertising.",
              icon: <TrendingUp />
            },
            {
              title: "Cost-Effective Marketing",
              description: "Minimal costs compared to traditional marketing methods with no printing or postage expenses and affordable email marketing platforms.",
              icon: <DollarSign />
            },
            {
              title: "Trackable Results",
              description: "Precisely measure campaign performance through open rates, click-through rates, conversion rates, and revenue attribution for data-driven decisions.",
              icon: <BarChart2 />
            }
          ]
        },
        targeting: {
          title: "Precise Targeting",
          icon: <Target className="h-8 w-8 text-orange-500" />,
          color: "bg-orange-50 border-orange-200",
          textColor: "text-orange-600",
          hoverColor: "hover:bg-orange-100",
          activeColor: "bg-orange-100",
          benefits: [
            {
              title: "Advanced Segmentation",
              description: "Send highly relevant messages by segmenting your audience based on demographics, behavior, purchase history, and engagement levels.",
              icon: <Users />
            },
            {
              title: "Personalized Communication",
              description: "Customize content, product recommendations, and offers for each subscriber to increase relevance and strengthen customer relationships.",
              icon: <MessageSquare />
            },
            {
              title: "Behavior-Triggered Emails",
              description: "Automatically send perfectly timed emails based on specific customer actions like purchases, abandoned carts, or website browsing behavior.",
              icon: <Zap />
            }
          ]
        },
        scalability: {
          title: "Scalability & Reach",
          icon: <Maximize className="h-8 w-8 text-purple-500" />,
          color: "bg-purple-50 border-purple-200",
          textColor: "text-purple-700",
          hoverColor: "hover:bg-purple-100",
          activeColor: "bg-purple-100",
          benefits: [
            {
              title: "Global Reach",
              description: "Instantly connect with customers worldwide without additional cost, breaking down geographical barriers for your business expansion.",
              icon: <Globe />
            },
            {
              title: "Automated Campaigns",
              description: "Scale your marketing efforts through automation workflows that nurture leads and customers without manual intervention.",
              icon: <Clock />
            },
            {
              title: "A/B Testing Capabilities",
              description: "Continuously improve performance by testing different elements like subject lines, content, and CTAs to optimize engagement.",
              icon: <Award />
            }
          ]
        },
        relationship: {
          title: "Customer Relationships",
          icon: <Heart className="h-8 w-8 text-red-500" />,
          color: "bg-red-50 border-red-200",
          textColor: "text-red-700",
          hoverColor: "hover:bg-red-100",
          activeColor: "bg-red-100",
          benefits: [
            {
              title: "Direct Communication Channel",
              description: "Maintain direct contact with your audience without dependency on social media algorithms or third-party platform changes.",
              icon: <MessageSquare />
            },
            {
              title: "Customer Lifetime Value",
              description: "Increase repeat purchases and customer loyalty through regular engagement, personalized recommendations, and exclusive offers.",
              icon: <Users />
            },
            {
              title: "Brand Authority",
              description: "Establish your expertise and build trust by consistently delivering valuable content and personalized experiences to your subscribers.",
              icon: <Award />
            }
          ]
        }
      };
    
      // Success stories
      const successStories = [
        {
          company: "Fashion Retailer",
          result: "143% increase in revenue",
          strategy: "Implemented personalized product recommendation emails based on browsing history"
        },
        {
          company: "SaaS Provider",
          result: "27% reduction in churn rate",
          strategy: "Created educational onboarding email sequence for new customers"
        },
        {
          company: "Online Bookstore",
          result: "92% boost in repeat purchases",
          strategy: "Developed interest-based book recommendation campaigns"
        }
      ];
    
      // Statistics
      const statistics = [
        { label: "Average ROI", value: "42x" },
        { label: "Global Email Users", value: "4.3B" },
        { label: "Welcome Email Open Rate", value: "82%" },
        { label: "Personalized Subject Lines", value: "+26%" },
      ];
    
    

  return (
    <>

      {/* introduction */}
      <div id="intro-email" className="max-w-6xl mx-auto py-16 px-4">
  <div className="relative rounded-2xl p-8 overflow-hidden">
    {/* Decorative SVG elements */}
    <div className="absolute top-0 right-0 opacity-10">
      <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
        <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
      </svg>
    </div>
    <div className="absolute bottom-0 left-0 opacity-10">
      <svg width="250" height="250" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-500">
        <path d="M19 14L17.5 12.5L14.5 15.5L16 17L19 14ZM12 16L14 14H11V12H14L12 10V8L17 13L12 18V16ZM4 20V12H10V20H4ZM4 10V4H20V10H4Z"/>
      </svg>
    </div>

    <div className="flex flex-col md:flex-row">
      {/* Left content with title and description */}
      <div className="md:w-7/12 z-10">
        <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#000e54] font-medium text-lg mb-4">
          Grow Your Business
        </div>
        <h1 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
          Transform Your Customer Relationships with <span className="text-orange-500">Email Marketing</span>
        </h1>
        <p className="text-lg text-gray-800 mb-8 leading-relaxed">
          Email marketing remains the most powerful digital channel for ROI, with an average return of $36 for every $1 spent. Our curated selection of top email marketing platforms helps businesses of all sizes create personalized campaigns, automate customer journeys, and drive measurable results through data-driven insights and powerful analytics.
        </p>
        <div className="flex flex-wrap gap-6 mb-8">
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">Personalization</h3>
              <p className="text-gray-800 text-lg">Tailored content for each subscriber</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924A7 7 0 0 0 9.032 5.658l.975 1.755A5 5 0 0 1 17 12h-3l2.82 5.076z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 text-xl">Automation</h3>
              <p className="text-gray-600 text-lg">Save time with automated workflows</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side stats */}
      <div className="md:w-5/12 md:pl-8 flex items-center justify-center z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Why Email Marketing Works</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-lg">91%</span>
              </div>
              <p className="text-gray-800 text-lg">of consumers check their email daily</p>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-lg">59%</span>
              </div>
              <p className="text-gray-800 text-lg">say marketing emails influence purchases</p>
            </div>
            <div className="flex items-center">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mr-4">
                <span className="text-[#000e54] font-semibold text-lg">4x</span>
              </div>
              <p className="text-gray-800 text-lg">higher ROI than social media marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* what is emailmarketing*/}
      <section id="what-is-emailmarketing" className="py-12 ">
  <div className="container mx-auto max-w-6xl px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-semibold text-gray-900 mb-6">Powerful Email Marketing Solutions</h2>
      <p className="text-xl text-gray-800 max-w-3xl mx-auto">
        Connect with your audience, drive conversions, and build lasting relationships through 
        strategic email campaigns that deliver measurable results.
      </p>
    </div>

    {/* What is Email Marketing */}
    <div className="mb-20 bg-white rounded-2xl  p-8">
      <h3 className="text-4xl font-semibold text-gray-900 mb-6">What is Email Marketing?</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-gray-800 mb-4">
            Email marketing is a digital strategy that involves sending targeted messages to prospects 
            and customers through email. It allows businesses to communicate directly with their audience, 
            nurturing leads and fostering loyalty.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Unlike other marketing channels, email provides a direct line of communication that you own, 
            independent of algorithm changes or platform restrictions. With an average ROI of $36 for every 
            $1 spent, email marketing remains one of the most effective marketing strategies available.
          </p>
          <p className="text-lg text-gray-700">
            Modern email marketing goes far beyond simple newsletters. Today's sophisticated campaigns 
            leverage personalization, automation, and data-driven insights to deliver the right message 
            to the right person at the right time.
          </p>
        </div>
        {/* <div className="bg-blue-100 p-6 rounded-xl">
          <h4 className="text-2xl font-semibold text-blue-800 mb-4">Email Marketing Statistics</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-blue-500 p-1 rounded-full mt-1 mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">4.3 billion global email users in 2024</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500 p-1 rounded-full mt-1 mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Average open rate of 21.33% across industries</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500 p-1 rounded-full mt-1 mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">59% of consumers say marketing emails influence their purchase decisions</span>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-500 p-1 rounded-full mt-1 mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-700">Personalized email subject lines increase open rates by 26%</span>
            </li>
          </ul>
        </div> */}
        <div>
            <img src="https://ileads.com/wp-content/uploads/sites/2/2016/03/email2b.jpg" alt="" />
        </div>
      </div>
    </div>

    {/* Key Components Grid */}
    <div className="mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Key Components of Email Marketing</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-lg">
        {[
          {
            icon: <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>,
            title: "List Building & Segmentation",
            description: "Strategically grow your email list and divide subscribers into targeted groups based on demographics, behaviors, and preferences."
          },
          {
            icon: <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
            </svg>,
            title: "Email Design & Content",
            description: "Create visually appealing, mobile-responsive emails with compelling copy, clear CTAs, and valuable content that drives engagement."
          },
          {
            icon: <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            title: "Automation & Workflows",
            description: "Set up triggered email sequences that automatically deliver timely, relevant messages based on subscriber actions and lifecycle stages."
          },
          {
            icon: <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>,
            title: "Analytics & Optimization",
            description: "Track performance metrics like open rates, click-through rates, and conversions to continuously improve your email marketing strategy."
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
            <p className="text-gray-800 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Types of Email Campaigns */}
    <div className="mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Types of Email Marketing Campaigns</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Welcome Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
            </svg>,
            color: "bg-blue-600",
            description: "First impressions matter. Welcome new subscribers with a warm introduction and clear next steps to build engagement from day one."
          },
          {
            title: "Newsletters",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>,
            color: "bg-green-600",
            description: "Keep your audience informed and engaged with regular updates featuring company news, industry insights, and valuable content."
          },
          {
            title: "Promotional Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-purple-600",
            description: "Drive sales with limited-time offers, exclusive discounts, and special promotions that create urgency and encourage immediate action."
          },
          {
            title: "Abandoned Cart Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>,
            color: "bg-orange-600",
            description: "Recover potentially lost sales by reminding customers of items left in their shopping cart, often with incentives to complete the purchase."
          },
          {
            title: "Post-Purchase Emails",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-red-600",
            description: "Build customer loyalty with order confirmations, shipping updates, product usage tips, and review requests after a purchase."
          },
          {
            title: "Re-engagement Campaigns",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>,
            color: "bg-indigo-600",
            description: "Win back inactive subscribers with special offers, updates about what they've missed, or requests for feedback to rekindle interest."
          }
        ].map((campaign, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <div className={`${campaign.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
              {campaign.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h4>
            <p className="text-gray-800 text-lg">{campaign.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Implementation Process */}
    <div className="mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 text-center mb-10">Email Marketing Implementation Process</h3>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 text-center">
        {[
          {
            step: "1",
            title: "Define Goals & Strategy",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>,
            color: "bg-blue-600",
            description: "Establish clear objectives, identify target audiences, and determine key performance indicators for your email campaigns."
          },
          {
            step: "2",
            title: "Build Your Email List",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>,
            color: "bg-green-600",
            description: "Create compelling opt-in offers and implement ethical list-building tactics to grow your subscriber base with quality contacts."
          },
          {
            step: "3",
            title: "Select Email Platform",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>,
            color: "bg-purple-600",
            description: "Choose an email service provider that offers the features, automation capabilities, and analytics needed for your business."
          },
          {
            step: "4",
            title: "Design & Create Content",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>,
            color: "bg-orange-600",
            description: "Develop mobile-friendly email templates and create compelling, personalized content that resonates with your audience segments."
          },
          {
            step: "5",
            title: "Set Up Automation",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>,
            color: "bg-red-600",
            description: "Configure triggered email sequences for welcome series, abandoned carts, post-purchase flows, and other automated campaigns."
          },
          {
            step: "6",
            title: "Test & Optimize",
            icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>,
            color: "bg-indigo-600",
            description: "Run A/B tests on subject lines, content, and send times, then analyze results to continuously improve performance metrics."
          }
        ].map((step, index) => (
          <div key={index} className="flex-1">
            <div className="flex flex-col items-center">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {step.icon}
              </div>
              <div className="h-24 w-px bg-gray-300 hidden md:block"></div>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">{step.title}</h4>
              <p className="text-gray-800 text-center text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Best Practices */}
    <div className="bg-white rounded-2xl  p-8 mb-20">
      <h3 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Best Practices</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Personalization",
            description: "Go beyond using the recipient's name. Leverage data to personalize content based on past purchases, browsing behavior, and preferences to increase relevance and engagement."
          },
          {
            title: "Mobile Optimization",
            description: "With over 60% of emails opened on mobile devices, ensure your emails are responsive, load quickly, and feature easily tappable buttons and readable text."
          },
          {
            title: "Clear Call-to-Action",
            description: "Include one primary, visually prominent CTA that clearly communicates what action you want recipients to take and why it benefits them."
          },
          {
            title: "List Segmentation",
            description: "Divide your email list into targeted segments based on demographics, behavior, interests, and purchase history to deliver more relevant content."
          },
          {
            title: "Subject Line Optimization",
            description: "Craft compelling, concise subject lines (40-50 characters) that create curiosity or highlight value without using spammy language or excessive punctuation."
          },
          {
            title: "Compliance & Consent",
            description: "Follow email marketing regulations like GDPR and CAN-SPAM by obtaining proper consent, providing unsubscribe options, and honoring privacy preferences."
          },
          {
            title: "Send Time Optimization",
            description: "Analyze your audience's engagement patterns to determine the optimal days and times to send emails for maximum open and click-through rates."
          },
          {
            title: "Regular List Maintenance",
            description: "Clean your email list periodically by removing inactive subscribers and fixing or removing invalid email addresses to improve deliverability."
          }
        ].map((practice, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full mt-1">
              <svg className="w-5 h-5 text-[#000e54]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{practice.title}</h4>
              <p className="text-gray-800 text-lg">{practice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* working of emailmarkeing */}
<div id="emailmarketing-working" className="  rounded-lg  max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">The Email Marketing Process</h1>
        <p className="text-xl text-gray-800 max-w-3xl mx-auto">
          A comprehensive guide to planning, executing, and optimizing email marketing campaigns for maximum engagement and ROI.
        </p>
      </div>
      <div className="mb-16">
        
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-blue-50 p-4 rounded-full">
                {step.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-800 text-lg mb-4">{step.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {step.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-gray-800">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:flex justify-center">
                  <ChevronRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats section */}
      <div className="mb-16">
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Performance Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-gray-800 text-xl mb-2">{stat.label}</h3>
              <p className="text-[#000e54] text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-gray-800 text-lg">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best practices */}
      <div>
        <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">Email Marketing Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <Target className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Segmentation</h3>
            </div>
            <p className="text-gray-800 text-lg">Divide your email list into targeted segments to deliver more relevant content and increase engagement rates.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <Mail className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">Personalization</h3>
            </div>
            <p className="text-gray-800 text-lg">Use recipient data to personalize subject lines, content, and offers to improve open and conversion rates.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-full">
                <PieChart className="w-6 h-6 text-[#000e54]" />
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">A/B Testing</h3>
            </div>
            <p className="text-gray-800 text-lg">Regularly test different elements of your emails to optimize performance and understand what resonates with your audience.</p>
          </div>
        </div>
      </div>
    </div>



 {/* Benefits of email marketing Section */}
 <div className="bg-gradient-to-br from-white to-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <svg className="w-16 h-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="25" width="80" height="50" rx="5" fill="#000e54" />
              <path d="M10 30L50 55L90 30" stroke="white" strokeWidth="4" fill="none" />
              <path d="M17 40H40" stroke="white" strokeWidth="3" fill="none" />
              <path d="M17 50H35" stroke="white" strokeWidth="3" fill="none" />
              <circle cx="70" cy="45" r="10" fill="white" opacity="0.3" />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Unlock the Power of Email Marketing</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Discover why email marketing remains the most effective digital marketing channel with the highest ROI and engagement rates.
          </p>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#000e54]">{stat.value}</p>
              <p className="text-gray-800 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-md sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Benefits</h3>
              <div className="space-y-3">
                {Object.keys(categories).map((key) => (
                  <button
                    key={key}
                    className={`flex items-center gap-3 w-full p-3 rounded-xl text-lg border transition-all duration-300 
                      ${activeCategory === key ? categories[key].activeColor : categories[key].color} 
                      ${categories[key].hoverColor}`}
                    onClick={() => setActiveCategory(key)}
                  >
                    {categories[key].icon}
                    <span className={`font-medium ${categories[key].textColor}`}>
                      {categories[key].title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Benefit details */}
          <div className="lg:w-3/4">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-8">
                {categories[activeCategory].icon}
                <h2 className="text-xl font-semibold text-gray-800">{categories[activeCategory].title}</h2>
              </div>
              
              <div className="space-y-8">
                {categories[activeCategory].benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center text-xl justify-center ${categories[activeCategory].activeColor}`}>
                      {React.cloneElement(benefit.icon, { className: `h-6 w-6 ${categories[activeCategory].textColor}` })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                      <p className="text-gray-800 text-lg">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Custom graphic representation */}
              <div className="mt-12">
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 p-4">
                  {activeCategory === 'roi' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* ROI comparison chart */}
                      <rect x="50" y="140" width="50" height="40" fill="#4F46E5" />
                      <rect x="120" y="100" width="50" height="80" fill="#818CF8" />
                      <rect x="190" y="120" width="50" height="60" fill="#A5B4FC" />
                      <rect x="260" y="60" width="50" height="120" fill="#4F46E5" />
                      
                      <text x="75" y="170" textAnchor="middle" fill="white" fontSize="12">SEO</text>
                      <text x="145" y="140" textAnchor="middle" fill="white" fontSize="12">PPC</text>
                      <text x="215" y="150" textAnchor="middle" fill="white" fontSize="12">Social</text>
                      <text x="285" y="120" textAnchor="middle" fill="white" fontSize="12">Email</text>
                      
                      <text x="75" y="90" textAnchor="middle" fill="#4F46E5" fontSize="12">5.4x</text>
                      <text x="145" y="90" textAnchor="middle" fill="#4F46E5" fontSize="12">10.6x</text>
                      <text x="215" y="110" textAnchor="middle" fill="#4F46E5" fontSize="12">8.2x</text>
                      <text x="285" y="50" textAnchor="middle" fill="#4F46E5" fontSize="12">42x</text>
                      
                      <line x1="50" y1="180" x2="350" y2="180" stroke="#6B7280" strokeWidth="2" />
                      <text x="200" y="195" textAnchor="middle" fill="#4B5563" fontSize="12">ROI Comparison by Marketing Channel</text>
                    </svg>
                  )}
                  
                  {activeCategory === 'targeting' && (
               <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
               {/* Targeting visualization */}
               <circle cx="200" cy="100" r="80" fill="#FFEDD5" stroke="#FED7AA" strokeWidth="2" />
               <circle cx="200" cy="100" r="60" fill="#FEE2E2" stroke="#FECACA" strokeWidth="2" />
               <circle cx="200" cy="100" r="40" fill="#FED7AA" stroke="#FDBA74" strokeWidth="2" />
               <circle cx="200" cy="100" r="20" fill="#FDBA74" stroke="#F97316" strokeWidth="2" />
               
               <text x="200" y="100" textAnchor="middle" fill="#F97316" fontSize="12" fontWeight="bold">Target</text>
               <text x="140" y="60" fill="#FB923C" fontSize="10">Demographics</text>
               <text x="260" y="80" fill="#FB923C" fontSize="10">Behavior</text>
               <text x="150" y="140" fill="#FB923C" fontSize="10">Interests</text>
               <text x="250" y="120" fill="#FB923C" fontSize="10">Purchase History</text>
           </svg>
                  )}
                  
                  {activeCategory === 'scalability' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Scalability graph */}
                      <path d="M50,180 Q125,80 200,140 T350,40" fill="none" stroke="#7C3AED" strokeWidth="3" />
                      
                      <circle cx="50" cy="180" r="5" fill="#7C3AED" />
                      <circle cx="125" cy="80" r="5" fill="#7C3AED" />
                      <circle cx="200" cy="140" r="5" fill="#7C3AED" />
                      <circle cx="275" cy="80" r="5" fill="#7C3AED" />
                      <circle cx="350" cy="40" r="5" fill="#7C3AED" />
                      
                      <line x1="50" y1="180" x2="350" y2="180" stroke="#6B7280" strokeWidth="1" />
                      <line x1="50" y1="40" x2="50" y2="180" stroke="#6B7280" strokeWidth="1" />
                      
                      <text x="200" y="195" textAnchor="middle" fill="#4B5563" fontSize="12">Growth Over Time with Email Automation</text>
                    </svg>
                  )}
                  
                  {activeCategory === 'relationship' && (
                    <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                      {/* Customer relationship cycle */}
                      <circle cx="200" cy="100" r="70" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
                      
                      <circle cx="200" cy="30" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="270" cy="100" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="200" cy="170" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      <circle cx="130" cy="100" r="25" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                      
                      <text x="200" y="35" textAnchor="middle" fill="#B91C1C" fontSize="10">Awareness</text>
                      <text x="270" y="105" textAnchor="middle" fill="#B91C1C" fontSize="10">Engagement</text>
                      <text x="200" y="175" textAnchor="middle" fill="#B91C1C" fontSize="10">Loyalty</text>
                      <text x="130" y="105" textAnchor="middle" fill="#B91C1C" fontSize="10">Conversion</text>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success stories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#000e54]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.company}</h3>
                <p className="text-[#000e54] text-lg font-semibold mb-2">{story.result}</p>
                <p className="text-gray-800 text-lg">{story.strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

{/* features of gps fleet tracking */}


{/* how your data is protected */}


{/* methodology */}


{/* how to choose the service */}


{/* alternative */}



{/* related articles */}
    <div id="email-articles">
      <Article
        title="Related Articles" 
        items={articles1} 
        buttonText="View Post" 
        buttonColor="bg-[#ff8633]" 
      />
      </div>

      {/* faq */}
      <div id="email-faq" className="">
        <FAQ faqs={ emailFAQs} />
      </div>
    </>
  );
};

export default EmailMarketingContent;
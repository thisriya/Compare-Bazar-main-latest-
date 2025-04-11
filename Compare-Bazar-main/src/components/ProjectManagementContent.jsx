import React, { useState } from 'react';
import FAQ from './FAQ';
import Article from './ArticleLayoutCommon';
import Feedback from './Feedback';
import busimage from '/images/bg2.webp';
import { BookOpen, Clock, PieChart, ArrowRight, Code, CheckCircle, RefreshCw, GitBranch, BarChart4 } from 'lucide-react'; 

const ProjectManagementContent = () => {
  // faq
  const projectManagementFAQs = [
    {
      question: "How does your project management software improve team productivity?",
      answer: [
        "Centralized task management with real-time updates",
        "Automated workflows to reduce manual processes",
        "Collaboration tools (comments, file sharing, @mentions)",
        "Time tracking and deadline reminders",
        "Integration with popular tools (Slack, Google Drive, etc.)"
      ]
    },
    {
      question: "What key features does your project management tool offer?",
      answer: [
        "Task assignment and progress tracking",
        "Kanban boards, Gantt charts, and calendar views",
        "Customizable dashboards and reporting",
        "Resource allocation and workload management",
        "Mobile access and offline capabilities"
      ]
    },
    {
      question: "Can your software handle Agile and Waterfall methodologies?",
      answer: "Yes, our tool supports both Agile (scrum boards, sprints, burndown charts) and Waterfall (phase-based planning, dependencies) methodologies. You can customize workflows to match your team's preferred approach."
    },
    {
      question: "How does your system handle project documentation?",
      answer: [
        "Features include:",
        "Centralized document storage with version control",
        "Real-time collaborative editing",
        "Templates for project plans, meeting notes, and reports",
        "Secure access permissions for sensitive files",
        "Integration with cloud storage (Google Drive, Dropbox, etc.)"
      ]
    },
    {
      question: "What reporting and analytics capabilities are available?",
      answer: "Our software provides customizable reports on project progress, team performance, budget tracking, and milestone completion. Export data to PDF/Excel or visualize trends with interactive dashboards."
    },
    {
      question: "How secure is project data in your system?",
      answer: [
        "Enterprise-grade security measures:",
        "SOC 2 Type II and GDPR compliance",
        "Encryption for data at rest and in transit",
        "Two-factor authentication (2FA)",
        "Role-based access controls",
        "Regular security audits and backups"
      ]
    },
    {
      question: "Can your tool integrate with our existing software stack?",
      answer: "Yes, we offer native integrations with CRM (Salesforce), communication (Slack, Microsoft Teams), development (GitHub, Jira), and accounting tools (QuickBooks). Our API supports custom integrations."
    },
    {
      question: "How does your pricing model work?",
      answer: "We offer tiered pricing based on team size and features. Options include a free plan for small teams, premium plans with advanced reporting, and enterprise solutions with custom configurations."
    },
    {
      question: "What support and training do you provide?",
      answer: [
        "Support options:",
        "24/5 live chat and email support",
        "Onboarding sessions and video tutorials",
        "Dedicated account manager for enterprise plans",
        "Community forum and knowledge base"
      ]
    },
    {
      question: "How does your software handle remote or distributed teams?",
      answer: [
        "Features designed for remote work:",
        "Time zone-aware scheduling",
        "Async communication tools (comments, threaded discussions)",
        "Mobile app for on-the-go updates",
        "Video call integrations (Zoom, Google Meet)",
        "Offline access with sync capabilities"
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






    return (
        <>
{/* introduction */}
<section id="intro-project" className="py-12 ">
  <div className="max-w-6xl mx-auto px-4">
    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
      {/* Left column - Text content */}
      <div className="mb-10 lg:mb-0">
        <h2 className="text-4xl font-semibold text-gray-900 mb-6">
          Introduction to Project Management Software
        </h2>
        
        <p className="text-lg text-gray-800 mb-6">
          Modern project management software helps teams plan, organize, and track work efficiently. 
          This guide covers the essential features, benefits, and selection criteria for choosing 
          the right solution for your business needs.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#000e54] mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Why PM Software is Essential Today
          </h3>
          <p className="text-gray-800 text-lg">
            In our remote-first world, project management tools bridge the gap between distributed teams, 
            providing real-time visibility, centralized communication, and automated workflows that keep 
            projects on track regardless of location.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-[#000e54] rounded-md p-2">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="ml-3">
              <h4 className="text-lg font-semibold text-gray-800">Productivity Boost</h4>
              <p className="mt-1 text-gray-800 text-lg">
                Teams using PM software complete projects 20% faster on average
              </p>
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Right column - Image */}
      <div className="relative">
        <img 
          src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/ca/wp-content/uploads/2023/05/best-project-management-software-ca.jpg"
          alt="Team collaborating on project management software" 
          className="rounded-lg shadow-xl w-full h-auto object-cover"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">27%</h4>
              <p className="text-sm text-gray-600">Higher on-time project completion rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">30%</h4>
              <p className="text-sm text-gray-600">Reduction in miscommunication</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">22%</h4>
              <p className="text-sm text-gray-600">Increase in team collaboration</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <h4 className="font-semibold text-gray-900">$5.87</h4>
              <p className="text-sm text-gray-600">ROI for every $1 spent on PM tools</p>
            </div>
        </div>
  </div>
</section>




{/* what is project management software system */}
<div id="what-is-projectmanagementsoftware" className="rounded-xl  max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-semibold text-gray-900 flex items-center">
          <PieChart className="mr-3 text-[#000e54]" />
          Project Management Software
        </h1>
        <BarChart4 className="text-[#000e54]" size={32} />
      </div>

      {/* Definition Section */}
      <div className="bg-white p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <BookOpen className="mr-2 text-[#000e54]" />
          Definition & Core Functionality
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-800 text-lg mb-4">
              Project management software is a specialized application designed to help teams plan, organize, execute, and monitor projects efficiently. These tools serve as a central hub for project-related information, collaboration, and workflow management.
            </p>
            <p className="text-gray-800 text-lg">
              Modern project management solutions enable teams to break down complex initiatives into manageable tasks, assign responsibilities, track progress, and ensure timely completion with optimal resource utilization.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-xl text-[#000e54] mb-3">Core Functionality</h3>
            <ul className="space-y-3">
              {[
                "Task management and assignment",
                "Scheduling and timeline visualization",
                "Resource allocation and management",
                "Document sharing and collaboration",
                "Progress tracking and reporting",
                "Team communication tools",
                "Budget tracking and financial management",
                "Risk assessment and mitigation"
              ].map((feature, index) => (
                <li key={index} className="flex items-start text-lg">
                  <CheckCircle size={18} className="text-[#000e54] mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-800 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mt-6">
          <h3 className="font-semibold text-xl text-[#000e54] mb-2">Business Impact</h3>
          <p className="text-gray-800 text-lg">
            Effective project management software can increase team productivity by 25%, improve project success rates, reduce overhead costs, and enhance stakeholder satisfaction through improved visibility and communication.
          </p>
        </div>
      </div>

      {/* Evolution Section */}
      <div className="p-6 rounded-xl mb-8">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 flex items-center">
          <Clock className="mr-2 text-[#000e54]" />
          Evolution of Project Management Tools
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute left-6 top-6 w-1 h-full bg-indigo-200"></div>
          
          <div className="space-y-10 relative">
            {[
              {
                era: "1980s-1990s: Early Digital Era",
                icon: <Code size={24} className="text-[#000e54]" />,
                description: "Project management began with simple desktop applications, spreadsheets, and basic scheduling tools. Microsoft Excel and early versions of Microsoft Project dominated this space, offering rudimentary planning capabilities focused primarily on timeline management.",
                features: ["Manual data entry", "Basic Gantt charts", "Single-user focused", "Limited collaboration"]
              },
              {
                era: "2000s: Web-Based Solutions",
                icon: <BarChart4 size={24} className="text-[#000e54]" />,
                description: "The introduction of web-based tools revolutionized project management by enabling remote collaboration. Solutions like Basecamp pioneered cloud-based project management, making it possible for distributed teams to work together more effectively.",
                features: ["Multi-user access", "Real-time updates", "Document sharing", "Basic reporting"]
              },
              {
                era: "2010s: Specialized & Integrated Tools",
                icon: <GitBranch size={24} className="text-[#000e54]" />,
                description: "This decade saw the rise of specialized tools catering to different methodologies and industries. Jira became prominent for software development, while tools like Asana and Trello introduced visual approaches to task management with boards and cards.",
                features: ["Methodology-specific features", "Visual workflows", "Advanced reporting", "Open APIs for integration"]
              },
              {
                era: "2020s: AI-Enhanced Solutions",
                icon: <RefreshCw size={24} className="text-[#000e54]" />,
                description: "Modern project management software incorporates artificial intelligence for predictive analytics, automated task assignment, and intelligent resource allocation. Tools now offer comprehensive ecosystems with advanced features for complex project management needs.",
                features: ["AI-powered insights", "Predictive analytics", "Automation capabilities", "Cross-platform integration", "Advanced visualization"]
              }
            ].map((period, index) => (
              <div key={index} className="flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-3 md:mb-0">
                  <div className="flex items-center">
                    <div className="hidden md:flex h-12 w-12 rounded-full bg-blue-100 items-center justify-center mr-4 border-4 border-white z-10">
                      {period.icon}
                    </div>
                    <h3 className="font-semibold text-[#000e54] text-xl">{period.era}</h3>
                  </div>
                </div>
                <div className="md:w-2/3 bg-gray-50 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 text-lg mb-3">{period.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {period.features.map((feature, i) => (
                      <span key={i} className="bg-blue-100 text-[#000e54] px-2 py-1 rounded-md text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approaches Section */}
      <div className="px-4 rounded-xl  mb-6">
        <h2 className="text-4xl font-semibold text-gray-900 mb-4 flex items-center">
          <GitBranch className="mr-2 text-[#000e54]" />
          Project Management Approaches
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Waterfall",
              description: "A linear, sequential approach where each phase must be completed before the next begins. Progress flows in one direction, like a waterfall.",
              bestFor: "Projects with well-defined requirements and deliverables that are unlikely to change.",
              tools: ["Microsoft Project", "Smartsheet", "GanttPRO"],
              characteristics: ["Sequential phases", "Detailed documentation", "Structured approvals", "Predictable timeline"],
              color: "blue"
            },
            {
              name: "Agile",
              description: "An iterative approach focused on continuous improvement and flexibility. Work is completed in short cycles called sprints.",
              bestFor: "Projects with evolving requirements and where quick adaptation to change is important.",
              tools: ["Jira", "Trello", "Monday.com", "Azure DevOps"],
              characteristics: ["Iterative cycles", "Customer collaboration", "Responding to change", "Self-organizing teams"],
              color: "green"
            },
            {
              name: "Scrum",
              description: "A framework within Agile that emphasizes small cross-functional teams working in short sprints with daily stand-ups.",
              bestFor: "Complex product development, particularly in software.",
              tools: ["Jira", "ClickUp", "Targetprocess", "Scrumwise"],
              characteristics: ["Sprints", "Daily stand-ups", "Sprint reviews", "Retrospectives"],
              color: "indigo"
            },
            {
              name: "Kanban",
              description: "A visual method focused on continuous delivery while preventing team members from being overloaded with work.",
              bestFor: "Projects with continuous workflows and frequent task reprioritization.",
              tools: ["Trello", "KanbanFlow", "Asana", "Kanbanize"],
              characteristics: ["Visual workflow", "WIP limits", "Continuous flow", "Just-in-time delivery"],
              color: "purple"
            },
            {
              name: "Lean",
              description: "An approach focused on maximizing value while minimizing waste in the project lifecycle.",
              bestFor: "Organizations looking to optimize resources and improve efficiency.",
              tools: ["LeanKit", "Kanbanize", "Targetprocess"],
              characteristics: ["Waste elimination", "Value stream mapping", "Continuous improvement", "Pull systems"],
              color: "amber"
            },
            {
              name: "Hybrid",
              description: "Combines elements from different methodologies, typically using Waterfall for planning and Agile for execution.",
              bestFor: "Complex projects that require structure but benefit from flexibility in implementation.",
              tools: ["Wrike", "Zoho Projects", "Clarizen", "ProjectManager"],
              characteristics: ["Structured planning", "Flexible execution", "Adaptable framework", "Combined practices"],
              color: "rose"
            }
          ].map((approach, index) => {
            const colors = {
              blue: "bg-blue-50 border-blue-200 text-blue-800",
              green: "bg-green-50 border-green-200 text-green-800",
              indigo: "bg-indigo-50 border-indigo-200 text-indigo-800",
              purple: "bg-purple-50 border-purple-200 text-purple-800",
              amber: "bg-amber-50 border-amber-200 text-amber-800",
              rose: "bg-rose-50 border-rose-200 text-rose-800"
            };
            
            return (
              <div key={index} className={`border rounded-lg shadow-sm p-5 ${colors[approach.color]} hover:shadow-md transition-shadow`}>
                <h3 className="text-xl font-semibold mb-3">{approach.name}</h3>
                <p className="mb-4 text-gray-800 text-lg">{approach.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-xl mb-1">Characteristics:</h4>
                  <ul className="space-y-1">
                    {approach.characteristics.map((char, i) => (
                      <li key={i} className="flex items-center text-lg">
                        <ArrowRight size={12} className="mr-2" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-xl mb-1">Best For:</h4>
                  <p className="text-lg">{approach.bestFor}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-xl mb-1">Popular Tools:</h4>
                  <div className="flex flex-wrap gap-1">
                    {approach.tools.map((tool, i) => (
                      <span key={i} className="bg-white bg-opacity-50 px-2 py-1 rounded text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg mt-6">
          <h3 className="font-semibold text-xl text-[#000e54] mb-2">Choosing the Right Approach</h3>
          <p className="text-gray-800 text-lg">
            The best project management approach depends on your project's nature, team structure, and organizational goals. Many successful teams use hybrid approaches, taking elements from different methodologies to create a customized framework that addresses their specific needs.
          </p>
        </div>
      </div>
</div>


{/* how does call center works */}



{/* Advanced Call Center Features Section */}


{/* benefits */}


{/* choosing right ccm */}


 {/* alternatives */}


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
        <FAQ faqs={ projectManagementFAQs} />
      </div>

      {/* feedback */}
      <Feedback 
        title="What Our Customers Say"
        testimonials={homeTestimonials}
      />
        </>
    );
};

export default ProjectManagementContent;
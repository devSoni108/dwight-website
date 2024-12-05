'use client'

import { useState } from 'react'
import { Briefcase, BarChart, ShoppingBag, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

export default function Solutions() {
  const [expandedSection, setExpandedSection] = useState(null)

  const IndustrySection = ({ icon: Icon, title, description, agents }) => {
    const isExpanded = expandedSection === title
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setExpandedSection(isExpanded ? null : title)}>
          <div className="flex items-center">
            <Icon className="w-8 h-8 mr-4 text-[#005F73]" />
            <h3 className="font-['American_Typewriter'] font-normal text-2xl text-[#370300]">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="w-6 h-6 text-[#370300]" /> : <ChevronDown className="w-6 h-6 text-[#370300]" />}
        </div>
        {isExpanded && (
          <div className="mt-4">
            <p className="text-[#370300] mb-4">{description}</p>
            <h4 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#005F73]">Relevant Agents:</h4>
            <ul className="list-disc pl-5">
              {agents.map((agent, index) => (
                <li key={index} className="text-[#370300] mb-2">{agent}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Tailored AI Agents for Any Industry
            </h1>
            <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Whether in advertising, finance, retail, or corporate environments, Dwight Agents are designed to meet the specific needs of your industry. Each Agent is customised to support your team&apos;s goals, processes, and client relationships, making it a valuable asset across all sectors.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <IndustrySection 
              icon={Briefcase}
              title="Built for Agencies"
              description="Dwight's Agents are specially designed to support advertising and creative teams. From managing creative workflows to tracking client feedback and coordinating production timelines, each Agent is equipped to handle the fast-paced demands of agency life."
              agents={[
                "Main Operations Agent: Keeps teams aligned across all projects, ensuring seamless project handovers and team communication.",
                "Creative Ops Specialist Agent: Supports creative teams with asset organisation, deadline tracking, and brand alignment.",
                "Client Service Agent: Manages client relationships and provides insights based on client interactions and feedback."
              ]}
            />

            <IndustrySection 
              icon={BarChart}
              title="Empowering Financial Precision"
              description="In finance and corporate sectors, Dwight Agents are trained to support teams with critical processes, from budget management to reporting and compliance. Each Agent is tailored to understand and support your financial operations."
              agents={[
                "Finance & Budget Analyst Agent: Tracks financial metrics, prepares reports, and monitors budgets.",
                "Operations & Workflow Optimiser Agent: Coordinates tasks and milestones to ensure efficient project flow.",
                "Data Analyst & Reporting Agent: Provides insights from data, helping track performance and identify trends."
              ]}
            />

            <IndustrySection 
              icon={ShoppingBag}
              title="Optimising Retail Operations"
              description="From managing customer relationships to tracking sales trends, Dwight Agents are designed to support the dynamic needs of retail and e-commerce businesses, helping you streamline workflows and enhance customer experiences."
              agents={[
                "Sales & CRM Agent: Supports sales teams by managing customer relationships, tracking pipelines, and identifying upsell opportunities.",
                "Operations & Workflow Optimiser Agent: Improves operational efficiency by managing inventory, scheduling, and resource allocation.",
                "Data Analyst & Reporting Agent: Offers data-driven insights to understand customer behaviour and optimise inventory management."
              ]}
            />

            <IndustrySection 
              icon={Globe}
              title="Adaptable to Any Industry"
              description="Dwight Agents are designed to integrate with any business function, supporting HR, training, sales, or operations teams with insights and tools tailored to your organisation's specific needs."
              agents={[
                "Executive Assistant Agent: Provides executive support by managing schedules, organising tasks, and preparing documents.",
                "HR & Talent Management Agent: Supports recruitment, employee engagement, and development tracking.",
                "Training & Development Facilitator Agent: Coordinates training sessions, tracks progress, and manages resources for employee development."
              ]}
            />
          </div>
        </section>

        <section className="py-12 bg-[#005F73]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#FFCB1F]">
              Why Dwight Agents Work Across Industries
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Each Dwight Agent is built on a foundation of customisable support, making it capable of adapting to your industry&apos;s specific requirements. From structured finance environments to dynamic retail operations, Dwight Agents bring value as a dependable, knowledgeable partner.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Industry-Specific Adaptation</h3>
                <p className="text-[#370300]">Agents are trained to fit your industry&apos;s demands, processes, and goals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Scalable Solutions</h3>
                <p className="text-[#370300]">Dwight&apos;s customisable framework allows Agents to scale with your business.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Role Flexibility</h3>
                <p className="text-[#370300]">From client service to HR, Dwight Agents can be tailored to any role within your organisation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FFCB1F]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-3xl font-['American_Typewriter'] italic text-[#370300]">
            &quot;Dwight adapts to your industry&apos;s needs, supporting your team like one of its own.&quot;
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
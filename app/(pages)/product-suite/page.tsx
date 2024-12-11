'use client'

import Link from 'next/link'
import { LucideIcon, Briefcase, Users, Brain, Zap, Rocket, BarChart, BookOpen } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

type AgentCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
}

type BusinessAgentCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AgentCard = ({ icon: Icon, title, description }: AgentCardProps) => (
  <div className="bg-[#005F73] p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 mb-4 text-[#FFCB1F]" />
    <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#FFCB1F]">{title}</h3>
    <p className="text-sm text-white">{description}</p>
  </div>
)

const BusinessAgentCard = ({ icon: Icon, title, description }: BusinessAgentCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 mb-4 text-[#370300]" />
    <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#370300]">{title}</h3>
    <p className="text-sm text-[#370300]">{description}</p>
  </div>
)

export default function ProductSuite() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Custom AI Agents, Tailored to Your Business
            </h1>
            <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Each Dwight Agent is designed to fit seamlessly into your operations, trained on your specific goals, processes, and team roles. From creative workflows to client relationships, Dwight Agents support your team exactly where they need it most.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              Built for Agencies
            </h2>
            <p className="text-center mb-8 max-w-3xl mx-auto text-[#370300]">
              Dwight&apos;s advertising-specific Agents understand the unique demands of agency life, from creative project management to maintaining client relationships.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AgentCard 
                icon={Briefcase}
                title="Main Operations Agent"
                description="A central hub for all agency operations, keeping teams aligned on projects, timelines, and client expectations."
              />
              <AgentCard 
                icon={Brain}
                title="Creative Ops Specialist Agent"
                description="Supports Creative Directors, designers, and art directors by organising assets, tracking deadlines, and aligning with brand guidelines."
              />
              <AgentCard 
                icon={Users}
                title="Client Service Agent"
                description="Tracks client feedback, manages interactions, and ensures smooth client-agency communication."
              />
              <AgentCard 
                icon={Zap}
                title="Traffic & Production Controller Agent"
                description="Coordinates the movement of creative and production assets, managing timelines and reducing production bottlenecks."
              />
              <AgentCard 
                icon={Rocket}
                title="Strategy Alignment Agent"
                description="Supports strategists with goal tracking, market insights, and campaign recommendations."
              />
              <AgentCard 
                icon={Briefcase}
                title="Brand Guardian Agent"
                description="Ensures all content aligns with brand guidelines, providing consistency across client work."
              />
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="inline-block bg-[#005F73] text-[#FFCB1F] hover:bg-[#005F73]/90 px-6 py-3 rounded font-bold">
                Learn More About Advertising-Specific Agents
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#6B705C]">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#FFCB1F]">
              AI Agents for Any Business
            </h2>
            <p className="text-center mb-8 max-w-3xl mx-auto text-white">
              From HR to finance, Dwight&apos;s Agents bring custom-trained support to any business function, providing knowledge and insight where your team needs it most.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BusinessAgentCard 
                icon={Briefcase}
                title="Executive Assistant Agent"
                description="Provides schedule management, document preparation, and task tracking to support busy executives."
              />
              <BusinessAgentCard 
                icon={Users}
                title="HR & Talent Management Agent"
                description="Organises recruitment processes, tracks employee development, and manages engagement metrics."
              />
              <BusinessAgentCard 
                icon={BarChart}
                title="Finance & Budget Analyst Agent"
                description="Tracks financial metrics, prepares budget reports, and monitors expenses."
              />
              <BusinessAgentCard 
                icon={Users}
                title="Sales & CRM Agent"
                description="Supports sales teams by managing customer relationships, tracking sales pipelines, and identifying upsell opportunities."
              />
              <BusinessAgentCard 
                icon={Zap}
                title="Operations & Workflow Optimiser Agent"
                description="Tracks tasks, milestones, and resources to improve overall operational efficiency."
              />
              <BusinessAgentCard 
                icon={BarChart}
                title="Data Analyst & Reporting Agent"
                description="Provides insights from data, tracking key performance indicators and spotting trends."
              />
              <BusinessAgentCard 
                icon={BookOpen}
                title="Training & Development Facilitator Agent"
                description="Coordinates training sessions, tracks employee progress, and provides development resources."
              />
            </div>
            <div className="text-center mt-8">
              <Link href="/contact" className="inline-block bg-[#FFCB1F] text-[#370300] hover:bg-[#FFCB1F]/90 px-6 py-3 rounded font-bold">
                Explore All Business Agents
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FFCB1F]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#370300]">
              Why Choose Custom AI Agents?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Dwight Agents are more than AI tools—they&apos;re trained specifically to know your team&apos;s needs, processes, and goals, offering true value by acting as knowledgeable partners in your day-to-day operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#005F73] p-6 rounded-lg shadow-md text-white">
                <Brain className="w-12 h-12 mb-4 text-[#FFCB1F] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#FFCB1F]">Custom Knowledge</h3>
                <p>Agents trained on your unique datasets provide unparalleled insight and support.</p>
              </div>
              <div className="bg-[#E07A5F] p-6 rounded-lg shadow-md text-white">
                <Zap className="w-12 h-12 mb-4 text-[#370300] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#370300]">Flexible Adaptation</h3>
                <p>Each Agent&apos;s role is adaptable to your team&apos;s needs, making it a dynamic asset as your business evolves.</p>
              </div>
              <div className="bg-[#B8A9C9] p-6 rounded-lg shadow-md text-white">
                <Users className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Comprehensive Role Support</h3>
                <p>From executive support to client services, Dwight Agents enhance productivity across all business functions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

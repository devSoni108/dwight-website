'use client'

import Link from 'next/link'
import { Briefcase, Users, Brain, Zap, Rocket, LucideIcon } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

type AgentCardProps = {
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
              <Link href="/advertising-agents" className="inline-block bg-[#005F73] text-[#FFCB1F] hover:bg-[#005F73]/90 px-6 py-3 rounded font-bold">
                Learn More About Advertising-Specific Agents
              </Link>
            </div>
          </div>
        </section>

        {/* Other sections */}
        
      </main>

      <Footer />
    </div>
  )
}

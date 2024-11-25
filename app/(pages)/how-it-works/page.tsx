'use client'

import { Handshake, Cog, Zap, RefreshCw, Target, Sliders, PuzzleIcon as PuzzlePiece } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'

export default function HowItWorks() {

  const ProcessStep = ({ icon: Icon, title, description, outcome }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Icon className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
      <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#370300] text-center">{title}</h3>
      <p className="text-sm text-[#370300] mb-4">{description}</p>
      <div className="bg-[#FFCB1F] p-4 rounded">
        <p className="text-sm font-bold text-[#370300]">Intended Outcome: {outcome}</p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />

      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Creating Your Custom AI Agent
            </h1>
            <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Every Dwight Agent is designed to know your business inside out. From your first consultation through to ongoing support, our process ensures each Agent is tailored to your team&apos;s specific needs and goals.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#C4C4C4]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep 
                icon={Handshake}
                title="Understanding Your Business"
                description="Our journey begins with an in-depth consultation to capture your business's goals, client interactions, processes, and team structure. This foundational knowledge guides every aspect of your custom Agent's development."
                outcome="A clear picture of your business needs, ensuring your Dwight Agent is built with precision."
              />
              <ProcessStep 
                icon={Cog}
                title="Training Your Agent"
                description="Each Agent is trained on datasets that reflect your business—whether it's your specific processes, client relationships, or team roles. This training gives Dwight Agents a unique ability to operate with the knowledge and understanding of an experienced team member."
                outcome="An Agent that understands your business nuances and can support your team seamlessly."
              />
              <ProcessStep 
                icon={Zap}
                title="Integrating with Your Team"
                description="Once trained, your Dwight Agent is deployed and integrated into your daily workflows. Our team provides onboarding to ensure a smooth transition, guiding users on how to interact with the Agent effectively."
                outcome="A fully integrated Agent that aligns with your teams daily tasks and goals."
              />
              <ProcessStep 
                icon={RefreshCw}
                title="Growing with Your Business"
                description="As your business grows, so can your Dwight Agent. We offer ongoing support and can adapt or enhance your Agent to integrate with new tools or accommodate changing needs, ensuring it remains a valuable part of your team."
                outcome="An adaptable Agent that evolves alongside your business."
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#005F73]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#FFCB1F]">
              Why This Process Matters
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Unlike off-the-shelf AI tools, Dwight Agents are custom-built from the ground up to align with your business&apos;s specific dynamics. This process guarantees an Agent that supports your team as if it were part of your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Target className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Tailored Fit</h3>
                <p className="text-[#370300]">Each Agent is unique, trained to match your business&apos;s needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Sliders className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Dynamic Adaptation</h3>
                <p className="text-[#370300]">Our process ensures your Agent can evolve with your business.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <PuzzlePiece className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Seamless Integration</h3>
                <p className="text-[#370300]">From day one, your Dwight Agent feels like part of the team.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#370300] text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="font-['American_Typewriter'] font-normal">© 2024 Dwight (Pty) Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
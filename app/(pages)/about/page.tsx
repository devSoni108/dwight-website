import Image from 'next/image'
import { Brain, Users, Rocket } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              About Dwight
            </h1>
            <p className="font-sans text-xl mb-8 max-w-2xl mx-auto text-[#370300]">
              Building custom AI Agents that seamlessly integrate with your business, empowering your team with knowledge, insight, and support specific to your operations.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              Our Story
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="mb-6 text-lg">
                Driven by a vision to create AI that&apos;s more than a tool, Dwight was inspired by the need for business-specific AI Agents—ones that know the nuances, workflows, and goals unique to each organisation.
              </p>
              <p className="mb-6 text-lg">
                Our vision is to bridge AI and business with solutions that truly know and support your team, helping you achieve goals with insight and precision.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              The Dwight Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#005F73] p-6 rounded-lg shadow-md text-white">
                <Brain className="w-12 h-12 mb-4 text-[#FFCB1F]" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#FFCB1F]">Customised Training</h3>
                <p>Each Dwight Agent is trained on your business&apos;s specific datasets—from goals and client interactions to processes and staff roles—ensuring it supports your team as if it were a long-standing member.</p>
              </div>
              <div className="bg-[#E07A5F] p-6 rounded-lg shadow-md text-white">
                <Users className="w-12 h-12 mb-4 text-[#370300]" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#370300]">Beyond Automation</h3>
                <p>Dwight Agents are more than task assistants. They become knowledgeable partners who can interact dynamically with your team, adapt to their needs, and grow alongside your business.</p>
              </div>
              <div className="bg-[#B8A9C9] p-6 rounded-lg shadow-md text-white">
                <Rocket className="w-12 h-12 mb-4 text-[#005F73]" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Future-Ready Flexibility</h3>
                <p>As your business evolves, Dwight Agents are ready to integrate with new tools, processes, and APIs, offering a solution that scales with your success.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#005F73]">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#FFCB1F]">
              Meet the Team Behind Dwight
            </h2>
            <p className="text-center mb-8 max-w-3xl mx-auto text-white">
              At Dwight, our team combines expertise in AI, client success, and operational strategy, ensuring each Agent is designed to serve your business with precision and flexibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Shamesh Padayachy", role: "Founder & Chief Agent Architect", description: "The visionary behind Dwight, Shamesh leads the design of custom AI Agents with a unique focus on aligning AI with real business needs." },
                { name: "Derryn de la Querra", role: "Business Development Director", description: "Derryn ensures that each client's specific goals and needs are deeply understood, connecting businesses to the right Dwight Agent." },
                { name: "Michelle Smuts", role: "Finance Director", description: "Michelle oversees financial strategy and advises on financial dataset integrations, supporting the financial applications of Dwight Agents." },
                { name: "Andrew Murton", role: "Content & Quality Specialist", description: "Andrew ensures each Agent is refined, clear, and effective, providing quality control for the content and interactions within our AI solutions." }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <Image
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#370300] text-center">{member.name}</h3>
                  <p className="font-bold mb-4 text-[#005F73] text-center">{member.role}</p>
                  <p className="text-sm text-[#370300]">{member.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 max-w-3xl mx-auto text-white">
              As Dwight grows, our support team will include roles for development and client support, ensuring a seamless integration and ongoing success for each client.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#FFCB1F]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#370300]">
              Why Choose Dwight?
            </h2>
            <div className="bg-[#6B705C] p-8 rounded-lg shadow-lg">
              <h3 className="font-['American_Typewriter'] font-normal text-2xl mb-4 text-[#FFCB1F]">
                Custom AI Solutions for Your Business
              </h3>
              <p className="text-xl mb-6 max-w-3xl mx-auto text-white">
                Choosing Dwight means choosing a custom AI solution that knows your business as well as your team does. Each Agent is trained to meet your specific goals, support your team&apos;s unique dynamics, and scale with your business&apos;s growth.
              </p>
            </div>
            <p className="text-3xl font-['American_Typewriter'] text-[#370300] mt-8">
            &quot;An AI Agent that truly knows your business—supporting your team like one of their own.&quot;
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

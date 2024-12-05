'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, Send, Brain, Users, Lightbulb, Rocket } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dwight_Main-Logo-rOqPTRP0K0PTbXNp3LBmbLptpPbTXs.svg"
              alt="Dwight"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Meet Dwight: The AI Agent That Knows Your Business
            </h1>
            <p className="font-sans text-xl mb-8 max-w-2xl mx-auto text-[#370300]">
              A bespoke AI solution trained on your unique business processes, client relationships, and goals. 
              Dwight becomes a seamless part of your team, delivering support exactly where you need it.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/product-suite"
                className="bg-[#005F73] text-[#FFCB1F] hover:bg-[#005F73]/90 font-sans font-bold px-6 py-3 rounded"
              >
                Learn More
              </Link>
              <Link 
                href="/contact"
                className="bg-[#005F73] text-[#FFCB1F] hover:bg-[#005F73]/90 font-sans font-bold px-6 py-3 rounded"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FFCB1F]">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              What Dwight Agents Bring to Your Business
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Customised Knowledge", description: "Agents are trained on your business's processes, aligning perfectly with your goals and team needs.", bg: "bg-[#005F73]", titleColor: "text-[#FFCB1F]", icon: Brain },
                { title: "Multi-Role Adaptability", description: "Agents take on versatile roles across teams, from project guidance to client relationship management.", bg: "bg-[#E07A5F]", titleColor: "text-[#370300]", icon: Users },
                { title: "Client Insight", description: "Understanding your client interactions and dynamics, Dwight offers real support for nuanced relationships.", bg: "bg-[#B8A9C9]", titleColor: "text-[#005F73]", icon: Lightbulb },
                { title: "Future-Ready Integration", description: "Agents can scale and adapt as you integrate new tools, ensuring seamless growth.", bg: "bg-[#6B705C]", titleColor: "text-[#FFCB1F]", icon: Rocket }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg shadow-md ${benefit.bg}`}
                >
                  <benefit.icon className={`w-12 h-12 mb-4 ${benefit.titleColor}`} />
                  <h3 className={`font-['American_Typewriter'] font-normal text-xl mb-4 ${benefit.titleColor}`}>
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-white">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#005F73] py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#FFCB1F]">
              Explore Our Custom AI Agents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-['American_Typewriter'] font-normal text-2xl mb-4 text-[#FFCB1F]">
                  Advertising-Specific Agents
                </h3>
                <ul className="list-disc list-inside font-sans text-white">
                  <li>Operations Agent</li>
                  <li>Creative Ops Specialist</li>
                  <li>Client Service Agent</li>
                </ul>
              </div>
              <div>
                <h3 className="font-['American_Typewriter'] font-normal text-2xl mb-4 text-[#FFCB1F]">
                  General Business Agents
                </h3>
                <ul className="list-disc list-inside font-sans text-white">
                  <li>Executive Assistant Agent</li>
                  <li>Finance & Budget Analyst Agent</li>
                  <li>Sales & CRM Agent</li>
                </ul>
              </div>
            </div>
            <Link 
              href="/product-suite"
              className="mt-8 inline-block bg-[#FFCB1F] text-[#370300] hover:bg-[#FFCB1F]/90 font-sans font-bold px-6 py-3 rounded"
            >
              Explore All Agents
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      {/* Chat Bot Interface */}
      
    </div>
  )
}

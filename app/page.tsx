'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, Send, Brain, Users, Lightbulb, Rocket } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#370300] text-[#FFCB1F]">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dwight_Menu-Logo-7rModLJ8v6SmgmlvAkASYgcjobPVx1.svg"
              alt="Dwight"
              width={100}
              height={40}
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/about" className="hover:underline font-['American_Typewriter'] font-normal">About</Link></li>
              <li><Link href="/product-suite" className="hover:underline font-['American_Typewriter'] font-normal">Product Suite</Link></li>
              <li><Link href="/how-it-works" className="hover:underline font-['American_Typewriter'] font-normal">How It Works</Link></li>
              <li><Link href="/solutions" className="hover:underline font-['American_Typewriter'] font-normal">Solutions</Link></li>
              <li><Link href="/meet-dwight" className="hover:underline font-['American_Typewriter'] font-normal">Meet Dwight</Link></li>
            </ul>
          </nav>
          <Link 
            href="/contact"
            className="hidden md:inline-flex bg-[#FFCB1F] text-[#370300] hover:bg-[#FFCB1F]/90 px-4 py-2 rounded"
          >
            Book a Demo
          </Link>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <nav className="px-4 pt-2 pb-4">
              <ul className="space-y-2">
                <li><Link href="/about" className="block hover:underline font-['American_Typewriter'] font-normal">About</Link></li>
                <li><Link href="/product-suite" className="block hover:underline font-['American_Typewriter'] font-normal">Product Suite</Link></li>
                <li><Link href="/how-it-works" className="block hover:underline font-['American_Typewriter'] font-normal">How It Works</Link></li>
                <li><Link href="/solutions" className="block hover:underline font-['American_Typewriter'] font-normal">Solutions</Link></li>
                <li><Link href="/meet-dwight" className="block hover:underline font-['American_Typewriter'] font-normal">Meet Dwight</Link></li>
              </ul>
              <Link 
                href="/contact"
                className="mt-4 block w-full bg-[#FFCB1F] text-[#370300] hover:bg-[#FFCB1F]/90 px-4 py-2 rounded text-center"
              >
                Book a Demo
              </Link>
            </nav>
          </div>
        )}
      </header>

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

      <footer className="bg-[#370300] text-white">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="font-['American_Typewriter'] font-normal">© 2024 Dwight (Pty) Ltd. All rights reserved.</p>
        </div>
      </footer>

      {/* Chat Bot Interface */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all ${chatOpen ? 'w-96' : 'w-24'}`}>
        <div className="bg-[#FFCB1F] rounded-full p-1 cursor-pointer mb-4 shadow-lg" onClick={() => setChatOpen(!chatOpen)}>
          <div className="border-2 border-[#370300] rounded-full overflow-hidden">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dwight_Bot-Glasses-Myn1zWr3aVxPS9DOM2JuJaUjcfSE7g.svg"
              alt="Dwight Chat"
              width={80}
              height={80}
              className="w-full h-full"
            />
          </div>
        </div>
        {chatOpen && (
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-4 bg-[#FFCB1F]">
              <h3 className="font-['American_Typewriter'] font-normal text-[#370300]">Chat with Dwight</h3>
            </div>
            <div className="h-96 p-4 bg-white overflow-y-auto">
              {/* Chat messages would go here */}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Type your message..." 
                  className="font-sans text-[#370300] flex-grow px-3 py-2 border rounded"
                />
                <button className="bg-[#005F73] text-[#FFCB1F] hover:bg-[#005F73]/90 px-4 py-2 rounded">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

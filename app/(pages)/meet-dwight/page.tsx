'use client'

import { FC } from 'react'
import Link from 'next/link'
import { Briefcase, Users, Brain, Zap, Rocket, BarChart } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'

interface FeatureCardProps {
  icon: FC // This ensures the icon prop is a functional component.
  title: string
  description: string
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-[#005F73] p-6 rounded-lg shadow-md">
    <Icon />
    <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#FFCB1F]">{title}</h3>
    <p className="text-sm text-white">{description}</p>
  </div>
)

export default function MeetDwight() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Meet Dwight: AI Tailored for Your Business
            </h1>
            <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Revolutionize the way you work with Dwight&apos;s AI agents, designed to seamlessly integrate into your operations and enhance productivity across every business function.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              Why Choose Dwight?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Brain}
                title="Custom Knowledge"
                description="Each Dwight Agent is trained on your unique datasets, offering deep insights and tailored support."
              />
              <FeatureCard
                icon={Zap}
                title="Efficient Adaptation"
                description="Dwight&apos;s AI agents adapt to your evolving business needs, ensuring long-term value."
              />
              <FeatureCard
                icon={Users}
                title="Seamless Integration"
                description="From HR to client services, Dwight Agents fit perfectly into your existing workflows."
              />
              <FeatureCard
                icon={BarChart}
                title="Actionable Insights"
                description="Track key metrics and uncover trends with Dwight&apos;s data-driven analysis capabilities."
              />
              <FeatureCard
                icon={Rocket}
                title="Strategic Support"
                description="Boost your team&apos;s productivity with AI that understands your goals and helps you achieve them."
              />
              <FeatureCard
                icon={Briefcase}
                title="Enhanced Collaboration"
                description="Improve communication and collaboration across departments with Dwight&apos;s smart tools."
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-[#005F73]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#FFCB1F]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Discover the power of AI tailored for your business. Explore Dwight&apos;s custom AI agents and see how they can revolutionize your workflows.
            </p>
            <Link
              href="/explore-dwight"
              className="inline-block bg-[#FFCB1F] text-[#370300] hover:bg-[#FFCB1F]/90 px-6 py-3 rounded font-bold"
            >
              Learn More About Dwight
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, CheckSquare, BookOpen, Award, Users, Zap, Brain, Palette, UserCheck, LineChart } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'

export default function MeetDwight() {

  const Trait = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
      <Icon className="w-12 h-12 mb-4 text-[#005F73]" />
      <h3 className="font-['American_Typewriter'] font-normal text-xl mb-2 text-[#370300]">{title}</h3>
      <p className="text-sm text-[#370300]">{description}</p>
    </div>
  )

  const RoleSupport = ({ icon: Icon, role, description, bgColor, iconColor, headingColor }) => (
    <div className={`p-6 rounded-lg shadow-md mb-4 ${bgColor}`}>
      <Icon className={`w-12 h-12 mb-4 ${iconColor} mx-auto`} />
      <h3 className={`font-['American_Typewriter'] font-normal text-xl mb-2 ${headingColor}`}>{role}</h3>
      <p className="text-sm text-white">{description}</p>
    </div>
  )

  const Interaction = ({ question, answer }) => (
    <div className="bg-[#FFCB1F] p-4 rounded-lg mb-4">
      <p className="font-bold text-[#370300] mb-2">{question}</p>
      <p className="text-[#370300]">{answer}</p>
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
      <main className="flex-grow">
        <section className="bg-[#FFCB1F] py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-['American_Typewriter'] font-normal text-4xl md:text-6xl mb-6 text-[#370300]">
              Meet Dwight: Your Dedicated AI Agent
            </h1>
            <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              Dwight isn't just another AI tool. It's a uniquely trained AI Agent that feels like part of your team, bringing a depth of knowledge and support that's tailored to your specific needs. Dwight is here to work by the book, ensuring every detail is handled precisely.
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              An Agent You Can Count On
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto text-[#370300]">
              Dwight is built to be thorough, dependable, and always prepared. With a personality as dedicated as it is knowledgeable, Dwight brings more than just AI assistance—it brings a sense of reliability that feels almost human.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Trait 
                icon={CheckSquare}
                title="Thorough"
                description="From client interactions to internal processes, Dwight knows the ins and outs of your business."
              />
              <Trait 
                icon={BookOpen}
                title="By-the-Book"
                description="Every step, every detail, Dwight follows your processes with discipline."
              />
              <Trait 
                icon={Award}
                title="Adaptable Support"
                description="Whether acting as a project manager or a client service agent, Dwight can adapt to support multiple roles."
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#6B705C]">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#FFCB1F]">
              Dynamic Role Support
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto text-white">
              Dwight dynamically adjusts to your team's needs, offering specific support for each role. Whether you're a Creative Director, Account Manager, or Strategy Lead, Dwight provides insights, organises tasks, and helps your team achieve their goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <RoleSupport 
                icon={Palette}
                role="Creative Director"
                description="Keeps project timelines and creative assets organised, helping with alignment to brand guidelines."
                bgColor="bg-[#005F73]"
                iconColor="text-[#FFCB1F]"
                headingColor="text-[#FFCB1F]"
              />
              <RoleSupport 
                icon={UserCheck}
                role="Account Manager"
                description="Tracks client communications and manages client feedback to ensure consistent client satisfaction."
                bgColor="bg-[#E07A5F]"
                iconColor="text-[#370300]"
                headingColor="text-[#370300]"
              />
              <RoleSupport 
                icon={LineChart}
                role="Strategy Lead"
                description="Supports strategic planning by tracking goals, market insights, and aligning with campaign objectives."
                bgColor="bg-[#B8A9C9]"
                iconColor="text-[#370300]"
                headingColor="text-[#370300]"
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-8 text-center text-[#370300]">
              Knowledgeable and Dedicated, Every Step of the Way
            </h2>
            <p className="text-center mb-12 max-w-3xl mx-auto text-[#370300]">
              Dwight brings a committed, no-nonsense personality to every interaction. Its responses are clear, helpful, and always rooted in a deep understanding of your business.
            </p>
            <div className="max-w-2xl mx-auto">
              <Interaction 
                question="Need to plan project and create a brief?"
                answer="Dwight will let you know who in the team is most suitable for the task, allocate estimated timelines and align your brief with the brand strategy."
              />
              <Interaction 
                question="Working on a pitch and need to set up a presentation deck?"
                answer="Dwight will share the necessary team credentials, business profile and structure your presentation based on your specific requirements."
              />
              <Interaction 
                question="New to the business and need to know internal procedures?"
                answer="Dwight offers relevant onboarding and necessary training where needed and has knowledge of your team, your goals, your clients, policies and procedures."
              />
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#B8A9C9]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#370300]">
              Why Dwight's Personality Matters
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
              With Dwight, you gain more than an AI tool—you get a trusted Agent. Dwight's personality brings an element of reliability, organisation, and thoroughness that helps your team feel supported at every stage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Consistent Support</h3>
                <p className="text-[#370300]">No matter the role, Dwight's approach ensures every team member gets exactly the help they need.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Brain className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Detailed Knowledge</h3>
                <p className="text-[#370300]">Dwight's understanding of your business makes it a valuable resource for quick answers and deep insights.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Zap className="w-12 h-12 mb-4 text-[#005F73] mx-auto" />
                <h3 className="font-['American_Typewriter'] font-normal text-xl mb-4 text-[#005F73]">Adaptable Reliability</h3>
                <p className="text-[#370300]">As your business grows, Dwight grows with you, adapting to your team's evolving needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FFCB1F]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-3xl font-['American_Typewriter'] italic text-[#370300]">
              "A dependable AI Agent with the knowledge of an experienced team member."
            </p>
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
import Image from 'next/image'
import { Mail, Phone, Clock, Brain, Lightbulb, Rocket } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import Form from '@/app/Components/Form'

import DwightJustAsk from "../../../public/Dwight_Just-Ask-Logo.svg"
import { PageWrapper } from '@/app/Components/page-wrapper'

export default function BookDemo() {
  return (
    <PageWrapper>
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <section className="bg-[#FFCB1F] py-2 md:py-6">
                    <div className="container mx-auto px-4 text-center">
                        <Image 
                        src={DwightJustAsk}
                        alt="Dwight"
                        width={200}
                        height={200}
                        className="mx-auto"
                        />
                        <p className="font-sans text-xl mb-8 max-w-3xl mx-auto text-[#370300]">
                        Curious to see how Dwight can transform your operations? Book a demo to explore how a custom AI Agent can integrate seamlessly with your team. Whether you&apos;re ready to get started or simply want to learn more, we&apos;re here to help.
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#370300]">
                            Book a Demo
                            </h2>
                            <Form />
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[#005F73] p-6 rounded-lg">
                                <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#FFCB1F]">
                                Contact
                            </h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-2">
                                    <a href="mailto:info@justaskdwight.com">
                                        <Mail className="w-8 h-8 text-[#FFCB1F]" />
                                        <span className="text-white">info@justaskdwight.com</span>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <a href="tel:+27604548361">
                                        <Phone className="w-8 h-8 text-[#FFCB1F]" />
                                        <span className="text-white">+27 60 454 8361</span>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Clock className="w-8 h-8 text-[#FFCB1F]" />
                                    <span className="text-white">Monday - Friday, 9 am - 5 pm</span>
                                </div>
                            </div>
                            </div>
                            <div className="bg-[#FFCB1F] p-6 rounded-lg">
                                <h2 className="font-['American_Typewriter'] font-normal text-3xl mb-6 text-[#370300]">
                                Why Book a Demo?
                            </h2>
                            <p className="mb-6 text-[#370300]">
                                A demo with Dwight allows you to see first-hand how a custom AI Agent can understand and enhance your operations. Explore real examples of how Dwight&apos;s Agents work in action and get answers to any specific questions you have.
                            </p>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-lg flex items-start space-x-4">
                                    <Brain className="w-8 h-8 mt-1 text-[#B8A9C9] flex-shrink-0" />
                                    <div>
                                        <strong className="text-[#370300] block mb-1">Explore Custom Scenarios:</strong>
                                        <span className="text-[#370300]">See how Dwight adapts to your business&apos;s unique needs.</span>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex items-start space-x-4">
                                <Lightbulb className="w-8 h-8 mt-1 text-[#B8A9C9] flex-shrink-0" />
                                <div>
                                    <strong className="text-[#370300] block mb-1">Ask Real-Time Questions:</strong>
                                    <span className="text-[#370300]">Get answers on Dwight&apos;s integration and customisation options.</span>
                                </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg flex items-start space-x-4">
                                <Rocket className="w-8 h-8 mt-1 text-[#B8A9C9] flex-shrink-0" />
                                <div>
                                    <strong className="text-[#370300] block mb-1">Discover Role-Specific Support:</strong>
                                    <span className="text-[#370300]">Experience how Dwight supports various roles in your organisation.</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </PageWrapper>
  )
}

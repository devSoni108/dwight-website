'use client'

import ChatSim from './Components/ChatSim'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ChatSim />
      <Footer />
      {/* Chat Bot Interface */}
      
    </div>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Send } from 'lucide-react'
import Navbar from '@/app/Components/Navbar'
import ChatSim from '@/app/Components/ChatSim'
import Footer from '@/app/Components/Footer'

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ChatSim />
      <Footer />

      {/* Chat Bot Interface */}

    </div>
  )
}

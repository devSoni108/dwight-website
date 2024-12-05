'use client'

import { useState } from 'react'
import Navbar from '@/app/Components/Navbar'
import ChatSim from '@/app/Components/ChatSim'
import Footer from '@/app/Components/Footer'

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

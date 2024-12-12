'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import DwightLogo from '../../public/Dwight_Logo-Mark.jpeg'
import Ryan from '../../public/Dwight_Ryan.svg'

const messages = [
  { sender: 'Ryan', content: "Hi Dwight, this is Ryan." },
  { sender: 'Dwight', content: "Welcome, Ryan! As Junior Art Director, your first step is to contact Kelly Kapoor (Account Manager for the Dunder Mifflin account) via Teams for the client brief." },
  { sender: 'Ryan', content: "Got it! What's next?" },
  { sender: 'Dwight', content: "Once you've reviewed the brief, reach out to Angela Martin (Traffic Manager) via Teams to confirm the deadline. Let me know if you have any other questions—I'm here to help." }
]

export default function Component() {
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([])
  const [currentText, setCurrentText] = useState('')
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCTA, setShowCTA] = useState(false)
  const [showFinalHeading, setShowFinalHeading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageIndex >= messages.length) {
      setShowCTA(true)
      setTimeout(() => setShowFinalHeading(true), 1000)
      return
    }

    const typingInterval = setInterval(() => {
      const currentMessage = messages[messageIndex]

      if (charIndex < currentMessage.content.length) {
        setCurrentText(currentMessage.content.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          setDisplayedMessages(prev => [...prev, { ...currentMessage, content: currentText }])
          setCurrentText('')
          setCharIndex(0)
          setMessageIndex(messageIndex + 1)
        }, 1000)
      }
    }, 40)

    return () => clearInterval(typingInterval)
  }, [charIndex, messageIndex, currentText])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, currentText])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFCB1F' }}>
      <div className="max-w-2xl w-full p-6 bg-white rounded-lg shadow-xl space-y-4">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 relative overflow-hidden rounded-full">
            <Image
              src={DwightLogo}
              alt="Dwight"
              width={100}
              height={40}
            />
          </div>
        </div>

        <div ref={chatContainerRef} className="space-y-4 h-[400px] overflow-y-auto pr-2" style={{ color: '#370300' }}>
          {displayedMessages.map((message, index) => (
            <div key={index} className={`flex items-start space-x-3 animate-fade-in ${message.sender === 'Ryan' ? 'justify-end' : ''}`}>
              {message.sender === 'Dwight' && (
                <div className="w-8 h-8 rounded-full bg-[#FFCB1F] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={DwightLogo}
                    alt="Dwight"
                    width={100}
                    height={40}
                  />
                </div>
              )}
              <div 
                className={`flex-1 p-4 rounded-lg ${
                  message.sender === 'Dwight' ? 'bg-[#FFCB1F]/10' : 'bg-[#68705C]'
                }`}
                style={{ 
                  fontFamily: 'Arial, sans-serif',
                  maxWidth: '80%',
                  color: message.sender === 'Ryan' ? 'white' : '#370300',
                }}
              >
                <p className="font-bold mb-1" style={{ color: message.sender === 'Ryan' ? '#FFCB1F' : '#370300' }}>{message.sender}</p>
                <p style={{ whiteSpace: 'pre-wrap' }}>{message.content}</p>
              </div>
              {message.sender === 'Ryan' && (
                <div className="w-8 h-8 rounded-full bg-[#68705C] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={Ryan}
                    alt="Dwight"
                    width={50}
                    height={50}
                  />
                </div>
              )}
            </div>
          ))}
          
          {currentText && (
            <div className="flex items-start space-x-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-[#FFCB1F] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src={DwightLogo}
                  alt="Dwight"
                  width={100}
                  height={40}
                />
              </div>
              <div 
                className="flex-1 p-4 rounded-lg bg-[#FFCB1F]/10"
                style={{ 
                  fontFamily: 'Arial, sans-serif',
                }}
              >
                <p className="font-bold mb-1">{messages[messageIndex].sender}</p>
                {currentText}
                <span className="inline-block w-1 h-4 ml-1 bg-[#370300] animate-pulse" />
              </div>
            </div>
          )}
        </div>
        
        {showFinalHeading && (
          <div className="text-center animate-fade-in" style={{ fontFamily: '"American Typewriter", serif', color: '#68705C' }}>
            <p className="text-xl">Imagine an AI that knows your business, inside out.</p>
          </div>
        )}

        {showCTA && (
          <div className="flex justify-center mt-6">
            <Button 
              className="px-6 py-2 text-lg font-semibold rounded-full transition-colors duration-200"
              style={{ 
                backgroundColor: '#370300', 
                color: '#FFCB1F',
                fontFamily: 'Arial, sans-serif',
              }}
            >
              Meet Dwight
            </Button>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

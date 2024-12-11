'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Ryan from '../../public/Dwight_Ryan.svg';
import DwightMark from '../../public/Dwight_Logo-Mark.jpeg';

const messages = [
  { sender: 'Ryan', content: "Hi Dwight, this is Ryan." },
  { sender: 'Dwight', content: "Welcome, Ryan! Your first step is to contact Kelly Kapoor (Account Manager)." },
  { sender: 'Ryan', content: "Got it! What's next?" },
  { sender: 'Dwight', content: "Once you've reviewed the brief, reach out to Angela Martin (Traffic Manager)." }
];

export default function ChatSim() {
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([]);
  const [currentText, setCurrentText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [showFinalHeading, setShowFinalHeading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageIndex >= messages.length) {
      setShowCTA(true);
      setTimeout(() => setShowFinalHeading(true), 1000);
      return;
    }

    const typingInterval = setInterval(() => {
      const currentMessage = messages[messageIndex];

      if (charIndex < currentMessage.content.length) {
        setCurrentText(currentMessage.content.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingInterval);
        setDisplayedMessages(prev => [...prev, { ...currentMessage, content: currentText }]);
        setCurrentText('');
        setCharIndex(0);
        setMessageIndex(messageIndex + 1);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [charIndex, messageIndex, currentText]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [displayedMessages]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#FFCB1F' }}>
      <div className="max-w-2xl w-full p-2 md:p-6 bg-white rounded-lg shadow-xl space-y-4 mx-2">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 relative overflow-hidden rounded-full">
            <Image
              src={DwightMark}
              alt="Dwight Logo"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div ref={chatContainerRef} className="space-y-4 h-[400px] overflow-y-auto pr-2" style={{ color: '#370300' }}>
          {displayedMessages.map((message, index) => (
            <div key={index} className={`flex items-start space-x-3 animate-fade-in ${message.sender === 'Ryan' ? 'justify-end' : ''}`}>
              {message.sender === 'Dwight' && (
                <div className="w-8 h-8 rounded-full bg-[#FFCB1F] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={DwightMark}
                    alt="Dwight Logo"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div
                className={`flex-1 p-4 rounded-lg ${message.sender === 'Dwight' ? 'bg-[#FFCB1F]/10' : 'bg-[#68705C]'}`}
                style={{ fontFamily: 'Arial, sans-serif', maxWidth: '80%', color: message.sender === 'Ryan' ? 'white' : '#370300' }}
              >
                <p className="font-bold mb-1" style={{ color: message.sender === 'Ryan' ? '#FFCB1F' : '#370300' }}>
                  {message.sender}
                </p>
                <p style={{ whiteSpace: 'pre-wrap' }}>{message.content}</p>
              </div>
              {message.sender === 'Ryan' && (
                <div className="w-8 h-8 rounded-full bg-[#68705C] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Image
                    src={Ryan}
                    alt="Ryan Avatar"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}

          {currentText && (
            <div className="flex items-start space-x-3 animate-fade-in">
              <div className="w-8 h-8 rounded-full bg-[#FFCB1F] flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src={messages[messageIndex].sender === 'Dwight'
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dwight_Logo-Mark.jpg-9yZh4vUNeAMA0qOFCjoGduzcQJjHOX.jpeg"
                    : "/placeholder.svg?height=32&width=32"}
                  alt={`${messages[messageIndex].sender} avatar`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 rounded-lg bg-[#FFCB1F]/10" style={{ fontFamily: 'Arial, sans-serif' }}>
                <p className="font-bold mb-1">{messages[messageIndex].sender}</p>
                {currentText}
                <span className="inline-block w-1 h-4 ml-1 bg-[#370300] animate-pulse" />
              </div>
            </div>
          )}
          {showFinalHeading && (
            <div className="text-center animate-fade-in" style={{ fontFamily: '"American Typewriter", serif', color: '#68705C' }}>
              <p className="text-xl">Imagine an AI that knows your business, inside out.</p>
            </div>
          )}
        </div>

        {showCTA && (
          <div className="flex justify-center mt-6">
            <Link
              href="/home"
              passHref
              className="px-6 py-2 text-lg font-semibold rounded-full transition-colors duration-200"
              style={{
                backgroundColor: '#370300',
                color: '#FFCB1F',
                fontFamily: 'Arial, sans-serif',
                textDecoration: 'none',
              }}
            >
              Meet Dwight
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

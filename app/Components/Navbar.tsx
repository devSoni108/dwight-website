'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#370300] text-[#FFCB1F]">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/home" className="text-2xl font-bold">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dwight_Menu-Logo-7rModLJ8v6SmgmlvAkASYgcjobPVx1.svg"
            alt="Dwight"
            width={100}
            height={40}
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:underline font-['American_Typewriter'] font-normal">
                About
              </Link>
            </li>
            <li>
              <Link href="/product-suite" className="hover:underline font-['American_Typewriter'] font-normal">
                Product Suite
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:underline font-['American_Typewriter'] font-normal">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="hover:underline font-['American_Typewriter'] font-normal">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/meet-dwight" className="hover:underline font-['American_Typewriter'] font-normal">
                Meet Dwight
              </Link>
            </li>
            <li>
              <Link href="/view-simulation" className="hover:underline font-['American_Typewriter'] font-normal">
                Replay Intro
              </Link>
            </li>
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
              <li>
                <Link href="/about" className="block hover:underline font-['American_Typewriter'] font-normal">
                  About
                </Link>
              </li>
              <li>
                <Link href="/product-suite" className="block hover:underline font-['American_Typewriter'] font-normal">
                  Product Suite
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="block hover:underline font-['American_Typewriter'] font-normal">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="block hover:underline font-['American_Typewriter'] font-normal">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/meet-dwight" className="block hover:underline font-['American_Typewriter'] font-normal">
                  Meet Dwight
                </Link>
              </li>
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
    </div>
  );
};

export default Navbar;

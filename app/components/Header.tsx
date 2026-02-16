"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isBranchesOpen, setIsBranchesOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    {
      name: "NOS BRANCHES ",
      href: "#",
      subItems: [
         { name: "LEARNING", href: "/learning" },
          { name: "INNOVATION", href: "/innovation" }, 
        { name: "CONSULTING", href: "/strategy" },
         { name: "EXPLORATION", href: "/exploration" },
      ],
    },
    { name: "Projets", href: "/projets" },
    { name: "Collaborer", href: "/collaborer" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 dark:bg-[#1B2441]/95 backdrop-blur-md shadow-md py-2" : "bg-white/80 dark:bg-[#1B2441]/80 py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative h-12 w-40">
          <Image
            src="/logo.jpg"
            alt="SUSUNI LAB"
            fill
            className="object-contain object-left dark:brightness-110"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider text-[#1B2441] dark:text-white">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.subItems ? (
                <>
                  <button
                    className="hover:text-[#0078B7] dark:hover:text-[#0078B7] transition-colors flex items-center gap-1"
                    onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                  >
                    {link.name}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1B2441] shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 dark:border-white/10">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-2 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#0078B7] transition-colors text-xs"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-[#0078B7] dark:hover:text-[#0078B7] transition-colors"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Theme Toggle Button */}
          {hasMounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-[#1B2441] dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          )}
        </nav>

        {/* Mobile Burger Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {hasMounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-white/10 text-[#1B2441] dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
          )}
          <button
            className="text-[#1B2441] dark:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#1B2441] shadow-xl border-t border-gray-100 dark:border-white/10 animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col">
                {link.subItems ? (
                  <>
                    <button
                      className="text-lg font-bold text-[#1B2441] dark:text-white flex items-center justify-between"
                      onClick={() => setIsBranchesOpen(!isBranchesOpen)}
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform ${isBranchesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isBranchesOpen && (
                      <div className="flex flex-col pl-4 mt-2 space-y-2 border-l-2 border-[#0078B7]/20">
                        {link.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="text-base text-gray-600 dark:text-gray-400 hover:text-[#0078B7]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-bold text-[#1B2441] dark:text-white hover:text-[#0078B7]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PORTFOLIO_ITEMS = [
  { name: "Codiris", role: "Systems Architecture", href: "/portfolio/codiris" },
  { name: "Fit & Fun", role: "Behavioral Design", href: "/portfolio/fit-and-fun" },
  { name: "CycleBot", role: "Driving ROI", href: "/portfolio/cyclebot" },
  { name: "CCTA", role: "High-Trust UX", href: "/portfolio/ccta" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    // Run it once on mount to catch the initial position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          scrolled ? "py-4 bg-brand-bg border-b border-border-nav" : "py-8 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 z-50 relative"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Bruno Tager
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="group relative flex items-center">
              <a
                href={pathname === "/" ? "#work" : "/#work"}
                className="font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 py-2"
              >
                Portfolio
              </a>
              <div className="absolute top-full left-0 pt-4 -mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 w-64">
                <div className="bg-brand-bg border border-border-light rounded-md p-2 flex flex-col gap-4">
                  {PORTFOLIO_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-1 py-1 hover:bg-black/5 rounded group/item transition-colors duration-150"
                    >
                      <div className="font-semibold text-brand-text group-hover/item:text-brand-accent transition-colors duration-150 mb-1">
                        {item.name}
                      </div>
                      <div className="text-sm text-brand-text/60">
                        {item.role}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/about" className="font-medium text-brand-text hover:text-brand-accent transition-colors duration-200">
              About
            </Link>
            <Link href="/resume" className="font-medium text-brand-text hover:text-brand-accent transition-colors duration-200">
              Resume
            </Link>
            <Link href="/contact" className="font-medium text-brand-text hover:text-brand-accent transition-colors duration-200">
              Contact
            </Link>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden z-50 relative p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-brand-text transition-transform duration-200 origin-left ${mobileMenuOpen ? "rotate-45" : ""}`} />
              <span className={`w-full h-[2px] bg-brand-text transition-opacity duration-200 ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`w-full h-[2px] bg-brand-text transition-transform duration-200 origin-left ${mobileMenuOpen ? "-rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-brand-bg z-40 transition-opacity duration-200 flex flex-col justify-center px-6 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          <div>
            <div className="text-sm font-semibold tracking-widest text-brand-text/50 uppercase mb-4">Portfolio</div>
            <div className="flex flex-col gap-4 pl-4 border-l border-border-light">
              {PORTFOLIO_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col group/item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-xl font-medium text-brand-text group-hover/item:text-brand-accent transition-colors duration-150">
                    {item.name}
                  </span>
                  <span className="text-sm text-brand-text/60 mt-0.5">
                    {item.role}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="text-3xl font-semibold text-brand-text">
            About
          </Link>
          <Link href="/resume" className="text-3xl font-semibold text-brand-text">
            Resume
          </Link>
          <Link href="/contact" className="text-3xl font-semibold text-brand-text">
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

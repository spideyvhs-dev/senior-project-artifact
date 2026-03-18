"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/drake-maye", label: "Drake Maye" },
  { href: "/dynasty-and-fall", label: "The Dynasty & Fall" },
  { href: "/the-rebuild", label: "The Rebuild" },
  { href: "/espn-debate", label: "ESPN Debate" },
  { href: "/fun-facts", label: "Fun Facts" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-pats-darker/95 backdrop-blur-md border-b border-pats-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-pats-red flex items-center justify-center font-black text-white text-lg tracking-tighter group-hover:scale-105 transition-transform">
              PP
            </div>
            <span className="text-lg font-black uppercase tracking-tight text-white hidden sm:block">
              The Pats Pod
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-pats-red bg-pats-red/10"
                    : "text-pats-silver hover:text-white hover:bg-pats-navy/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-pats-silver hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-pats-darker border-t border-pats-navy/50">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-pats-red bg-pats-red/10"
                    : "text-pats-silver hover:text-white hover:bg-pats-navy/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

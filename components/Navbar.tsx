"use client"

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavLinkChild {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavLinkChild[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "/solutions",},
  { label: "Join as a Mentor", href: "/join-as-a-mentor" },
  { label: "About", href: "/about"},
];



function DesktopDropdown({ link }: { link: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div  className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)} >
      <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors py-2">
        {link.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-48 rounded-lg border border-slate-100 bg-white py-1.5 shadow-lg">
          {link.children.map((child:any) => (
            <a
              key={child.label}
              href={child.href}
              className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900" >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


function MobileAccordion({ link, onNavigate }: { link: any; onNavigate: any }) {
  const [open, setOpen] = useState(false);

  if (!link.children) {
    return (
      <a
        href={link.href}
        onClick={onNavigate}
        className="block py-3 text-slate-700 border-b border-slate-100" >
        {link.label}
      </a>
    );
  }

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3  text-slate-700" >
        {link.label}
        <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="pb-2 pl-3">
          {link.children.map((child:any) => (
            <a
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="block py-2 text-sm text-slate-500" >
              {child.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto" />

        <nav className="hidden lg:flex lg:items-center lg:gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <DesktopDropdown key={link.label} link={link} />
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors" >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href="#"
            className="rounded-lg border text-sm border-slate-200 px-4 py-2" >
            Log In
          </a>
          <a
            href="#"
            className="rounded-lg bg-[#4A006A] px-4 py-2 text-sm font-medium text-white hover:bg-[#9825d5] transition-colors"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pb-4">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <MobileAccordion
                key={link.label}
                link={link}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="#"
              className="rounded-lg border border-slate-200 px-4 py-2.5 text-center text-sm font-medium text-slate-700">
              Log In
            </a>
            <a
              href="#"
              className="rounded-lg bg-[#4A006A] px-4 py-2.5 text-center text-sm font-medium text-white" >
              Get Started
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

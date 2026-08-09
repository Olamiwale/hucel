import { SiX, SiInstagram } from "react-icons/si";
import {Linkedin} from "lucide-react";

const footerLinks = {
  Solutions: ["Mentorship", "Executive Training", "Recruitment"],
  Company: ["About Us", "Contact"],
  // Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          
          <div className="col-span-2">
            <img src="/com-logo2.png" alt="Logo" className="h-25 w-auto" />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Helping people and businesses grow through mentorship, training,
              team building, and recruitment all in one place.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Hucel Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

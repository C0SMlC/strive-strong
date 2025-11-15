import type { SVGProps } from "react";
import {
  COMPANY_NAME,
  CONTACT_ADDRESS_SHORT,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  COPYRIGHT_YEAR,
  WHATSAPP_URL,
} from "../config/constants";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl mb-4">{COMPANY_NAME}</div>
            <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors">
              Expert physiotherapy for a pain-free life.
            </p>
          </div>

          <div>
            <h4 className="text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 transition-colors">
              <li>
                <a href="#treatments" className="hover:text-white">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 transition-colors">
              <li>
                <a href={CONTACT_PHONE_LINK} className="hover:text-white">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={CONTACT_EMAIL_LINK} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{CONTACT_ADDRESS_SHORT}</li>
            </ul>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/strive_strong_physiotherapy_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full  hover:bg-white/20 transition-colors"
                aria-label="Visit our Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 transition-colors">
              <li>Mon-Sat: 8am - 10pm</li>
              <li>Sun: 8am - 3pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-slate-800 pt-8 text-sm text-gray-400 dark:text-gray-500 text-center transition-colors space-y-2">
          <div>
            &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
          </div>
          <div>
            Designed &amp; developed by{" "}
            <a
              href="https://linktr.ee/pratikspendurkar"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center underline decoration-dotted hover:text-white focus-visible:outline-none transition-colors"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-400/25 via-teal-400/25 to-cyan-400/25 blur-md transition-all duration-300 group-hover:from-emerald-400/45 group-hover:via-teal-400/45 group-hover:to-cyan-400/45 group-hover:blur-lg"
              />
              <span className="relative font-medium">Pratik Pendurkar</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

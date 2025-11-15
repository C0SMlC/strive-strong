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
import { PhoneCall } from "lucide-react";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.75 2.25a.75.75 0 0 1 .743.648l.007.102v2a.75.75 0 0 1-1.493.102L14 8.5v-2a.75.75 0 0 1 .75-.75ZM12 6.75a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z"
      />
    </svg>
  );
}

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
            <div className="flex items-center gap-3 mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <PhoneCall className="w-4 h-4" />
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

        <div className="border-t border-gray-800 dark:border-slate-800 pt-8 text-sm text-gray-400 dark:text-gray-500 text-center transition-colors">
          &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

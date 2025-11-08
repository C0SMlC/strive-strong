import {
  COMPANY_NAME,
  CONTACT_ADDRESS_SHORT,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LINK,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  COPYRIGHT_YEAR,
} from "../config/constants";

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
              <li><a href="#treatments" className="hover:text-white">Treatments</a></li>
              <li><a href="#process" className="hover:text-white">How it Works</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
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
          </div>

          <div>
            <h4 className="text-sm mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-500 transition-colors">
              <li>Mon-Fri: 7am - 7pm</li>
              <li>Sat: 9am - 5pm</li>
              <li>Sun: Closed</li>
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

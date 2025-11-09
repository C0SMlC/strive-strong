import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { COMPANY_NAME, WHATSAPP_URL } from "../config/constants";
const logo = new URL("../assets/logo.png", import.meta.url).href;

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors duration-300 ">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt={`${COMPANY_NAME} logo`}
              className="h-8 w-auto "
            />
            <span className="text-xl dark:text-white transition-colors logo">
              {COMPANY_NAME}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="#treatments"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors dark:text-white"
            >
              Treatments
            </a>
            <a
              href="#process"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors dark:text-white"
            >
              Process
            </a>
            <a
              href="#pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors dark:text-white"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-sm h-9 px-4 transition-colors dark:text-white"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Book Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

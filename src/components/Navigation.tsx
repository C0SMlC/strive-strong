import { Button } from "./ui/button";
import { COMPANY_NAME, WHATSAPP_URL } from "../config/constants";
const logo = new URL("../assets/logo.png", import.meta.url).href;

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt={`${COMPANY_NAME} logo`}
              className="h-8 w-auto"
            />
            <span className="text-xl">{COMPANY_NAME}</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#treatments" className="text-gray-600 hover:text-gray-900">Treatments</a>
            <a href="#process" className="text-gray-600 hover:text-gray-900">Process</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          </div>

          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-sm h-9 px-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

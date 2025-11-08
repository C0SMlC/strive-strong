import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { WHATSAPP_URL } from "../config/constants";

const hero = new URL("../assets/hero.jpg", import.meta.url).href;
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_LINK } from "../config/constants";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto strict-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div>
            <div className="inline-block bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-16 py-1 rounded-full text-sm mb-6 transition-colors">
              ✨ Trusted by 200+ clients in Mumbai
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight dark:text-white transition-colors">
              Get back to living without pain
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors">
              Expert advance physiotherapy that helps you move better, recover
              faster, and feel stronger than ever.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-900 transition-colors"
              >
                <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE_DISPLAY}</a>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 transition-colors">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span>No referral needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span>Same-day appointments available</span>
              </div>
              {/* <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-500" />
                <span>Most insurance plans accepted</span>
              </div> */}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl dark:shadow-slate-900">
              <ImageWithFallback
                src={hero}
                alt="Physiotherapy session"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

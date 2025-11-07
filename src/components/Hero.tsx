import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
const hero = new URL("../assets/hero.jpg", import.meta.url).href;
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
} from "../config/constants";


export function Hero() {
  return (
    <section className="pt-24 pb-20 px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mb-6">
              ✨ Trusted by 2,000+ clients in SF Bay Area
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">
              Get back to living without pain
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert physiotherapy that helps you move better, recover faster, and feel stronger than ever.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE_DISPLAY}</a>
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>No referral needed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Same-day appointments available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Most insurance plans accepted</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
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
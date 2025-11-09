import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  WHATSAPP_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
} from "../config/constants";

const heroImage = new URL("../assets/hero.jpg", import.meta.url).href;

export function Hero() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = heroImage;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Overlay with working backdrop blur */}
      <div className="hero-overlay"></div>

      {/* ✅ Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-20 py-24 hero-content">
        <div className="grid lg:grid-cols-2 gap-12 items-center dark:text-white">
          <div>
            <div className="inline-block bg-blue-50/90 dark:bg-blue-950/80  dark:text-blue-300  py-1 rounded-full text-sm mb-6 backdrop-blur-sm dark:text-white">
              ✨ Trusted by 200+ clients in Mumbai
            </div>

            <h1 className="text-5xl md:text-6xl mb-6 font-semibold tracking-tight drop-shadow-lg dark:text-white">
              Get back to living without pain
            </h1>

            <p className="hero-description text-xl mb-8 drop-shadow dark:text-white">
              Expert advanced physiotherapy that helps you move better, recover
              faster, and feel stronger than ever.
            </p>

            <div className="hero-benefits space-y-2 text-sm">
              <div className="flex items-center gap-2 dark:text-white">
                <CheckCircle2 className="w-4 h-4" />
                <span>No referral needed</span>
              </div>
              <div className="flex items-center gap-2 dark:text-white">
                <CheckCircle2 className="w-4 h-4" />
                <span>Same-day appointments available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

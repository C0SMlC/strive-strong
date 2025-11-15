import { Button } from "./ui/button";
import { WHATSAPP_URL, CONTACT_MAP_EMBED_URL } from "../config/constants";

export function FeedbackCTA() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300 rounded-3xl dark:text-white">
      <div className="mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-900  p-12 text-white text-center transition-colors dark:text-white">
          <h2 className="text-3xl md:text-4xl mb-4">
            We’d love your feedback!
          </h2>
          <p className="text-xl text-blue-100 dark:text-white mb-8 max-w-2xl mx-auto">
            Your opinion helps us grow and serve you better. Please take a
            minute to leave a Google review for our clinic.
          </p>
          <div className="flex justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-200 h-12 px-8 mb-4 whitespace-nowrap transition-colors dark:text-white">
              <a
                href="https://share.google/RVFQgqYYws8Y9EqIt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review
              </a>
            </Button>
          </div>

          <p className="text-sm text-blue-100 dark:text-white">
            Your kind words make a big difference ❤️
          </p>
        </div>
      </div>

      <div className="relative h-[500px] md:h-auto min-h-[500px]">
        <iframe
          title="Strive Strong Physiotherapy Clinic Map"
          src={CONTACT_MAP_EMBED_URL}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-900/5 dark:from-blue-900/10 to-transparent transition-colors"></div>
      </div>
    </section>
  );
}

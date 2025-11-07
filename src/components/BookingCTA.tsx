import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function BookingCTA() {
  return (
    <section className="py-20 px-6">
      <div className=" mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to feel better?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your free 15-minute consultation call. No pressure, just an honest conversation about how we can help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8 whitespace-nowrap">
              Get Started
            </Button>
          </div>

          <p className="text-sm text-blue-100">
            Or call us at <span className="text-white">(555) 123-4567</span>
          </p>
        </div>
      </div>
          <div className="relative h-[500px] md:h-auto min-h-[500px]">
            <iframe
              title="Strive Strong Physiotherapy Clinic Map"
              src="https://maps.google.com/maps?q=Strive%20Strong%20Physiotherapy%20Clinic%20Ulwe&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-900/5 to-transparent"></div>
          </div>
    </section>
  );
}

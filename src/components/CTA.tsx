import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
} from "../config/constants";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-teal-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight dark:text-white transition-colors">
              Ready to move
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-teal-500 dark:from-orange-400 dark:to-teal-400 bg-clip-text text-transparent">
                pain-free?
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors">
              Book your free assessment today. No commitment, no pressure - just an honest evaluation of how we can help.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 rounded-full h-14 px-8 text-lg transition-colors">
                Book Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-14 px-8 text-lg border-2 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-900 transition-colors"
                asChild
              >
                <a href={CONTACT_PHONE_LINK}>Call {CONTACT_PHONE_DISPLAY}</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-slate-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1688079393240-f9f927562d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBleGVyY2lzaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyNDM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="People exercising"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 dark:from-orange-900/50 to-transparent transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
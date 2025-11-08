import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-gray-900 dark:text-white mb-6 transition-colors">Get In Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 transition-colors">
              Ready to start your journey to better health? Book your free consultation today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1 transition-colors">Phone</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1 transition-colors">Email</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">hello@physioflow.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1 transition-colors">Location</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">123 Wellness Street<br />San Francisco, CA 94102</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0 transition-colors">
                  <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white mb-1 transition-colors">Hours</div>
                  <div className="text-gray-600 dark:text-gray-400 transition-colors">
                    Mon-Fri: 8am - 8pm<br />
                    Sat: 9am - 5pm<br />
                    Sun: 10am - 3pm
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 transition-colors"
          >
            <h3 className="text-gray-900 dark:text-white mb-6 transition-colors">Book Your Free Consultation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 transition-colors">Name</label>
                <Input placeholder="Your full name" className="bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white transition-colors" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 transition-colors">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white transition-colors" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 transition-colors">Phone</label>
                <Input type="tel" placeholder="(555) 000-0000" className="bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white transition-colors" />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 transition-colors">Message</label>
                <Textarea 
                  placeholder="Tell us about your needs..."
                  className="bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white min-h-32 transition-colors"
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 h-12 transition-colors">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

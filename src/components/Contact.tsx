import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ready to start your journey to better health? Book your free consultation today.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-600">(555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">hello@physioflow.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Location</div>
                  <div className="text-gray-600">123 Wellness Street<br />San Francisco, CA 94102</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Hours</div>
                  <div className="text-gray-600">
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
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-gray-900 mb-6">Book Your Free Consultation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <Input placeholder="Your full name" className="bg-white" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-white" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <Input type="tel" placeholder="(555) 000-0000" className="bg-white" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your needs..."
                  className="bg-white min-h-32"
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

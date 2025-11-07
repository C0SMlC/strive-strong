import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { COMPANY_NAME } from "../config/constants";

const features = [
  "Certified and experienced physiotherapists",
  "Evidence-based treatment methods",
  "Personalized care plans",
  "Modern equipment and facilities",
  "Flexible appointment scheduling",
  "Most insurance plans accepted",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-gray-900 mb-6">
              Why Choose {COMPANY_NAME}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We combine clinical expertise with a patient-centered approach to deliver exceptional care. Your recovery and wellness are our top priorities.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <p className="text-gray-700 italic mb-4">
                "Our approach goes beyond treating symptoms. We focus on understanding the root cause of your pain and developing long-term solutions for lasting wellness."
              </p>
              <div>
                <div className="text-gray-900">Dr. Sarah Mitchell</div>
                <div className="text-gray-500">Lead Physiotherapist</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1720180246101-dc58af6fc23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjIzNDk0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern clinic"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663053822692-f036a147593c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBkb2luZyUyMHBoeXNpY2FsJTIwdGhlcmFweXxlbnwxfHx8fDE3NjI0MzUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Physical therapy"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

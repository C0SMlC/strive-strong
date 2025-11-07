import { motion } from "motion/react";
import { Zap, Target, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Results",
    description: "Most clients see improvement in 2-3 sessions",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Custom treatment designed for your body",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Evidence-Based",
    description: "Backed by latest research and proven techniques",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Safe & Effective",
    description: "Certified therapists with 15+ years experience",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500`} />
                <div className="relative p-8">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
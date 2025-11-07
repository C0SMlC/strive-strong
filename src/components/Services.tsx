import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sports Recovery",
    description: "Get back in the game faster with advanced recovery protocols",
    image: "https://images.unsplash.com/photo-1758933286842-9b5d934fbaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBtb3ZlbWVudHxlbnwxfHx8fDE3NjI0MzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Pain Management",
    description: "Eliminate chronic pain with targeted therapeutic techniques",
    image: "https://images.unsplash.com/photo-1591861325451-35ecaa6bfd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBoYXBweXxlbnwxfHx8fDE3NjI0MzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "Movement Therapy",
    description: "Optimize your movement patterns for peak performance",
    image: "https://images.unsplash.com/photo-1761839257789-20147513121a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcmVjb3ZlcnklMjBzdHJldGNoaW5nfGVufDF8fHx8MTc2MjQzNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-rose-500 to-pink-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            How we help you
            <br />
            <span className="text-gray-400">move better</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden bg-gray-900 hover:bg-gray-800 transition-colors duration-500">
                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
                  <div>
                    <div className={`inline-block bg-gradient-to-r ${service.gradient} px-4 py-1 rounded-full text-sm mb-6`}>
                      {`0${index + 1}`}
                    </div>
                    <h3 className="text-4xl lg:text-5xl mb-4">{service.title}</h3>
                    <p className="text-xl text-gray-400 mb-6">{service.description}</p>
                    <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                      <span>Learn more</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
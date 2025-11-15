import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Shekar Poojari",
    role: "Septic Shock Recovery",
    content:
      "Dr. Rahul was very helpful and empathetic during my dad’s recovery, guiding him step by step to regain strength and mobility. His encouragement and personalized exercises have greatly improved my father’s independence.",
    rating: 5,
    avatar: "SP",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Tanmay Sawant",
    role: "TB Meningitis Recovery",
    content:
      "I took physiotherapy sessions from Dr. Rahul for two months in May and June 2025. He is professional, focused on effective treatment, and explains every exercise clearly. I highly recommend him to anyone seeking relief and meaningful improvement. A huge thank you!",
    rating: 5,
    avatar: "TS",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Ashmita Beg",
    role: "Dystonic Cerebral Palsy Caregiver",
    content:
      "I would like to express my sincere gratitude to Rahul Sir for his exceptional physiotherapy care. His professionalism, patience, and expertise made the recovery process smooth and effective. He explains every step clearly, motivates with kindness, and the positive results have been remarkable.",
    rating: 5,
    avatar: "AB",
    color: "from-cyan-500 to-sky-500",
  },
];

export function Testimonials() {
  return (
    <section
      id="results"
      className="py-32 bg-amber-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight dark:text-white transition-colors">
            Real people.
            <br />
            <span className="text-gray-400 dark:text-gray-500">
              Real results.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 hover:shadow-xl dark:hover:shadow-slate-700 transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 transition-colors">
                    {testimonial.role}
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

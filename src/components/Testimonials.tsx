import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Runner",
    content: "After my knee injury, I thought my career was over. These guys got me back to competing in just 6 weeks. Absolutely life-changing.",
    rating: 5,
    avatar: "SJ",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    content: "Years of back pain from sitting at a desk - gone in 3 weeks. The exercises they gave me actually work. No more pain, no more excuses.",
    rating: 5,
    avatar: "MC",
    color: "from-teal-500 to-emerald-500",
  },
  {
    name: "Emma Williams",
    role: "Yoga Instructor",
    content: "I teach movement for a living and thought I knew everything. Their approach taught me so much about my own body. Game changer.",
    rating: 5,
    avatar: "EW",
    color: "from-rose-500 to-pink-500",
  },
];

export function Testimonials() {
  return (
    <section id="results" className="py-32 bg-amber-50 dark:bg-slate-900 transition-colors duration-300">
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
            <span className="text-gray-400 dark:text-gray-500">Real results.</span>
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
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed transition-colors">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-gray-900 dark:text-white transition-colors">{testimonial.name}</div>
                  <div className="text-gray-500 dark:text-gray-400 transition-colors">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
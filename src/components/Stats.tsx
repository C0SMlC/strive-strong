import { motion } from "motion/react";

const stats = [
  { number: "10,000+", label: "Happy Clients" },
  { number: "98.5%", label: "Success Rate" },
  { number: "10+", label: "Years Experience" },
  { number: "Faster", label: "Recovery" },
];

export function Stats() {
  return (
    <section className="py-32 bg-gradient-to-br from-orange-500 via-amber-500 to-teal-500 dark:from-orange-950 dark:via-amber-950 dark:to-teal-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            Numbers that speak
            <br />
            for themselves
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl lg:text-7xl mb-4">{stat.number}</div>
              <div className="text-xl text-white/80 dark:text-white/70 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

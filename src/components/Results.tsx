import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Dr Rahul was very helpful and empathetic during my dad’s recovery, guiding him step by step to regain strength and mobility. His encouragement and personalized exercises have greatly improved my father’s mobility.",
    author: "Shekar Poojari",
    condition: "Septic shock recovery",
  },
  {
    text: "Dr Rahul guided me through two months of physiotherapy with clear explanations for every exercise. He is professional, focused on effective treatment, and I can already feel meaningful improvement. A huge thank you!",
    author: "Tanmay Sawant",
    condition: "TB meningitis rehabilitation",
  },
  {
    text: "Rahul Sir’s exceptional physiotherapy care made the recovery process smooth and effective for my child. His professionalism, patience, and clear guidance motivated us at every step, and the positive results have been remarkable.",
    author: "Ashmita Beg",
    condition: "Dystonic cerebral palsy caregiver",
  },
];

export function Results() {
  return (
    <section className="py-20 px-6 bg-blue-600 dark:bg-blue-950 text-white dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              Real results from real people
            </h2>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-white" />
              ))}
            </div>
            <p className="text-2xl mb-2">4.9/5 average rating</p>
            <p className="text-blue-100 dark:text-white">
              Based on 847 reviews
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-2">98%</div>
              <div className="text-blue-100 dark:text-white">Success rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">Faster</div>
              <div className="text-blue-100 dark:text-white">Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">200+</div>
              <div className="text-blue-100 dark:text-white">Happy clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">10+</div>
              <div className="text-blue-100 dark:text-white">Years exp</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="text-sm">
                <div>{testimonial.author}</div>
                <div className="text-blue-100 dark:text-white">
                  {testimonial.condition}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

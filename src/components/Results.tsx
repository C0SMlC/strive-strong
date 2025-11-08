import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I was skeptical but after just 3 sessions my back pain is 90% gone. Wish I came here sooner!",
    author: "Jennifer M.",
    condition: "Lower back pain",
  },
  {
    text: "Best physiotherapy I've ever received. They actually listen and create a plan that works.",
    author: "Robert K.",
    condition: "Shoulder injury",
  },
  {
    text: "Got me back running after my knee surgery in half the time my surgeon expected. Amazing.",
    author: "Lisa T.",
    condition: "Post-op rehab",
  },
];

export function Results() {
  return (
    <section className="py-20 px-6 bg-blue-600 dark:bg-blue-950 text-white transition-colors duration-300">
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
            <p className="text-blue-100 dark:text-blue-200">
              Based on 847 reviews
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-2">98%</div>
              <div className="text-blue-100 dark:text-blue-200">
                Success rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">Faster</div>
              <div className="text-blue-100 dark:text-blue-200">Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">2000+</div>
              <div className="text-blue-100 dark:text-blue-200">
                Happy clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">10+</div>
              <div className="text-blue-100 dark:text-blue-200">Years exp</div>
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
                <div className="text-blue-100 dark:text-blue-200">
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

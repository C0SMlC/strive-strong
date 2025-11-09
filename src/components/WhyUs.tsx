import { Award, Clock, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { COMPANY_NAME } from "../config/constants";

import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";

const benefits = [
  {
    icon: Award,
    title: "Expert Team",
    description: "All therapists are certified with 10+ years experience",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Early morning and evening appointments available",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Custom treatment plans tailored to your goals",
  },
  {
    icon: Users,
    title: "Proven Results",
    description: "98% of clients report significant improvement",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={img1}
                    alt="Hands-on physiotherapy treatment"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={img2}
                    alt="Guided mobility training"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={img3}
                    alt="Recovery exercises with therapist support"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src={img4}
                    alt="Small-group strengthening session"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl mb-4 dark:text-white transition-colors">
              Why choose {COMPANY_NAME}?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
              We're not just another clinic. We focus on getting you real
              results through evidence-based treatment and genuine care.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors" />
                    </div>
                    <div>
                      <h3 className="mb-1 dark:text-white transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Award, Clock, Heart, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { COMPANY_NAME } from "../config/constants";

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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1591861325451-35ecaa6bfd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd2VsbG5lc3MlMjBoYXBweXxlbnwxfHx8fDE3NjI0MzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Wellness"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758933286842-9b5d934fbaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBtb3ZlbWVudHxlbnwxfHx8fDE3NjI0MzU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Training"
                    className="w-full h-56 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1761839257789-20147513121a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcmVjb3ZlcnklMjBzdHJldGNoaW5nfGVufDF8fHx8MTc2MjQzNTQyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Recovery"
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1688079393240-f9f927562d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBleGVyY2lzaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYyNDM1NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Group exercise"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl mb-4">
              Why choose {COMPANY_NAME}?
            </h2>
            <p className="text-gray-600 mb-8">
              We're not just another clinic. We focus on getting you real results through evidence-based treatment and genuine care.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
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

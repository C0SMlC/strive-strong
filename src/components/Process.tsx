const steps = [
  {
    number: "01",
    title: "Book Your Visit",
    description: "Schedule online in 60 seconds. Choose a time that works for you.",
  },
  {
    number: "02",
    title: "Get Assessed",
    description: "45-minute thorough evaluation to understand your condition.",
  },
  {
    number: "03",
    title: "Start Treatment",
    description: "Personalized plan with hands-on therapy and exercises.",
  },
  {
    number: "04",
    title: "Feel Better",
    description: "Most clients feel improvement within 2-3 sessions.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">How it works</h2>
          <p className="text-gray-600">Simple, effective, results-focused care</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 text-xl">
                {step.number}
              </div>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

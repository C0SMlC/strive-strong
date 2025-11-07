const treatments = [
  { name: "Back Pain", count: "Most Common" },
  { name: "Neck & Shoulders", count: "Very Common" },
  { name: "Sports Injuries", count: "Athletes" },
  { name: "Post-Surgery", count: "Recovery" },
  { name: "Joint Pain", count: "Arthritis" },
  { name: "Headaches", count: "Tension" },
  { name: "Posture Issues", count: "Office Workers" },
  { name: "Chronic Pain", count: "Long-term" },
];

export function TreatmentAreas() {
  return (
    <section id="treatments" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">We treat all types of pain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From sports injuries to chronic conditions, our expert team has experience treating everything.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {treatments.map((treatment) => (
            <div
              key={treatment.name}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
            >
              <h3 className="mb-1">{treatment.name}</h3>
              <p className="text-sm text-gray-500">{treatment.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

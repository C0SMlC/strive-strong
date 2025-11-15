const treatments = [
  {
    name: "Stroke and Spinal Cord Injury",
    count: "Neurological Rehabilitation",
  },
  {
    name: "Cerebral Palsy and Rare Genetic Pediatric Conditions",
    count: "Pediatric Neurorehabilitation",
  },
  { name: "Low Back Pain and Neck Pain", count: "Musculoskeletal Therapy" },
  {
    name: "All Joint Surgical and Non-Surgical Conditions",
    count: "Orthopedic Rehabilitation",
  },
  {
    name: "Pelvic Floor Rehab and Antenatal/Postnatal Care",
    count: "Women's Health Physiotherapy",
  },
  { name: "Geriatric Rehabilitation", count: "Elderly Functional Recovery" },
  {
    name: "Scoliosis and Postural Correction Rehabilitation",
    count: "Spinal Alignment & Posture Care",
  },
  {
    name: "Cardiovascular & Respiratory Rehabilitation",
    count: "Cardiopulmonary Recovery",
  },
  { name: "Sports Rehabilitation", count: "Performance & Injury Recovery" },
  {
    name: "Vertigo and Mind-Body Balance Rehabilitation",
    count: "Vestibular & Balance Training",
  },
  {
    name: " Pilates and Yoga fitness training ",
    count: "Core Strength & Flexibility",
  },
  {
    name: "Aquatherapy (Personal Pool Available)",
    count: "Hydrotherapy-Based Rehabilitation",
  },
];

export function TreatmentAreas() {
  return (
    <section
      id="treatments"
      className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 dark:text-white transition-colors">
            We treat all types of pain
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            Whether it’s a sports injury or chronic condition, our experts
            specialize in neuro, musculoskeletal, women’s health, geriatric, and
            cardiopulmonary rehabilitation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {treatments.map((treatment) => (
            <div
              key={treatment.name}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-6 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-sm dark:hover:shadow-lg dark:hover:shadow-blue-900 transition-all cursor-pointer"
            >
              <h3 className="mb-1 dark:text-white transition-colors">
                {treatment.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
                {treatment.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Do I need a referral to book?",
    answer: "Nope! You can book directly with us. We'll handle all the insurance paperwork if needed.",
  },
  {
    question: "How long are sessions?",
    answer: "First visit is 45 minutes for a thorough assessment. Follow-up sessions are 30-45 minutes depending on your needs.",
  },
  {
    question: "What should I wear?",
    answer: "Comfortable, loose-fitting clothes that allow easy movement. Athletic wear works great.",
  },
  {
    question: "Will it hurt?",
    answer: "Some techniques may cause mild discomfort, but we'll never push you beyond your comfort level. Most people find treatment very relaxing.",
  },
  {
    question: "How many sessions will I need?",
    answer: "It varies by condition, but most people see significant improvement in 4-6 sessions. We'll give you an estimate after your first visit.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 dark:text-white transition-colors">Common questions</h2>
          <p className="text-gray-600 dark:text-gray-400 transition-colors">Everything you need to know before your first visit</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg px-6 transition-colors">
              <AccordionTrigger className="hover:no-underline dark:text-white transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 transition-colors">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

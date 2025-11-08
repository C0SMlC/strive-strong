import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TreatmentAreas } from "./components/TreatmentAreas";
import { Process } from "./components/Process";
import { WhyUs } from "./components/WhyUs";
import { Results } from "./components/Results";
import { FAQ } from "./components/FAQ";
import { BookingCTA } from "./components/BookingCTA";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
        <Navigation />
        <Hero />
        <TreatmentAreas />
        <Process />
        <WhyUs />
        <Results />
        <FAQ />
        <BookingCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

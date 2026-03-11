import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Location } from "../components/Location";
import { Contact } from "../components/Contact";
import { SEO } from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Location />
      <Contact />
    </>
  );
}

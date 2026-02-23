import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import OldTeamSlider from "../OldTeamSlider";
import Team from "../Team";
import Statistics from "../Statistics";
import Features from "../Features";
import Testimonials from "../Testimonials";
import Timeline from "../Timeline";
import Partners from "../Partners";
import Newsletter from "../Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <Features />
      <Team />
      <Timeline />
      <OldTeamSlider />
      <Testimonials />
      <AboutMe />
      <Partners />
      <Newsletter />
      <Footer />
    </>
  );
}

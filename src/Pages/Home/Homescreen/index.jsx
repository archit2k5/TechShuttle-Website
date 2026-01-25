import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import OldTeamSlider from "../OldTeamSlider";
import Team from "../Team";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Team />
      <OldTeamSlider />
      <AboutMe />
      <Footer />
    </>
  );
}

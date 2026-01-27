import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Hero } from "./components/Hero";
import { InaugratedBy } from "./components/InaugratedBy";
import LearnMore from "./components/LearnMore";
import { Organizers } from "./components/Organizers";
import { Outcomes } from "./components/Outcomes";
import { Participate } from "./components/Participate";
import { People } from "./components/People";
import { ProgramStructure } from "./components/ProgramStructure";
import { Speakers } from "./components/Speakers";
import { IndiaAISummitSection } from "./components/SummitSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <About />
      {/* <LearnMore /> */}
      <InaugratedBy />
      <Speakers />
      <Outcomes />
      <ProgramStructure />
      <Organizers />
    </>
  );
}

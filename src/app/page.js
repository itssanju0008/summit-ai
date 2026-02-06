"use client";

import { useLinkContext } from "@/context/LinkContext";
import { About } from "./components/About";
import { Carousel } from "./components/Carousel";
import { Hero } from "./components/Hero";
import { InaugratedBy } from "./components/InaugratedBy";
import { Organizers } from "./components/Organizers";
import { Outcomes } from "./components/Outcomes";
import { ProgramStructure } from "./components/ProgramStructure";
import { Speakers } from "./components/Speakers";
import People from "./components/People";
import Participate from "./components/Participate";

export default function Home() {
  const { hash } = useLinkContext();

  return (
    <>
      {hash.includes("people") ? (
        <People />
      ) : hash.includes("participate") ? (
        <Participate />
      ) : (
        <>
          <Hero />
          <Carousel />
          <About />
          {/* <InaugratedBy /> */}
          <Speakers />
          <Outcomes />
          <ProgramStructure />
          <Organizers />
        </>
      )}
    </>
  );
}

import HeroPage from "@/components/hero/hero";
import NavBar from "@/components/layout/navbar";
import Image from "next/image";
import AboutPage from "./about/page";
import ProjectPage from "./projects/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="">
      {/* <NavBar /> */}
      <HeroPage />
      <AboutPage />
      <ProjectPage />
      <ContactPage />
    </div>
  );
}

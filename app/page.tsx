import AboutPage from "@/components/about/page";
import HeroPage from "@/components/hero/hero";
import NavBar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <AboutPage />
    </div>
  );
}

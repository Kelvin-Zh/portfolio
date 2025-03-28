import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Meteors } from "@/components/ui/meteors";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden w-full">
      <Meteors /> 
      <div>
        <FloatingNav navItems = { navItems }/>
        <Hero />
        <Grid />

        <Footer />
      </div>
    </main>
  );
}

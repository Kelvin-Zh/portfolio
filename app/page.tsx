import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black">
      <div>
        <FloatingNav navItems={[ {name: 'Home', link: '/', icon: <FaHome />} ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}

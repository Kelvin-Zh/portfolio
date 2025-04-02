import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Meteors } from "@/components/ui/meteors";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden w-full items-center justify-center">
      <Meteors /> 
      <div>
        <FloatingNav navItems = { navItems }/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

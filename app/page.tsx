import BackgroundGrid from "@/components/BackgroundGrid";
import DockNavigation from "@/components/DockNavigation";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 font-cinzel">
        <BackgroundGrid />
      </div>
      <HeroSection />
      <DockNavigation collapsible={false} position="bottom" />
    </div>
  );
}

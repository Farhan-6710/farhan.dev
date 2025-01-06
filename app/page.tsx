import BackgroundGrid from "@/components/BackgroundGrid";
import DockNavigation from "@/components/DockNavigation";
import DynamicIsland from "@/components/DynamicIsland";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
      <div className="fixed inset-0 -z-10 font-cinzel">
        <BackgroundGrid />
      </div>
      <DynamicIsland />
      <HeroSection />
      <DockNavigation collapsible={false} position="bottom" responsive="" />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
}

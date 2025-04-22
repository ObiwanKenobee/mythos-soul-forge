
import { useState, useEffect } from "react";
import { useStore } from "@/store/useStore";
import OnboardingWizard from "@/components/OnboardingWizard";
import Navbar from "@/components/Navbar";
import ForgeRoom from "@/components/ForgeRoom";
import ArchiveView from "@/components/ArchiveView";
import ConstellationView from "@/components/ConstellationView";
import CommunionSpace from "@/components/CommunionSpace";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const { onboardingComplete, activeView } = useStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (onboardingComplete) {
      toast({
        title: "Journey Forged",
        description: "Your mythic path has been illuminated. Begin your quest.",
      });
    }
  }, [onboardingComplete]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-cosmic-gradient flex flex-col items-center justify-center">
        <div className="sacred-symbol mb-6">
          <span className="text-5xl">⚜</span>
        </div>
        <h1 className="text-4xl font-serif font-bold mb-2 text-white">Aeon Forge</h1>
        <p className="text-mystical-200 animate-pulse">Igniting your mythic journey...</p>
      </div>
    );
  }

  if (!onboardingComplete) {
    return <OnboardingWizard />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="container mx-auto h-full">
          {activeView === 'forge' && <ForgeRoom />}
          {activeView === 'archive' && <ArchiveView />}
          {activeView === 'constellation' && <ConstellationView />}
          {activeView === 'communion' && <CommunionSpace />}
        </div>
      </main>
    </div>
  );
};

export default Index;

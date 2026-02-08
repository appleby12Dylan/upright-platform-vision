import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import UprightSection from "@/components/UprightSection";
import SpotHeroSection from "@/components/SpotHeroSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <UprightSection />
      <SpotHeroSection />
      <ExperienceTimeline />
      <SkillsSection />
      <ContactSection />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          © 2025 Dylan Appleby · Built with precision
        </p>
      </footer>
    </div>
  );
};

export default Index;

import Navigation from "@/components/presentation/Navigation";
import HeroSection from "@/components/presentation/HeroSection";
import ExecutiveSummary from "@/components/presentation/ExecutiveSummary";
import ProjectOverview from "@/components/presentation/ProjectOverview";
import LocationAdvantage from "@/components/presentation/LocationAdvantage";
import AboutUniteGreen from "@/components/presentation/AboutUniteGreen";
import Leadership from "@/components/presentation/Leadership";
import MarketingStrategy from "@/components/presentation/MarketingStrategy";
import NRIConnect from "@/components/presentation/NRIConnect";
import BrandingStudy from "@/components/presentation/BrandingStudy";
import PhaseOverview from "@/components/presentation/PhaseOverview";
import Phase1 from "@/components/presentation/Phase1";
import Phase2 from "@/components/presentation/Phase2";
import Phase3 from "@/components/presentation/Phase3";
import Phase4 from "@/components/presentation/Phase4";
import PaymentOptions from "@/components/presentation/PaymentOptions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExecutiveSummary />
      <ProjectOverview />
      <LocationAdvantage />
      <AboutUniteGreen />
      <Leadership />
      <MarketingStrategy />
      <NRIConnect />
      <BrandingStudy />
      <PhaseOverview />
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <Phase4 />
      <PaymentOptions />
    </div>
  );
};

export default Index;

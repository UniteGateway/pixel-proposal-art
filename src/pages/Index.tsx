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
import PricingStrategy from "@/components/presentation/PricingStrategy";
import PaymentOptions from "@/components/presentation/PaymentOptions";
import { DeviceProvider, DeviceFrame } from "@/components/presentation/DevicePreview";

const Index = () => {
  return (
    <DeviceProvider>
      <div id="presentation-content" className="min-h-screen bg-background">
        <Navigation />
        <DeviceFrame>
          <section id="hero"><HeroSection /></section>
          <section id="executive-summary"><ExecutiveSummary /></section>
          <section id="project-overview"><ProjectOverview /></section>
          <section id="location"><LocationAdvantage /></section>
          <section id="about-unite"><AboutUniteGreen /></section>
          <section id="leadership"><Leadership /></section>
          <section id="marketing-strategy"><MarketingStrategy /></section>
          <section id="nri-connect"><NRIConnect /></section>
          <section id="branding-study"><BrandingStudy /></section>
          <section id="phase-overview"><PhaseOverview /></section>
          <section id="phase-1"><Phase1 /></section>
          <section id="phase-2"><Phase2 /></section>
          <section id="phase-3"><Phase3 /></section>
          <section id="phase-4"><Phase4 /></section>
          <section id="pricing-strategy"><PricingStrategy /></section>
          <section id="payment"><PaymentOptions /></section>
        </DeviceFrame>
      </div>
    </DeviceProvider>
  );
};

export default Index;

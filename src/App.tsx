import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CursorLightTrail } from "./components/CursorLightTrail";
import { Hero } from "./sections/Hero";
import { ClientProblem } from "./sections/ClientProblem";
import { WhatICreate } from "./sections/WhatICreate";
import { CRMShowcase } from "./sections/CRMShowcase";
import { BusinessResults } from "./sections/BusinessResults";
import { WorkProcess } from "./sections/WorkProcess";
import { WorksCatalog } from "./sections/WorksCatalog";
import { WhyTrustMe } from "./sections/WhyTrustMe";
import { WhoItIsFor } from "./sections/WhoItIsFor";
import { WorkFormats } from "./sections/WorkFormats";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";

export default function App() {
  return (
    <div className="bg-navy min-h-screen text-slate-100 font-sans selection:bg-blue-600/30 selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>
      <CursorLightTrail />
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <ClientProblem />
        <WhatICreate />
        <CRMShowcase />
        <BusinessResults />
        <WorkProcess />
        <WorksCatalog />
        <WhyTrustMe />
        <WhoItIsFor />
        <WorkFormats />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}


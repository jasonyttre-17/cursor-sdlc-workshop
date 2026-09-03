import { Hero } from "@/components/Hero";
import { KillChain } from "@/components/KillChain";
import { LensGrid } from "@/components/LensGrid";
import { Objections } from "@/components/Objections";
import { SegmentChart } from "@/components/SegmentChart";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TalkTrack } from "@/components/TalkTrack";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main>
        <Hero />
        <LensGrid />
        <SegmentChart />
        <KillChain />
        <TalkTrack />
        <Objections />
      </main>
      <SiteFooter />
    </div>
  );
}

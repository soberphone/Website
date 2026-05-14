import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { AppPreviewSection } from "@/components/app-preview-section"
import { CommunitySection } from "@/components/community-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <AppPreviewSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  )
}

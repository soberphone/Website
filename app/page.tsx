import { Header } from "@/components/header"
import { ScrollStage } from "@/components/scroll-stage"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ScrollStage />
      <CTASection />
      <Footer />
    </main>
  )
}

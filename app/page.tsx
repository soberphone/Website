import { Header } from "@/components/header"
import { ScrollStage } from "@/components/scroll-stage"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ScrollStage />
      <Footer />
    </main>
  )
}

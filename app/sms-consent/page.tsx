import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SmsConsentPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="relative isolate px-6 pt-32 md:pt-40 pb-24 md:pb-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 40%, #D0DFFF 100%)",
          }}
        />

        <article className="max-w-3xl mx-auto">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium leading-tight tracking-tight text-foreground mb-4 text-balance">
              SMS Opt-in &amp; Supporter Messaging
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Soberphone sends SMS text messages only after users explicitly opt
              in inside the app.
            </p>
          </header>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              How users opt-in
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              During goal setup, users see the statement:
            </p>
            <blockquote className="border-l-2 border-primary/40 pl-5 italic text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              &ldquo;By clicking Confirm Goal, I agree to receive text messages
              from Soberphone. I agree that Soberphone may send text messages to
              my chosen Supporters when I create or exceed a goal. Reply STOP to
              unsubscribe. Message &amp; data rates may apply.&rdquo;
            </blockquote>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Users must tap <strong className="text-foreground">Confirm Goal</strong>{" "}
              to proceed. This tap serves as explicit consent to send SMS
              messages.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              No SMS is sent unless the user:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Selects Supporters</li>
              <li>Views the SMS consent statement</li>
              <li>Taps Confirm Goal</li>
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              Supporter notifications
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              When a user adds a Supporter, Soberphone sends that Supporter:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>A one-time SMS invitation</li>
              <li>
                Occasional notifications if the user exceeds a goal they chose
                to share
              </li>
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              Opt-out
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Supporters may opt out at any time by replying{" "}
              <strong className="text-foreground">STOP</strong>.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              Message types
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              <li>Supporter invitations</li>
              <li>Usage notifications</li>
              <li>Goal-exceeded alerts</li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Soberphone does not send marketing messages.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              Contact
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              For questions:{" "}
              <a
                href="mailto:contact@soberphone.io"
                className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
              >
                contact@soberphone.io
              </a>
            </p>
          </section>
        </article>
      </section>

      <Footer />
    </main>
  )
}

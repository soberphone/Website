import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
              Soberphone (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;)
              is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, and safeguard information when you
              use the Soberphone app or website.
            </p>
          </header>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              1. Information we collect
            </h2>
            <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-2">
              Information you provide
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Tech-use goals and related app settings</li>
              <li>Supporter phone numbers (only when you choose to invite them)</li>
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              2. How we use your information
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              <li>Operate and improve the Soberphone app</li>
              <li>Send user-initiated notifications</li>
              <li>Invite Supporters that you select</li>
              <li>Deliver SMS messages you have opted into</li>
              <li>Provide customer support</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We do not share mobile contact information with third parties or
              affiliates for marketing or promotional purposes. Information may
              be shared with subcontractors in support services, such as
              customer service. All other categories exclude text messaging
              originator opt-in data and consent; this information will not be
              shared with any third parties.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              3. SMS messaging
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Soberphone sends SMS text messages only after explicit opt-in
              inside the app.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Users see this message during goal setup:{" "}
              <span className="italic text-foreground/80">
                &ldquo;By clicking Confirm Goal, I agree to receive text
                messages from Soberphone. I agree that Soberphone may send text
                messages to my chosen Supporters when I create or exceed a
                goal. Reply STOP to unsubscribe. Message &amp; data rates may
                apply.&rdquo;
              </span>{" "}
              Users must tap{" "}
              <strong className="text-foreground">Confirm Goal</strong> to
              authorize SMS messaging.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              Supporters may receive:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              <li>A one-time invitation</li>
              <li>
                Occasional notifications when the user exceeds goals they chose
                to share
              </li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Supporters may opt out anytime by replying{" "}
              <strong className="text-foreground">STOP</strong>. Replying{" "}
              <strong className="text-foreground">HELP</strong> provides support
              information.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We do not send marketing or promotional SMS.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              4. Sharing of information
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              We only share information with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              <li>
                Service providers who help us operate Soberphone (e.g., SMS
                delivery, hosting)
              </li>
              <li>Law enforcement when required by law</li>
            </ul>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We do not share your data with advertisers or data brokers.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              5. Data security
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We use industry-standard security measures to protect your
              information. No system is 100% secure, but we take reasonable
              steps to keep your data safe.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              6. Your choices
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              You may:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Update your information</li>
              <li>Remove Supporters</li>
              <li>Delete your account</li>
              <li>
                Request data deletion by emailing{" "}
                <a
                  href="mailto:contact@soberphone.io"
                  className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
                >
                  contact@soberphone.io
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              7. Children&rsquo;s privacy
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-2">
              Users must be 13 or older to create an account. Parents or
              guardians may use Soberphone to support a child under 13.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We do not knowingly collect data from children under 13 without
              parental involvement.
            </p>
          </section>

          <section className="mb-10 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              8. Changes to this policy
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We may update this policy from time to time. If material changes
              are made, we will notify users in the app or on our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl font-medium leading-tight tracking-tight text-foreground mb-4">
              9. Contact us
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              For questions about this Privacy Policy, contact:{" "}
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

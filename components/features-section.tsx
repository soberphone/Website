"use client"

import { Users, Target, Clock, Heart, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Social Accountability",
    description: "Your supporters are notified when you exceed your goals. Real connection creates real change.",
  },
  {
    icon: Target,
    title: "Flexible Goals",
    description: "Set custom limits for specific apps or create tech-free windows for mornings, evenings, or any time you choose.",
  },
  {
    icon: Clock,
    title: "Mindful Tracking",
    description: "Understand your patterns without judgment. See where your time goes and make conscious choices.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "Connect with others on the same journey. Share struggles, celebrate wins, and heal together.",
  },
  {
    icon: Shield,
    title: "Gentle Boundaries",
    description: "No harsh lockouts. Instead, thoughtful friction that helps you pause and reconsider.",
  },
  {
    icon: Sparkles,
    title: "Daily Intentions",
    description: "Start each day with purpose. Set intentions and reflect on what matters most to you.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Features
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight text-foreground mb-6 text-balance">
            Tools designed for lasting change
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Other apps focus on restriction. We focus on connection, understanding, 
            and the supportive relationships that make transformation possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-foreground/80" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

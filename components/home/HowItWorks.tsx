import { UserPlus, Search, Handshake } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your goals — whether you're seeking mentorship, training, or top talent.",
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description:
      "Our platform connects you with the right mentors, programs, or candidates based on your needs.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Grow Together",
    description:
      "Start collaborating, learning, and building — with ongoing support every step of the way.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get Started in Three Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {/* Connector line (desktop only) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-slate-200 sm:block"
            style={{ marginLeft: "16.6667%", marginRight: "16.6667%" }}
            aria-hidden="true"
          />

          {steps.map(({ icon: Icon, step, title, description }) => (
            <div key={step} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white shadow-sm">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <span className="mt-4 text-xs font-semibold tracking-wide text-purple-600">
                STEP {step}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
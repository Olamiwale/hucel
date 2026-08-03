import { GraduationCap, Building2, Briefcase, type LucideIcon } from "lucide-react";

interface OperatingTrack {
  icon: LucideIcon;
  audience: string;
  title: string;
  description: string;
  steps: string[];
}

const tracks: OperatingTrack[] = [
  {
    icon: GraduationCap,
    audience: "For Mentors",
    title: "We match expertise with intent",
    description:
      "Mentors set their availability and focus areas. We match them with people whose goals genuinely fit what they can offer, then get out of the way.",
    steps: [
      "Apply and verify your experience",
      "Set your focus areas and availability",
      "Get matched with mentees who fit",
    ],
  },
  {
    icon: Building2,
    audience: "For Organizations",
    title: "We build capability, not just courses",
    description:
      "Organizations bring us a leadership or team challenge. We design a program around it, run it with their people, and track whether it actually moved the needle.",
    steps: [
      "Diagnose the leadership or team gap",
      "Design a program around real scenarios",
      "Deliver, then measure the impact",
    ],
  },
  {
    icon: Briefcase,
    audience: "For Recruiters",
    title: "We source for fit, not just skills",
    description:
      "Recruiters define the role and the team it joins. We surface candidates already screened for skills and culture fit, so the shortlist is short for a reason.",
    steps: [
      "Define the role and team context",
      "Source and screen for skills and fit",
      "Hand off a shortlist ready to interview",
    ],
  },
];

export default function HowWeOperate(){
  return (
    <section className="border-t border-slate-100 bg-slate-50 px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            How We Operate
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            One Platform, Three Ways We Show Up
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Mentors, organizations, and recruiters each work with us
            differently — here's what that actually looks like on each
            track.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tracks.map(({ icon: Icon, audience, title, description, steps }) => (
            <div
              key={audience}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
                <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-purple-600">
                {audience}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {description}
              </p>

              <ol className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {steps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-500">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

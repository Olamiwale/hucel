import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The mentorship program completely changed how I approach leadership. I went from managing tasks to genuinely developing my team.",
    name: "Amara Chen",
    role: "VP of Operations, Brightpath",
    avatarColor: "bg-purple-200",
    initials: "AC",
  },
  {
    quote:
      "We filled three senior roles in under a month. The recruitment solution understood exactly what our culture needed, not just the job description.",
    name: "David Okafor",
    role: "Head of Talent, Meridian",
    avatarColor: "bg-emerald-200",
    initials: "DO",
  },
  {
    quote:
      "Our leadership team finally speaks the same language. The executive training was practical, not just theory-heavy slides.",
    name: "Priya Nair",
    role: "CEO, Solace Group",
    avatarColor: "bg-blue-200",
    initials: "PN",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by People and Teams Everywhere
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map(({ quote, name, role, avatarColor, initials }) => (
            <figure
              key={name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                “{quote}”
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${avatarColor} text-sm font-semibold text-slate-700`}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{name}</div>
                  <div className="text-xs text-slate-500">{role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
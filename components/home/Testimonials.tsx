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


const track = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-x 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#4A006A]">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by People and Teams Everywhere
          </h2>
        </div>

        <div
          className="relative mt-14 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-6">
            {track.map(({ quote, name, role, avatarColor, initials }, i) => (
              <figure
                key={`${name}-${i}`}
                className="flex w-80 shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  “{quote}”
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${avatarColor} text-sm font-semibold text-slate-700`}
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
      </div>
    </section>
  );
}
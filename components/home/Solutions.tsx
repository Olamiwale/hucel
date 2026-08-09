import { Users, GraduationCap, UsersRound, Briefcase, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Users,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    linkColor: "text-purple-600 hover:text-purple-700",
    title: "Mentorship Platform",
    description:
      "Connect with experienced mentors, gain guidance, and accelerate your personal and professional growth.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    linkColor: "text-emerald-600 hover:text-emerald-700",
    title: "Executive Training",
    description:
      "Leadership development programs for executives and managers that drive impact and results.",
  },
  {
    icon: UsersRound,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    linkColor: "text-blue-600 hover:text-blue-700",
    title: "Team Building",
    description:
      "Engaging experiences and workshops that build trust, improve culture, and boost team performance.",
  },
  {
    icon: Briefcase,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    linkColor: "text-orange-600 hover:text-orange-700",
    title: "Recruitment Solutions",
    description:
      "End-to-end talent solutions to help organizations find and hire exceptional talent faster.",
  },
];

export default function Solutions() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            Our Solutions
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Grow People and Businesses
          </h2>
        </div>

     
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, iconBg, iconColor, linkColor, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}>
                <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={2} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>

              <a
                href="#"
                className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium ${linkColor}`} >
                Learn more
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
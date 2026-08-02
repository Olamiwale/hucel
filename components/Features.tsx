
"use client";

import { Users, GraduationCap, HeartHandshake, Briefcase } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Mentorship",
    description: "Meaningful connections that inspire growth.",
    position: "top-6 -left-6 lg:-left-10",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: GraduationCap,
    title: "Executive Training",
    description: "Practical programs that build strong leaders.",
    position: "top-6 -right-6 lg:-right-10",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: HeartHandshake,
    title: "Team Building",
    description: "Stronger teams. Better collaboration. Lasting impact.",
    position: "bottom-10 -left-8 lg:-left-14",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Recruitment",
    description: "Find, attract, and hire the right talent.",
    position: "bottom-10 -right-8 lg:-right-14",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

function FeatureCard({ icon: Icon, title, description, position, iconBg, iconColor }) {
  return (
    <div
      className={`absolute ${position} hidden w-56 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-900/5 sm:block`}
    >
      <div className="flex items-start gap-3">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
          <Icon size={18} />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="mt-0.5 text-xs leading-snug text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      {features.map((feature) => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </>
  );
}
  
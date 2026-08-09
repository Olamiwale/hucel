import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Check,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions | What We Do",
  description:
    "An in-depth look at how we work with mentors, organizations, and recruiters.",
};

interface SubNavItem {
  id: string;
  label: string;
}

const subNav: SubNavItem[] = [
  { id: "mentors", label: "For Mentors" },
  { id: "organizations", label: "For Organizations" },
  { id: "recruiters", label: "For Recruiters" },
];

interface SolutionSection {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

const sections: SolutionSection[] = [
  {
    id: "mentors",
    icon: GraduationCap,
    eyebrow: "For Mentors",
    title: "Share What You Know, Where It Actually Lands",
    description:
      "Mentoring here isn't a one-off call that goes nowhere. You set your focus areas and availability, and we match you with people whose goals genuinely fit what you can offer — so every session builds on the last.",
    features: [
      "Flexible scheduling that fits around your work",
      "Matching based on real focus areas, not just job titles",
      "Structured session tools so conversations stay productive",
      "Visibility into the impact you're having over time",
    ],
    ctaLabel: "Apply to Mentor",
    ctaHref: "#",
    image: "/solu-leadership.png",
    imageAlt: "A mentor and mentee in conversation over coffee",
  },
  {
    id: "organizations",
    icon: Building2,
    eyebrow: "For Organizations",
    title: "Leadership Development Built Around Your Actual Problems",
    description:
      "We start with the gap, not a course catalog. Whether it's first-time managers, a leadership bench that needs depth, or teams that don't collaborate well, we design a program around your specific context and track whether it moved the needle.",
    features: [
      "A diagnostic phase before any curriculum is built",
      "Programs built around real scenarios your teams face",
      "A dedicated program manager for the full engagement",
      "Progress reporting your leadership team can actually use",
    ],
    ctaLabel: "Talk to Our Team",
    ctaHref: "#",
    image:"/solu-leadership.png",
    imageAlt: "A team collaborating around a whiteboard in a workshop",
    reverse: true,
  },
  {
    id: "recruiters",
    icon: Briefcase,
    eyebrow: "For Recruiters",
    title: "Shortlists That Are Short for a Reason",
    description:
      "You define the role and the team it needs to fit into. We source and screen against both skills and culture fit before anyone reaches your desk, so you're spending time interviewing, not filtering.",
    features: [
      "Roles scoped with team context, not just a job description",
      "Candidates pre-screened for skills and culture fit",
      "A dedicated sourcing partner throughout the search",
      "Shortlists delivered ready for first-round interviews",
    ],
    ctaLabel: "Start Hiring",
    ctaHref: "#",
    image: "/solu-recruitment.png",
    imageAlt: "A recruiter reviewing candidates with a hiring manager",
  },
];

export default function Solutions() {
  return (
    <main className="bg-white mt-10">
   
      <section className="px-6 pt-16 pb-12 sm:pt-24 sm:pb-16 lg:px-8">
        <div className="mx-auto font-serif max-w-3xl text-center">
         
         
          <h1 className="main-heading">
            Solutions Built Around How 
            <span className='text-purple-700'> You Grow </span>
           
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Whether you're mentoring, building a team, or hiring one, the way
            we work with you is shaped by what you're actually trying to do 
            not a one-size-fits-all product.
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src="/hero-img.png"
            alt="People collaborating across our platform"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
      </section>

      {/* Sticky in-page sub-nav */}
      <nav className="sticky top-0 z-10 border-y border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl justify-center gap-8 overflow-x-auto px-6 py-4 lg:px-8">
          {subNav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-purple-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Audience sections */}
      {sections.map(
        ({
          id,
          icon: Icon,
          eyebrow,
          title,
          description,
          features,
          ctaLabel,
          ctaHref,
          image,
          imageAlt,
          reverse,
        }) => (
          <section
            key={id}
            id={id}
            className="scroll-mt-20 border-b border-slate-100 px-6 py-20 sm:py-24 lg:px-8"
          >
            <div
              className={`mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
                reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full max-w-lg flex-shrink-0 overflow-hidden rounded-2xl lg:w-1/2">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Copy */}
              <div className="w-full lg:w-1/2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
                  <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                </div>

                <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-purple-600">
                  {eyebrow}
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {description}
                </p>

                <ul className="mt-6 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-50">
                        <Check className="h-3.5 w-3.5 text-purple-600" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={ctaHref}
                  className="mt-8 inline-flex items-center rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </section>
        )
      )}

      {/* Closing CTA */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Not Sure Which Track Fits You?
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Reach out and we'll help you figure out where to start, whether
            that's mentoring, developing your team, or hiring your next one.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
              }

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { Check, Clock, Users, Sparkles, type LucideIcon } from "lucide-react";

interface Expectation {
  icon: LucideIcon;
  title: string;
  description: string;
}

const expectations: Expectation[] = [
  {
    icon: Clock,
    title: "A real but manageable commitment",
    description:
      "Most mentors give 1-2 hours a month per mentee. You set your own availability — we match around it, not the other way around.",
  },
  {
    icon: Users,
    title: "1-3 mentees at a time",
    description:
      "We keep mentor loads small on purpose, so every relationship gets real attention instead of being spread thin.",
  },
  {
    icon: Sparkles,
    title: "Genuine experience in your area",
    description:
      "We're not looking for a title. We're looking for people who've actually done the thing they'd be advising someone on.",
  },
];

const whatWeLookFor: string[] = [
  "At least 3 years of relevant professional experience",
  "A track record in the area you want to mentor in",
  "Willingness to commit to a regular cadence with mentees",
  "Genuine interest in someone else's growth, not just networking",
];

const expertiseOptions: string[] = [
  "Engineering",
  "Product Management",
  "Design",
  "Data & AI",
  "Marketing",
  "Sales",
  "People & Leadership",
  "Career Growth",
];

interface MentorApplicationForm {
  fullName: string;
  email: string;
  linkedinUrl: string;
  yearsExperience: string;
  expertiseAreas: string[];
  availability: string;
  motivation: string;
}

const initialFormState: MentorApplicationForm = {
  fullName: "",
  email: "",
  linkedinUrl: "",
  yearsExperience: "",
  expertiseAreas: [],
  availability: "",
  motivation: "",
};

export default function MentorApplicationPage() {
  const [form, setForm] = useState<MentorApplicationForm>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleExpertise = (area: string): void => {
    setForm((prev) => {
      const alreadySelected = prev.expertiseAreas.includes(area);
      return {
        ...prev,
        expertiseAreas: alreadySelected
          ? prev.expertiseAreas.filter((item) => item !== area)
          : [...prev.expertiseAreas, area],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Wire this up to your API route / form handler.
    console.log("Mentor application submitted:", form);
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="px-6 pt-16 pb-10 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-purple-600">
            Become a Mentor
          </span>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Help Someone Get to Where You Already Are
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Mentoring here is a real, ongoing relationship — not a one-off
            call. Here's what it actually involves, and how to apply.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: expectations panel */}
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/solutions-mentors.jpg"
                alt="A mentor in conversation with a mentee"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>

            <div className="mt-8 space-y-6">
              {expectations.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Icon className="h-5 w-5 text-purple-600" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">
                What we look for
              </h3>
              <ul className="mt-4 space-y-3">
                {whatWeLookFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white">
                      <Check className="h-3.5 w-3.5 text-purple-600" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: application form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
                  <Check className="h-7 w-7 text-purple-600" strokeWidth={2.5} />
                </div>
                <h2 className="mt-6 text-xl font-semibold text-slate-900">
                  Application Received
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
                  Thanks for applying to mentor. We review applications within
                  5-7 business days and will follow up at the email you
                  provided.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleTextChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleTextChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="linkedinUrl"
                      className="block text-sm font-medium text-slate-700"
                    >
                      LinkedIn or portfolio URL
                    </label>
                    <input
                      id="linkedinUrl"
                      name="linkedinUrl"
                      type="url"
                      required
                      value={form.linkedinUrl}
                      onChange={handleTextChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="https://linkedin.com/in/janedoe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="yearsExperience"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Years of experience
                    </label>
                    <input
                      id="yearsExperience"
                      name="yearsExperience"
                      type="text"
                      required
                      value={form.yearsExperience}
                      onChange={handleTextChange}
                      className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                      placeholder="e.g. 8"
                    />
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-medium text-slate-700">
                    Areas you'd mentor in
                  </legend>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {expertiseOptions.map((area) => {
                      const selected = form.expertiseAreas.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleExpertise(area)}
                          aria-pressed={selected}
                          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                            selected
                              ? "border-purple-600 bg-purple-600 text-white"
                              : "border-slate-300 text-slate-600 hover:border-purple-400 hover:text-purple-700"
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <label
                    htmlFor="availability"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Weekly or monthly availability
                  </label>
                  <input
                    id="availability"
                    name="availability"
                    type="text"
                    required
                    value={form.availability}
                    onChange={handleTextChange}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="e.g. 2 hours a month, evenings"
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="motivation"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Why do you want to mentor?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={form.motivation}
                    onChange={handleTextChange}
                    className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="A couple of sentences is plenty."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800 sm:w-auto"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

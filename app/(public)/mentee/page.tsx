"use client";


import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { Check, Search, Sparkles, UserCheck, Users2, X } from "lucide-react";




interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  avatarColor: string;
  initials: string;
  blurb: string;
}

const mentors: Mentor[] = [
  {
    id: "amara-chen",
    name: "Amara Chen",
    role: "VP of Operations, Brightpath",
    expertise: ["People & Leadership", "Career Growth"],
    avatarColor: "bg-purple-200",
    initials: "AC",
    blurb: "12 years scaling ops teams, from 5 to 200 people.",
  },
  {
    id: "David-okafor",
    name: "David Okafor",
    role: "Head of Talent, Meridian",
    expertise: ["People & Leadership", "Career Growth"],
    avatarColor: "bg-emerald-200",
    initials: "DO",
    blurb: "Built talent functions at two Series B startups.",
  },

  {
    id: "Tomi-bello",
    name: "Tomiwa Bello",
    role: "Staff Engineer, Canalian",
    expertise: ["Engineering", "Data & AI"],
    avatarColor: "bg-amber-200",
    initials: "TB",
    blurb: "Backend and infra, now mentoring senior IC growth.",
  },
  {
    id: "Eng. James Emmanuel",
    name: "Eng. James Emmanuel",
    role: "Design Director, Casaflow",
    expertise: ["Design", "Product Management"],
    avatarColor: "bg-rose-200",
    initials: "GA",
    blurb: "Led design at two 0-to-1 products, now at scale.",
  },
  {
    id: "Dr Ayo-Johnson",
    name: "Dr. Ayo-Johnson",
    role: "Growth Marketing Lead, Vertex",
    expertise: ["Marketing", "Sales"],
    avatarColor: "bg-cyan-200",
    initials: "FO",
    blurb: "Took two products from 0 to 100k users.",
  },
];

const expertiseOptions: string[] = [
  "Engineering",
  "Product Management",
  "Marketing",
  "Sales",
  "People & Leadership",
  "Career Growth",
];

type MentorshipPreference = "specific" | "match";

interface MenteeApplicationForm {
  fullName: string;
  email: string;
  currentRole: string;
  expertiseAreas: string[];
  availability: string;
  goals: string;
}

const initialFormState: MenteeApplicationForm = {
  fullName: "",
  email: "",
  currentRole: "",
  expertiseAreas: [],
  availability: "",
  goals: "",
};

export default function MenteeApplicationPage() {
  const [preference, setPreference] = useState<MentorshipPreference>("match");
  const [selectedMentorId, setSelectedMentorId] = useState<string | null>(null);
  const [mentorSearch, setMentorSearch] = useState<string>("");
  const [mentorFilter, setMentorFilter] = useState<string | null>(null);

  const [form, setForm] = useState<MenteeApplicationForm>(initialFormState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const selectedMentor = useMemo(
    () => mentors.find((m) => m.id === selectedMentorId) ?? null,
    [selectedMentorId]
  );

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const matchesSearch = mentor.name
        .toLowerCase()
        .includes(mentorSearch.trim().toLowerCase());
      const matchesFilter = mentorFilter
        ? mentor.expertise.includes(mentorFilter)
        : true;
      return matchesSearch && matchesFilter;
    });
  }, [mentorSearch, mentorFilter]);

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

  const handlePreferenceChange = (next: MentorshipPreference): void => {
    setPreference(next);
    if (next === "match") {
      setSelectedMentorId(null);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const payload = {
      ...form,
      mentorshipPreference: preference,
      preferredMentorId: preference === "specific" ? selectedMentorId : null,
    };
    // Wire this up to your API route / form handler.
    console.log("Mentee application submitted:", payload);
    setSubmitted(true);
  };

  return (
    <main className="bg-white mt-10">
      <section className="px-6 pt-16 pb-10 mb-5 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
         
          <h1 className="main-heading">
            Get Guidance 
            <em> From </em> 

            <br/>
            
            <span className="text-purple-700"> Someone 
              
              <em> Who's Been There </em>  </span> 
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Already know who you'd like to learn from? Pick them directly.
            Not sure yet? Tell us what you're working on and we'll match you.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-12 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100">
              <Check className="h-7 w-7 text-purple-600" strokeWidth={2.5} />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-slate-900">
              Application Received
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">
              {selectedMentor
                ? `We've sent your request to ${selectedMentor.name}. If they accept, you'll hear from us within 3-5 business days.`
                : "We're matching you with a mentor based on what you shared. Expect to hear from us within 5-7 business days."}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Path selector */}
            <fieldset>
              <legend className="text-sm font-medium text-slate-700">
                How would you like to find a mentor?
              </legend>
              <div className="mt-2.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handlePreferenceChange("specific")}
                  aria-pressed={preference === "specific"}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                    preference === "specific"
                      ? "border-purple-600 bg-purple-50"
                      : "border-slate-200 hover:border-purple-300"
                  }`}
                >
                  <UserCheck
                    className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                      preference === "specific" ? "text-purple-600" : "text-slate-400"
                    }`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Choose a specific mentor
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      Browse mentors and pick who you'd like to work with.
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handlePreferenceChange("match")}
                  aria-pressed={preference === "match"}
                  className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition ${
                    preference === "match"
                      ? "border-purple-600 bg-purple-50"
                      : "border-slate-200 hover:border-purple-300"
                  }`}
                >
                  <Sparkles
                    className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                      preference === "match" ? "text-purple-600" : "text-slate-400"
                    }`}
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      Not sure yet — match me
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                      Tell us your goals and we'll suggest a mentor for you.
                    </p>
                  </div>
                </button>
              </div>
            </fieldset>



            {/* Mentor picker — only when "specific" is selected */}
            {preference === "specific" && (
              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                {selectedMentor ? (
                  <div className="flex items-center justify-between rounded-xl bg-purple-50 p-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${selectedMentor.avatarColor} text-sm font-semibold text-slate-700`}
                      >
                        {selectedMentor.initials}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">
                          {selectedMentor.name}
                        </div>
                        <div className="text-xs text-slate-500">{selectedMentor.role}</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedMentorId(null)}
                      className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-purple-700"
                    >
                      <X className="h-3.5 w-3.5" />
                      Change
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2">
                      <Search className="h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        value={mentorSearch}
                        onChange={(e) => setMentorSearch(e.target.value)}
                        placeholder="Search mentors by name"
                        className="w-full text-sm text-slate-900 outline-none placeholder:text-slate-400"
                      />
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setMentorFilter(null)}
                        className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                          mentorFilter === null
                            ? "border-purple-600 bg-purple-600 text-white"
                            : "border-slate-300 text-slate-600 hover:border-purple-400"
                        }`}
                      >
                        All
                      </button>
                      {expertiseOptions.map((area) => (
                        <button
                          key={area}
                          type="button"
                          onClick={() =>
                            setMentorFilter((prev) => (prev === area ? null : area))
                          }
                          className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                            mentorFilter === area
                              ? "border-purple-600 bg-purple-600 text-white"
                              : "border-slate-300 text-slate-600 hover:border-purple-400"
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {filteredMentors.length === 0 ? (
                        <div className="col-span-full flex items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 py-8 text-sm text-slate-500">
                          <Users2 className="h-4 w-4" />
                          No mentors match that search.
                        </div>
                      ) : (
                        filteredMentors.map((mentor) => (
                          <button
                            key={mentor.id}
                            type="button"
                            onClick={() => setSelectedMentorId(mentor.id)}
                            className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-purple-400 hover:bg-purple-50/50"
                          >
                            <div
                              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${mentor.avatarColor} text-sm font-semibold text-slate-700`}
                            >
                              {mentor.initials}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-900">
                                {mentor.name}
                              </div>
                              <div className="text-xs text-slate-500">{mentor.role}</div>
                              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                                {mentor.blurb}
                              </p>
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Applicant details */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
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
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
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

              <div className="sm:col-span-2">
                <label htmlFor="currentRole" className="block text-sm font-medium text-slate-700">
                  Current role
                </label>
                <input
                  id="currentRole"
                  name="currentRole"
                  type="text"
                  required
                  value={form.currentRole}
                  onChange={handleTextChange}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="e.g. Product Analyst"
                />
              </div>
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-slate-700">
                What do you want mentorship in?
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
              <label htmlFor="goals" className="block text-sm font-medium text-slate-700">
                What are you hoping to get out of mentorship?
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={4}
                value={form.goals}
                onChange={handleTextChange}
                className="mt-1.5 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                placeholder="A couple of sentences is plenty."
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-800 sm:w-auto"
            >
              {preference === "specific" && selectedMentor
                ? `Request ${selectedMentor.name.split(" ")[0]} as My Mentor`
                : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
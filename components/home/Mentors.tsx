import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

const mentors = [
  {
    name: "John Doe",
    role: "Chief Security Officer",
    company: "Apex Bank Nigeria",
    image: "/person1.png",
    linkedin: "#",
  },
  {
    name: "Dr. Jamie Peters",
    role: "CEO",
    company: "HABA Microfinance Bank",
    image: "/person2.png",
    linkedin: "#",
  },
 
  
];



export default function Mentors() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 justify-center items-center flex flex-col">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-[#4A006A]">
          Meet a Few of Our Mentors
        </span>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 lg:text-4xl">
          Learn from professionals who've been where you're going
        </h2>
       
      </div>

      <div className="mt-14 grid grid-cols-1 justify-center items-center gap-6 md:grid-cols-2 lg:grid-cols-2">
        {mentors.map((mentor) => (
          <div key={mentor.name} className="group overflow-hidden rounded-sm">

             <div className="relative md:aspect-[4/5] h-[450px] w-[350px] items-center justify-center flex md:w-full  overflow-hidden bg-slate-100">
             <Image
      src={mentor.image}
      alt={`${mentor.name}, ${mentor.role} at ${mentor.company}`}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      className="object-cover"
    />

              <a
                href={mentor.linkedin}
                aria-label={`${mentor.name} on LinkedIn`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 opacity-0 shadow-sm transition group-hover:opacity-100 hover:text-[#4A006A]"
              >
                <Linkedin size={16} />
              </a>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900">{mentor.name}</h3>
              <p className="mt-0.5 text-sm font-medium text-violet-600">
                {mentor.role}
              </p>
              <p className="mt-1 text-sm text-slate-500">{mentor.company}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/mentors"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-[#4A006A] hover:text-[#4A006A]"
        >
          View More Mentors
         
        </Link>
      </div>
    </section>
  );
}
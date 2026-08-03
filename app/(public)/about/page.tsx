import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";
import HowWeOperate from "@/components/home/HowWeOperate";

export const metadata: Metadata = {
  title: "About Us | How We Started",
  description:
    "The story of how we started — connecting people with mentorship, training, and opportunity.",
};

interface Backer {
  name: string;
}

const backers: Backer[] = [
  { name: "Union Ventures" },
  { name: "Horizon Capital" },
  { name: "Bridgepoint Partners" },
];

interface StoryLink {
  label: string;
  href: string;
}

const storyLinks: StoryLink[] = [
  { label: "Where we started", href: "#origin" },
  { label: "People we've helped grow", href: "#impact" },
];

export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white mt-10">
      
      <section className="px-6 pt-16 pb-10 sm:pt-24 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-4xl leading-tight text-slate-900 sm:text-6xl">
            We Turn <em className="text-purple-700">Ambition</em>
            <br />
            into <em className="text-purple-700">Opportunity</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-500 sm:text-lg">
            
          </p>
        </div>

        <div className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src="/hero-img.png"
            alt="Our founding team together"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
      </section>

      {/* Backed by */}
      <section className="px-6 pb-16 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-slate-500">Backed by people who believed early</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {backers.map((backer) => (
              <span
                key={backer.name}
                className="text-lg font-medium text-slate-400 grayscale"
              >
                {backer.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      

      {/* Story links / stats row */}
      <section id="impact" className="border-t border-slate-100 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col justify-between gap-6 sm:flex-row">
          {storyLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 underline-offset-4 hover:text-purple-700 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <HowWeOperate />
      </section>

    </main>
  );
                          }

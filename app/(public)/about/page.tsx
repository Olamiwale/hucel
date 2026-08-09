import type { Metadata } from "next";
import type { JSX } from "react";
import Image from "next/image";
import { Compass, Target } from "lucide-react";
import HowWeOperate from "@/components/home/HowWeOperate";

export const metadata: Metadata = {
  title: "About Us | How We Started",
  description:
    "The story of how we started — connecting people with mentorship, training, and opportunity.",
};

interface Backer {
  name: string;
}

interface StoryLink {
  label: string;
  href: string;
}


export default function AboutPage(): JSX.Element {
  return (
    <main className="bg-white mt-10">

      <section className="px-6 pt-16 pb-10 sm:pt-24 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="main-heading">
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

      <section id="origin" className="border-t border-slate-100 px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
              <Target className="h-5 w-5 text-purple-700" strokeWidth={2} />
            </div>
            <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-purple-600">
              Our Mission
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              To create an environment that stimulates productivity, learning
              and creativity.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-100">
              <Compass className="h-5 w-5 text-purple-700" strokeWidth={2} />
            </div>
            <h2 className="mt-5 text-sm font-semibold uppercase tracking-wide text-purple-600">
              Our Vision
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-700">
              We believe that, through our innovative and dynamic engagement
              initiatives, we will become the foremost organisation
              facilitating team development and translating that into
              company growth.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="border-t border-slate-100 px-6 py-10 lg:px-8">
        
        <HowWeOperate />
      </section>

    </main>
  );
}
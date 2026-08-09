
"use client";

import Image from "next/image";
import Link from "next/link";
import Features from "@/components/Features";

export default function Hero() {
  return (
    <section className="overflow-hidden mt-10">
      <div className="mx-auto  max-w-7xl items-center gap-14 px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center">

          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-[]">
            Empowering Leaders. Building Better Futures
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight lg:text-7xl md:text-5xl">
            Develop Leaders
            <br />
            Build Stronger Teams
            <br />
            <span className="text-[#4A006A]">
              Connect to Opportunity
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-md leading-8 text-slate-600">
            We connect mentors with mentees, deliver executive development,
            strengthen teams, and help organizations recruit exceptional
            professionals
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4A006A] px-7 py-4 font-semibold text-white transition hover:bg-[#a836d9]"
            >
              Get Started
            
            </Link>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-violet-600 hover:text-violet-600"
            >
              Explore Solutions
            </Link>

          </div>

        </div>


        <div className="relative">
          <Features />

          <div className=" bg-white ">
            <Image
              src="/hero-img.png"
              alt="Leadership team"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

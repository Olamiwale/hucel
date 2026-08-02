export default function CTABanner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl"
            aria-hidden="true"
          />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Grow Your People and Business?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-slate-300">
            Join thousands of professionals and organizations already using our
            platform to develop leaders, build teams, and find opportunity.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#get-started"
              className="rounded-lg bg-[#4A006A] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a836d9]"
            >
              Get Started Free
            </a>
          
          </div>
        </div>
      </div>
    </section>
  );
}
const logos = [
  "Northwind", "Vertex Labs", "Brightpath", "Solace Group", "Meridian", "Ascent Co",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500">
          Trusted by growing teams at
        </p>

        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-lg font-semibold text-slate-400 grayscale transition hover:text-slate-600"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
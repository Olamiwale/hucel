const stats = [
  { value: "12k+", label: "Professionals mentored" },
  { value: "480+", label: "Companies served" },
  { value: "9,500+", label: "Roles filled" },
  { value: "94%", label: "Satisfaction rate" },
];

export default function Stats() {
  return (
    <section className="bg-purple-700 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold text-white sm:text-4xl">
                {value}
              </div>
              <div className="mt-2 text-sm text-purple-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
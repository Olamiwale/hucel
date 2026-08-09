import Image from "next/image";

const companies = [
  { name: "Lagos Business School", image: "/logo-business-school.png" },
  { name: "Canalian Group", image: "/logo-canalian.png" },
  { name: "Casaflow Realties", image: "/logo-casaflow.png" },
  { name: "TEDX - Jibowu", image: "/logo-tedx.png" },
];

// Duplicate so the track can loop seamlessly at -50%.
const track = [...companies, ...companies];

export default function TrustedCompanies() {
  return (
    <section className="w-full bg-white">
      <style>{`
        @keyframes scroll-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: scroll-x 25s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500">
          Trusted by growing teams at
        </p>

        {/* overflow-hidden is what actually clips the track — this was missing */}
        <div
          className="relative mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(",
            WebkitMaskImage:
              "",
          }}
        >
          <div className="marquee-track flex w-max items-center gap-12">
            {track.map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="flex shrink-0 flex-col items-center gap-2.5"
              >
                <span className="flex h-24 w-[104px] shrink-0 items-center justify-center">
                  <Image
                    src={company.image}
                    alt={company.name}
                    width={104}
                    height={96}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="text-sm font-semibold text-slate-600">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
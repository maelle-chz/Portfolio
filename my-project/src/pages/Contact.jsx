import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const adobeApps = [
  { name: "After Effects", src: "/banner/ae.svg" },
  { name: "Premiere Pro", src: "/banner/pr.svg" },
  { name: "Photoshop", src: "/banner/ps.svg" },
  { name: "Fresco", src: "/banner/fr.svg" },
  { name: "Toon Boom Harmony", src: "/banner/harmony.svg" },
  { name: "Blender", src: "/banner/blender.svg" },
];

export default function Contact() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] px-4 md:pt-10 pt-5 text-white sm:px-6 sm:pt-24">
      <Navbar />
      {/* Contact info */}
      <section className="Adorn-Engraved-Expanded mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Contact
        </h1>

        <div className="mx-auto max-w-2xl space-y-4 text-base leading-relaxed sm:text-lg">
          <p className="break-words ">
            Email:
            <a
              href="mailto:maellechz@gmail.com"
              className="underline transition-opacity hover:opacity-70 pl-2 font-extrabold"
            >
              maellechz@gmail.com
            </a>
          </p>

          <p className="break-words">
            Phone number:
            <a
              href="tel:+33638126872"
              className="underline transition-opacity hover:opacity-70 pl-2"
            >
              +33 6 38 12 68 72
            </a>
          </p>

          <p className="py-1 sm:py-2">Or reach out to me via social media</p>

          <Footer />

          <p className="pt-4">To see my CV</p>

          <div className="pt-3">
            <a
              href="/cv_Maelle_CHAIZE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-white px-5 py-3 font-bold text-black transition hover:bg-[#F82173] hover:text-white"
            >
              Click here!
            </a>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="mx-auto max-w-3xl pb-10 sm:pb-20">
        <h2 className="mb-5 text-center text-lg sm:text-xl">Softwares</h2>

        <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-3 sm:gap-4">
          {adobeApps.map((app) => (
            <div
              key={app.name}
              title={app.name}
              className="flex h-16 w-16 items-center justify-center rounded-md border border-white/20 bg-[#F82173]/90 p-2 shadow-sm transition-transform duration-200 hover:-translate-y-1 sm:h-20 sm:w-20 sm:p-3"
            >
              <img
                src={app.src}
                alt={app.name}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Footer from "../components/Footer";

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
    <main className="min-h-screen overflow-x-hidden bg-black px-4 md:pt-10 pt-5 text-white sm:px-6 sm:pt-24">
      {/* Contact info */}
      <section className="Adorn-Engraved-Expanded mx-auto max-w-5xl py-8 text-center sm:py-12">
        <h1 className="mb-6 text-3xl font-bold sm:mb-9 sm:text-4xl">Contact</h1>

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
      <section className="mx-auto max-w-3xl pb-10 sm:pb-12">
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

      {/* Contact form */}
      <section className="mx-auto max-w-md pb-12 sm:pb-16">
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base">
              Name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name..."
              className="mt-2 w-full rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Your email..."
              className="mt-2 w-full rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm sm:text-base">
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Your message..."
              className="mt-2 w-full resize-y rounded-md border border-white/20 bg-transparent p-3 text-base text-white placeholder:text-white/50 focus:border-[#F82173] focus:outline-none focus:ring-1 focus:ring-[#F82173]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-white px-4 py-3 font-bold text-black transition hover:bg-[#F82173] hover:text-white"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

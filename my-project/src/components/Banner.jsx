export default function Banner() {
  return (
    <section className="relative isolate h-[360px] w-full overflow-hidden sm:h-[400px] md:h-[420px]">
      {/* Background image */}
      <img
        src="/images/banner/banner.png"
        alt="Creative portfolio banner"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-purple-950/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F82173]/20 via-transparent to-[#F82173]/10" />

      {/* Main texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pb-8 text-center text-white">
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl md:text-7xl">
          Background
        </h1>

        <h2 className="mt-2 text-lg font-medium tracking-wide drop-shadow-md sm:text-2xl md:text-3xl">
          Layout Artist
        </h2>

        <h3 className="mt-3 text-xs font-light tracking-[0.15em] text-white/85 sm:text-base sm:tracking-[0.2em]">
          Line and color
        </h3>
      </div>

      {/* Software icons */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-12 w-3xs flex flex-wrap justify-center px-3
                md:left-7 md:translate-x-0 md:bottom-[68px] md:w-sm md:justify-start"
      >
        <img
          src="/images/banner/skills.png"
          alt="Creative software skills"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Social links */}
      <ul className="absolute bottom-4 left-0 flex w-full list-none items-center justify-center gap-6 px-4 text-white sm:bottom-5 sm:gap-8">
        <li>
          <a
            href="https://www.linkedin.com/in/ma%C3%ABlle-chaize-02524a240/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group block transition-colors duration-300 hover:text-[#F82173]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
            >
              <path d="M21.8789.24H2.2497C1.17715.24.24 1.01175.24 2.07175V21.7445c0 1.06575.93715 2.0155 2.0097 2.0155h19.62345c1.07835 0 1.8868-.95605 1.8868-2.0155V2.07175C23.7663 1.01175 22.9515.24 21.8789.24ZM7.5307 19.84505h-3.3695V9.3687h3.3695v10.47635ZM5.9625 7.7758h-.02415c-1.07835 0-1.7766-.8027-1.7766-1.8075 0-1.02325.71665-1.8071 1.81915-1.8071 1.10245 0 1.7771.7781 1.80125 1.8071-.0005 1.0048-.6988 1.8075-1.81965 1.8075Zm13.88255 12.06925H16.4756V14.1168c0-1.37235-.4903-2.31-1.7094-2.31-.93135 0-1.4826.63-1.7278 1.24375-.09185.22045-.1165.5208-.1165.8274v5.9671H9.552V9.3687h3.36945v1.45795c.4903-.6983 1.2563-1.7031 3.0387-1.7031 2.2118 0 3.885 1.4579 3.885 4.60105l-.00055 6.12045Z" />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/hollowdraw/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group block transition-colors duration-300 hover:text-[#F82173]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
            >
              <path d="M16.8998 2.1998c1.2985.0039 2.54265.52145 3.4608 1.4396.9181.91815 1.4357 2.1623 1.43955 3.4608v9.7996c-.00385 1.2985-.52145 2.54265-1.43955 3.4608-.91815.9181-2.1623 1.4357-3.4608 1.43955H7.1002c-1.2985-.00385-2.54265-.52145-3.4608-1.43955-.91815-.91815-1.4357-2.1623-1.4396-3.4608V7.1002c.0039-1.2985.52145-2.54265 1.4396-3.4608.91815-.91815 2.1623-1.4357 3.4608-1.4396h9.7996Zm0-1.9598H7.1002C3.327.24.24 3.327.24 7.1002v9.7996C.24 20.67295 3.327 23.76 7.1002 23.76h9.7996c3.77315 0 6.8602-3.08705 6.8602-6.8602V7.1002C23.76 3.327 20.67295.24 16.8998.24Z" />
              <path d="M12.0006 8.0799c.7753 0 1.5333.2299 2.1779.66065.6447.43075 1.1472 1.043 1.44385 1.75935.2967.7163.37435 1.50455.22305 2.26495-.15125.76045-.5246 1.45895-1.0728 2.0072-.5483.5482-1.2468.9216-2.0072 1.07285-.76045.1513-1.54865.07365-2.26495-.2231-.7164-.29665-1.3286-.7991-1.7594-1.4438-.43075-.64465-.66065-1.4026-.66065-2.1779.00115-1.0394.41455-2.03585 1.14945-2.77075.73495-.73495 1.7314-1.14835 2.77075-1.14945Zm0-1.95985c-1.16295 0-2.2998.3449-3.26675.99095-.967.64615-1.7206 1.5645-2.1656 2.63885-.44505 1.0745-.56155 2.2567-.3347 3.39735.22695 1.1406.78695 2.1883 1.60925 3.01065.8224.8223 1.87005 1.3823 3.01065 1.60925 1.14065.2269 2.32285.1104 3.39735-.3346 1.07445-.44505 1.99275-1.1987 2.63885-2.1657.64605-.96695.99095-2.10375.99095-3.2667 0-1.55945-.6195-3.0551-1.7222-4.1578s-2.59835-1.72225-4.1578-1.72225Z" />
              <path d="M18.369 7.0993c-.2907 0-.57485-.0862-.8166-.24775-.2417-.1615-.43015-.3911-.5414-.65965-.11125-.26855-.14035-.56415-.08365-.8493.05675-.2851.1967-.547.40225-.7526.2056-.20555.4675-.34555.75265-.40225.2851-.0567.5807-.0276.84925.0836.26865.1113.4982.2997.65965.54145.16155.2417.24775.5259.24775.8166.00045.19315-.0373.3845-.11105.56295-.0737.17855-.182.34075-.31855.47735-.1366.13655-.2988.2448-.4773.31855-.1785.0737-.36985.11145-.563.11105Z" />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="https://bsky.app/profile/aranwen03.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
            className="group block transition-colors duration-300 hover:text-[#F82173]"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
            >
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}

const projects = [
  {
    title: "Renne Animation Festival",
    image: "../../images/landing_page/img_1.jpg",
    link: "/rennes",
    alt: "Renne Animation Festival",
  },
  {
    title: "Catfish",
    image: "../../images/landing_page/img_2.png",
    link: "/catfish",
    alt: "Catfish",
  },
  {
    title: "Arise",
    image: "../../images/landing_page/img_3.png",
    link: "/arise",
    alt: "Arise",
  },
  {
    title: "Other Projects",
    image: "../../images/landing_page/img_4.png",
    link: "/other-projects",
    alt: "Other Projects",
  },
  {
    title: "Sous Pression",
    image: "../../images/landing_page/img_5.jpg",
    link: "/sous-pression",
    alt: "Sous Pression",
  },
  {
    title: "Sharp Potion",
    image: "../../images/landing_page/img_6.png",
    link: "/sharp-potion",
    alt: "Sharp Potion",
  },
];

import { Link } from "react-router-dom";

export default function ProjectGallery() {
  return (
    <section className="bg-[#000000] pt-12">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-6 pb-12">
        {[projects.slice(0, 3), projects.slice(3, 6)].map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {row.map((project) => (
              <Link
                key={project.title}
                to={project.link}
                className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />

                <div className="Adorn-Engraved-Expanded absolute inset-0 flex items-center justify-center bg-white/60 p-3 text-center text-xl font-semibold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>{project.title}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

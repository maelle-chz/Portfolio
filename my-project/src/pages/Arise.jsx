import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// IMAGES
const images = [
  {
    src: "../images/cauchemar-en-cuisine/img_1.png",
    alt: "Cauchemar en Cuisine - Image principale",
    title: "Cauchemar en Cuisine",
  },
  {
    src: "../images/cauchemar-en-cuisine/img_2.png",
    alt: "Cauchemar en Cuisine - Image 2",
    title: "Scene 2",
  },
  {
    src: "../images/cauchemar-en-cuisine/img_3.png",
    alt: "Cauchemar en Cuisine - Image 3",
    title: "Scene 3",
  },
  {
    src: "../images/cauchemar-en-cuisine/img_4.png",
    alt: "Cauchemar en Cuisine - Image 4",
    title: "Scene 4",
  },
];

// VIDEO
const videoSrc = "../videos/cauchemar-en-cuisine.mp4";

// SECTION TITLE
const SectionTitle = ({ children }) => (
  <h2 className="Adorn-Engraved-Expanded mb-3 text-xl underline underline-offset-8 decoration-[#7B052A]">
    {children}
  </h2>
);

// IMAGE TILE
const Tile = ({ image, onOpen }) => (
  <div className="group relative overflow-hidden rounded-xs">
    <img
      src={image.src}
      alt={image.alt}
      onClick={onOpen}
      loading="lazy"
      className="h-full w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
    />

    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#7B052A]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
        {image.title}
      </p>
    </div>
  </div>
);

// MODAL BUTTON STYLE
const btn =
  "fixed z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#7B052A] hover:text-white focus-visible:outline-2 focus-visible:outline-[#7B052A]";

export default function CauchemarEnCuisine() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const step = (direction) => {
    setSelectedImageIndex(
      (current) =>
        (current + direction + images.length) % images.length
    );
  };

  return (
    <main className="min-h-screen bg-[#212121] text-white">
      <Navbar />

      {/* INTRODUCTION + PROJECT INFORMATION */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h1 className="Adorn-Engraved-Expanded mb-12 text-center text-4xl font-bold">
          Cauchemar en Cuisine
        </h1>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* PROJECT INFORMATION - LEFT */}
          <div className="space-y-7 text-base leading-relaxed">

            <p className="text-lg leading-relaxed">
              Affiche animée du Festival national du film d'animation
              2025, une pastille de 20 secondes réalisée en collaboration
              avec Axelle Royer, Elisanne Mombelli, Alice Chen et
              Léa Fritsch. J'ai participé au chara design, à l'animation
              et au compositing.
            </p>

            <div>
              <SectionTitle>Année</SectionTitle>
              <p className="text-xl">2025</p>
            </div>

            <div>
              <SectionTitle>Durée du projet</SectionTitle>
              <p className="text-xl">3 mois</p>
            </div>

            <div>
              <SectionTitle>Titre</SectionTitle>
              <p className="text-xl">Cauchemar en Cuisine</p>
            </div>

            <div>
              <SectionTitle>Genre</SectionTitle>
              <p className="text-xl">Cartoon comique</p>
            </div>

            <div>
              <SectionTitle>Durée estimée</SectionTitle>
              <p className="text-xl">20 secondes</p>
            </div>

            <div>
              <SectionTitle>Réalisateurs</SectionTitle>
              <p className="text-lg">
                Axelle ROYER, Elisanne MOMBELLI, Alice CHEN,
                Léa FRITSCH et Samanda MASDURAUD URREA
              </p>
            </div>

            <div>
              <SectionTitle>Réalisation</SectionTitle>
              <p className="text-lg">
                Réalisation d'une pastille vidéo d'introduction à
                partir des éléments graphiques de l'affiche réalisée
                par Gilles Cuvelier et des éléments du festival
                envoyés par l'AFCA.
              </p>
            </div>

          </div>

          {/* FIRST IMAGE - RIGHT */}
          <Tile
            image={images[0]}
            onOpen={() => setSelectedImageIndex(0)}
          />

        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="overflow-hidden rounded-xs">
          <video
            src={videoSrc}
            controls
            playsInline
            className="w-full"
          >
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>

      </section>

      {/* THREE IMAGES */}
      <section className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

          {images.slice(1).map((image, index) => (
            <Tile
              key={image.src}
              image={image}
              onOpen={() => setSelectedImageIndex(index + 1)}
            />
          ))}

        </div>

        {/* POSTER CREDIT */}
        <p className="mt-8 text-center text-sm italic text-white/70">
          Affiche réalisée par Gilles Cuvelier
        </p>

      </section>

      {/* IMAGE MODAL */}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        contentLabel="Enlarged Cauchemar en Cuisine image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >

        {selectedImage && (
          <>

            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className={`${btn} right-6 top-6`}
            >
              &times;
            </button>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className={`${btn} left-6 top-1/2 -translate-y-1/2`}
            >
              &#8249;
            </button>

            {/* SELECTED IMAGE */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[75vw] rounded-xs object-contain"
            />

            {/* NEXT */}
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className={`${btn} right-6 top-1/2 -translate-y-1/2`}
            >
              &#8250;
            </button>

            {/* IMAGE COUNTER */}
            <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>

          </>
        )}

      </Modal>

      <Footer />
    </main>
  );
}

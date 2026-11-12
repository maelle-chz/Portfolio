import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Arise() {
  const images = [
    {
      src: "../images/arise/img_1.png",
      alt: "Arise scene 1",
      title: "Scene 1",
    },
    {
      src: "../images/arise/img_2.jpg",
      alt: "Arise scene 2",
      title: "Scene 2",
    },
    {
      src: "../images/arise/img_3.png",
      alt: "Arise scene 3",
      title: "Scene 3",
    },
    {
      src: "../images/arise/img_4.png",
      alt: "Arise scene 4",
      title: "Scene 4",
    },
    {
      src: "../images/arise/img_5.png",
      alt: "Arise scene 5",
      title: "Scene 5",
    },
    {
      src: "../images/arise/img_6.png",
      alt: "Arise scene 6",
      title: "Scene 6",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const showNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Arise</h1>

        <h2 className="px-34 py-2 text-base font-medium">
          Props concept for the video game "Arise".
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-base leading-relaxed">
          <p>
            For the end of my 3rd year I did one month internship for the studio
            Hot Chili Games (a video Based on the script), I developped the
            concept of the main character's house and some surrounding graphic
            elements. Here is below the concepts I've done for the Video game
            Arise.
          </p>

          <p className="py-4">
            <span className="px-1 underline">Credit:</span>
            Concept and lineart made by Maëlle Chaize
          </p>

          <p>
            Colour and various details made by the artist of the studio Hot
            Chili Games, Victor Mauduy.
          </p>
        </div>
      </section>

      {/* Images gallery */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index)}
              className="h-72 w-full cursor-zoom-in object-cover transition-opacity hover:opacity-80"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Image modal */}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged Arise image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            {/* Close button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-black transition hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &times;
            </button>

            {/* Previous image */}
            <button
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="fixed left-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173] focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &#8249;
            </button>

            {/* Current image */}
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-[75vw] object-contain"
              />
            </div>

            {/* Next image */}
            <button
              onClick={showNextImage}
              aria-label="Next image"
              className="fixed right-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173] focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &#8250;
            </button>

            {/* Image counter */}
            <span className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-white">
              {selectedImageIndex + 1} / {images.length}
            </span>
          </>
        )}
      </Modal>

      <Footer />
    </main>
  );
}

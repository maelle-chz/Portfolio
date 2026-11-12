import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function OtherProjects() {
  const images = [
    {
      src: "../images/others/img_1.png",
      alt: "Others scene 1",
      title: "Lorem ipsum",
    },
    {
      src: "../images/others/img_2.png",
      alt: "Others scene 2",
      title: "Lorem ipsum",
    },
    {
      src: "../images/others/img_3.png",
      alt: "Others scene 3",
      title: "Lorem ipsum",
    },
    {
      src: "../images/others/img_4.png",
      alt: "Others scene 4",
      title: "Lorem ipsum",
    },
    {
      src: "../images/others/img_5.png",
      alt: "Others project",
      title: "Lorem ipsum",
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

  const imageClass = "w-full cursor-zoom-in object-cover hover:opacity-80";

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* Introduction */}
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Individual projects</h1>
      </section>

      {/* First two images */}
      <section className="mx-auto grid max-w-6xl items-start gap-3 px-6 pb-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
        {images.slice(0, 2).map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index)}
              className={`h-auto rounded-xs ${imageClass}`}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Images 3 and 4 */}
      <section
        className={`mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 pb-12 sm:px-6 sm:pb-16 ${
          images.slice(2, 4).length > 1 ? "md:grid-cols-[2fr_1fr]" : ""
        }`}
      >
        {images.slice(2, 4).map((image, index) => (
          <div
            key={image.src}
            className="group relative min-w-0 overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index + 2)}
              className={`h-auto w-full rounded-xs ${imageClass}`}
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="group relative overflow-hidden rounded-xs">
          <img
            src={images[4].src}
            alt={images[4].alt}
            onClick={() => setSelectedImageIndex(4)}
            className={`h-auto rounded-xs ${imageClass}`}
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
              {images[4].title}
            </p>
          </div>
        </div>
      </section>

      {/* Image modal */}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged project image"
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

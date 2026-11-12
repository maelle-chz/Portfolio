import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Catfish() {
  const images = [
    {
      src: "../images/catfish/img_1.jpg",
      alt: "Catfish project",
      title: "Catfish project",
    },
    {
      src: "../images/catfish/img_2.png",
      alt: "Catfish scene 1",
      title: "Scene 1",
    },
    {
      src: "../images/catfish/img_3.png",
      alt: "Catfish scene 2",
      title: "Scene 2",
    },
    {
      src: "../images/catfish/img_4.png",
      alt: "Catfish scene 3",
      title: "Scene 3",
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
      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Catfish
        </h1>

        <h2 className="mx-auto max-w-3xl px-2 py-2 text-sm font-medium sm:px-6 sm:text-base">
          The story of a hidden love
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-sm leading-relaxed sm:text-base">
          <p>
            Produced during my 4th year, "Catfish" was our personal anim'jam,
            completed within a week!
          </p>

          <p className="py-2 sm:py-4">
            The objective was to make a short film with 4 other people in just 7
            days. It was really challenging! We had to think fast and make quick
            decisions.
          </p>

          <p>
            I contributed to many tasks, such as concept art, background layout,
            and compositing. Here's the short film and some backgrounds I've
            created.
          </p>
        </div>
      </section>

      {/* Main image */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <img
          src={images[0].src}
          alt={images[0].alt}
          onClick={() => setSelectedImageIndex(0)}
          className="w-full cursor-zoom-in rounded-xs"
        />
      </section>

      {/* Video */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <video
          className="w-full rounded-xs shadow-md"
          controls
          preload="metadata"
        >
          <source src="../videos/Olivia.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </section>

      {/* Last three images */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {images.slice(1).map((image, index) => (
          <div
            key={image.src}
            className="group relative overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index + 1)}
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
        contentLabel="Enlarged Catfish image"
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

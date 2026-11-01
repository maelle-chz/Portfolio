import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Rennes() {
  const images = [
    {
      src: "../images/rennes/img_1.png",
      alt: "Rennes scene 1",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_2.png",
      alt: "Rennes scene 2",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_3.png",
      alt: "Rennes scene 3",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_4.jpg",
      alt: "Rennes scene 4",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_5.jpg",
      alt: "Rennes scene 5",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_6.png",
      alt: "Rennes scene 6",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_7.png",
      alt: "Rennes scene 7",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_8.png",
      alt: "Rennes scene 8",
      title: "Lorem ipsum",
    },
    {
      src: "../images/rennes/img_9.png",
      alt: "Rennes scene 9",
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

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6 sm:py-12">
        <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
          Rennes animation festival
        </h1>

        <h2 className="mx-auto max-w-3xl px-2 py-2 text-sm font-medium leading-relaxed text-white sm:px-6 sm:text-base">
          One of the many intros at the 2025 "National Animated Film Festival"
          in Rennes, France
        </h2>

        <div className="mx-auto max-w-4xl space-y-4 text-sm leading-relaxed sm:text-base">
          <p>
            In my 4th year, we had to make, competing with other schools, an
            animated introduction based on the poster of the 2025 edition of
            "The National Animated Film Festival". We had to make vertical and
            horizontal versions.
          </p>

          <p className="py-2 sm:py-4">
            Our project was selected to be one of the intros before the
            screening!
          </p>

          <p>Here's some of the backgrounds I made for this 3-month project.</p>
        </div>
      </section>
      
      {/* Images gallery */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="group relative h-55 overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index)}
              className="h-55 w-full cursor-zoom-in object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="Adorn-Engraved-Expanded px-2 text-center text-xl text-white">
                {image.title}
              </p>
            </div>
          </div>
        ))}
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
      {/* Image modal */}
      <Modal
        isOpen={selectedImageIndex !== null}
        onRequestClose={() => setSelectedImageIndex(null)}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        contentLabel="Enlarged Rennes image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            <button
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-bold text-black transition hover:bg-[#F82173] hover:text-white"
            >
              &times;
            </button>

            <button
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="fixed left-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173]"
            >
              &#8249;
            </button>

            <div className="flex h-full w-full items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[85vh] max-w-[75vw] rounded-xs object-contain"
              />
            </div>

            <button
              onClick={showNextImage}
              aria-label="Next image"
              className="fixed right-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-3xl text-white transition hover:bg-[#F82173]"
            >
              &#8250;
            </button>

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

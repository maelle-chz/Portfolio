import { useState } from "react";
import Modal from "react-modal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function SousPression() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const images = Array.from({ length: 17 }, (_, i) => {
    const index = i + 1;

    return {
      src: `../images/sous-pression/img_${index}.${index === 2 ? "png" : "jpg"}`,
      alt: `Sous Pression scene ${index}`,
      title: [
        "Affiche film",
        "Colorscript",
        "Affiche promotionnelle",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ][i],
    };
  });

  const selectedImage =
    selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const showNextImage = () => {
    setSelectedImageIndex((current) => (current + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedImageIndex(
      (current) => (current - 1 + images.length) % images.length,
    );
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      {/* Introduction */}

      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Sous Pression</h1>

        <h2 className="py-2 text-base font-medium">
          My 5th year project, work in progress
        </h2>

        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed">
          <p>
            For this project I'm mainly working on the visual developpement,
            backgrounds and compositing.
          </p>

          <p className="Adorn-Engraved-Expanded py-4">Story:</p>

          <p className="italic">
            In the middle of a parisian party, Stud is pushed by her best
            friend, Jessica, to go buy some alcohol. Forced to team up with
            Arthur, a small, eccentric guy, who's a fan of the medieval times;
            this small journey will test not only Stud's patience, but also the
            vision they have of Jessica.
          </p>
        </div>
      </section>

      {/* Image gallery */}

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2">
        {images.slice(0, 16).map((image, index) => (
          <div
            key={image.src}
            className="group relative h-72 w-full overflow-hidden rounded-xs"
          >
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => setSelectedImageIndex(index)}
              className="h-full w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
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
            src={images[16].src}
            alt={images[16].alt}
            onClick={() => setSelectedImageIndex(16)}
            className="w-full cursor-zoom-in object-cover transition-opacity duration-300 group-hover:opacity-60"
          />


          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#F82173]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="Adorn-Engraved-Expanded px-2 text-center text-4xl text-white">
              {images[16].title}
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
        contentLabel="Enlarged Sous Pression image"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        className="outline-none"
      >
        {selectedImage && (
          <>
            <button
              type="button"
              onClick={() => setSelectedImageIndex(null)}
              aria-label="Close image"
              className="fixed right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl font-bold text-black transition-colors hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &times;
            </button>

            <button
              type="button"
              onClick={showPreviousImage}
              aria-label="Previous image"
              className="fixed left-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &#8249;
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] max-w-[75vw] rounded-xs object-contain"
            />

            <button
              type="button"
              onClick={showNextImage}
              aria-label="Next image"
              className="fixed right-6 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-3xl text-black transition-colors hover:bg-[#F82173] hover:text-white focus-visible:outline-2 focus-visible:outline-[#F82173]"
            >
              &#8250;
            </button>

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

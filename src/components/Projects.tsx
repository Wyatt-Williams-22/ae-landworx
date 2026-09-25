import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { projectCategories } from "../data/projects";

type GalleryPhoto = {
  src: string;
  alt: string;
  categoryId: string;
  categoryTitle: string;
};

export default function Projects() {
  const [activeId, setActiveId] = useState<(typeof projectCategories)[number]["id"]>(
    projectCategories[0].id,
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = useMemo<GalleryPhoto[]>(() => {
    const category = projectCategories.find((item) => item.id === activeId);
    if (!category) return [];

    return category.photos.map((photo) => ({
      ...photo,
      categoryId: category.id,
      categoryTitle: category.title,
    }));
  }, [activeId]);

  const activeCategory = projectCategories.find((item) => item.id === activeId);
  const lightboxPhoto =
    lightboxIndex !== null ? (photos[lightboxIndex] ?? null) : null;

  const closeLightbox = () => setLightboxIndex(null);

  const showPrevious = () => {
    setLightboxIndex((current) => {
      if (current === null || photos.length === 0) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  };

  const showNext = () => {
    setLightboxIndex((current) => {
      if (current === null || photos.length === 0) return current;
      return (current + 1) % photos.length;
    });
  };

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeId]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
        return;
      }

      if (photos.length <= 1) return;

      if (event.key === "ArrowLeft") {
        setLightboxIndex(
          (current) =>
            current === null
              ? current
              : (current - 1 + photos.length) % photos.length,
        );
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex(
          (current) =>
            current === null ? current : (current + 1) % photos.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, photos.length]);

  return (
    <section id="projects" className="bg-brand-green-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-brand-purple-600">
            Our Work
          </span>
          <h2 className="font-display mt-3 text-3xl text-brand-ink-900 sm:text-4xl">
            Completed Projects
          </h2>
          <p className="mt-4 text-lg text-brand-ink-700/80">
            {activeCategory?.description}
          </p>
        </div>

        <div
          className="mt-10 flex justify-center overflow-x-auto"
          role="tablist"
          aria-label="Project categories"
        >
          <div className="inline-flex gap-1 border-b border-brand-ink-900/10">
            {projectCategories.map((category) => {
              const isActive = activeId === category.id;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className={`relative whitespace-nowrap px-4 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-brand-ink-900"
                      : "text-brand-ink-700/55 hover:text-brand-ink-900"
                  }`}
                >
                  {category.label}
                  <span
                    className={`absolute inset-x-2 -bottom-px h-0.5 rounded-full transition-all ${
                      isActive
                        ? "bg-brand-green-500 opacity-100"
                        : "bg-transparent opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={activeId}
          className="animate-fade-in mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4"
        >
          {photos.map((photo, index) => (
            <button
              type="button"
              key={photo.src}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-ink-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green-500"
              aria-label={`View ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="pointer-events-none absolute inset-0 bg-brand-ink-900/0 transition-colors duration-300 group-hover:bg-brand-ink-900/15" />
            </button>
          ))}
        </div>
      </div>

      {lightboxPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-brand-ink-900/92 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxPhoto.alt}
          onClick={closeLightbox}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white">
                {lightboxPhoto.alt}
              </p>
              <p className="text-xs text-white/55">
                {lightboxPhoto.categoryTitle} · {lightboxIndex + 1} of{" "}
                {photos.length}
              </p>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              className="shrink-0 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close photo"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-16">
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-4"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-4"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <img
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              className="max-h-full max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { CarouselContent } from "../content/sections";

type CarouselSectionProps = {
  content: CarouselContent;
};

export const CarouselSection = ({ content }: CarouselSectionProps) => {
  const [index, setIndex] = useState(0);
  const slides = content.slides;
  const slideCount = slides.length;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Control video playback based on active slide
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play().catch(() => {
            // Ignore play errors (e.g., autoplay policy restrictions)
          });
        } else {
          video.pause();
        }
      }
    });
  }, [index]);

  const go = (direction: number) => {
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return slideCount - 1;
      if (next >= slideCount) return 0;
      return next;
    });
  };

  return (
    <section className="section carousel">
      <div className="carousel__copy">
        <p className="eyebrow">Gezgin Bakış</p>
        <h2>{content.heading}</h2>
        <p>{content.intro}</p>
        <div className="carousel__controls">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Önceki slayt"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Sonraki slayt"
          >
            &gt;
          </button>
        </div>
        <div className="carousel__dots" role="tablist">
          {slides.map((slide, dotIndex) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`${slide.title} slaydına git`}
              role="tab"
              className={clsx({ active: dotIndex === index })}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      </div>
      <div className="carousel__viewport">
        {slides.map((slide, slideIndex) => (
          <article
            key={slide.title}
            className={clsx("carousel__card", { active: slideIndex === index })}
          >
            {slide.video ? (
              <video
                ref={(el) => {
                  videoRefs.current[slideIndex] = el;
                }}
                src={slide.video}
                poster={slide.poster || slide.image}
                muted
                loop
                playsInline
                className="carousel__video"
              />
            ) : (
              slide.image && <img src={slide.image} alt={slide.title} />
            )}
            <div className="carousel__card-body">
              {slide.tag ? <span className="tag">{slide.tag}</span> : null}
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

import * as React from "react";
import { CarouselProps } from "./carousel.interface";
import * as bootstrap from "bootstrap";
import "./carousel.scss";

const Carousel: React.FC<CarouselProps> = ({ title, slidesSrcs }) => {
  const carouselRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const carousel = new bootstrap.Carousel(carouselRef.current, {
    interval: 2500,
  });

  return (
    <div className="carousel-wrapper">
      <h2>{title}</h2>
      <div
        ref={carouselRef}
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {slidesSrcs?.length > 0 &&
            slidesSrcs.map(({ src, alt }, i) => (
              <div
                key={i.toString()}
                className={i === 0 ? `carousel-item active` : `carousel-item`}
              >
                <img src={src} className="d-block w-100" alt={alt} />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export { Carousel };

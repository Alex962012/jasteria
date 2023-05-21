import { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.css";

export const Slider = ({ children }: any) => {
  const PAGE_WIDTH = 600;
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            maxWidth: `${PAGE_WIDTH}px`,
            minWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);
  const onClickLeftArrow = () => {
    setOffset((currentOffset: any) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const onClickRightArrow = () => {
    setOffset((currentOffset: any) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className="slider-container">
      <div
        className={offset === 0 ? "button hidden" : "button left-button "}
        onClick={() => onClickLeftArrow()}
      >
        <svg
          className="slider-button-svg"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
        </svg>
      </div>

      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <div
        className={
          offset === -((pages.length - 1) * PAGE_WIDTH)
            ? "button hidden"
            : "button right-button"
        }
        onClick={() => onClickRightArrow()}
      >
        <svg
          className="slider-button-svg"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
        </svg>
      </div>
    </div>
  );
};

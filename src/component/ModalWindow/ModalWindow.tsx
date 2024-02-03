import { Link } from "react-router-dom";
import { Slider } from "../Slider/Slider";
import "./ModalWindow.css";
import { useState } from "react";
type ModalProps = {
  active: boolean;
  setActive: (value: boolean) => void;
  title: string;
  imageUrl: Array<string>;
  description: string;
  price: number;
  toggleModal: any;
};
export const Modal = ({
  active,
  setActive,
  title,
  imageUrl,
  description,
  price,
  toggleModal,
}: ModalProps) => {
  const [offset, setOffset] = useState(0);

  const firstPicture = () => {
    setOffset(0);
  };
  const timeOut = () => {
    setTimeout(firstPicture, 1000);
  };
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        toggleModal();
        timeOut();
      }}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <Slider offset={offset} setOffset={setOffset}>
          {imageUrl.map((image, id) => {
            return (
              <div key={id}>
                <div
                  style={{
                    backgroundImage: `url(https://jasteria.ru/images/${image})`,
                  }}
                  className="slider-img"
                />
              </div>
            );
          })}
        </Slider>
        <div className="modal-content-container">
          <div className="close-modal-container">
            <div
              className="close-modal"
              onClick={() => {
                setActive(false);
                toggleModal();
                timeOut();
              }}
            >
              <svg
                className="close-modal-icon"
                data-name="Layer 1"
                height="200"
                id="Layer_1"
                viewBox="0 0 200 200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
              </svg>
            </div>
          </div>
          <div className="modal-description-container">
            <div className="modal-title">{title}</div>
            <div className="modal-price">{price} руб.</div>
            <div className="modal-description">{description}</div>

            <Link className="modal-button-order" to="/feedback">
              Заказать
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

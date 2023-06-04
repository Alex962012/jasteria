import { Slider } from "../Slider/Slider";
import "./Modal.css";
type ModalProps = {
  active: boolean;
  setActive: (value: boolean) => void;
  title: string;
  images: Array<string>;
  description: string;
  price: number;
};
export const Modal = ({
  active,
  setActive,
  title,
  images,
  description,
  price,
}: ModalProps) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <Slider>
          {images.map((image, id) => {
            return (
              <div key={id}>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="slider-img"
                />
              </div>
            );
          })}
        </Slider>
        <div className="modal-content-container">
          <div className="close-modal-container">
            <div className="close-modal" onClick={() => setActive(false)}>
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
            <div className="modal-button-order">Заказать</div>
          </div>
        </div>
      </div>
    </div>
  );
};

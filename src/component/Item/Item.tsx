import { Dispatch, useState } from "react";
import "./Item.css";
import { Modal } from "../ModalWindow/ModalWindow";
export type ItemProps = {
  id: number;
  imageUrl: Array<string>;
  title: string;
  price: number;
  season: number;
  description: string;
  typeYarn: 0;
  homePage: string;
  label: string;
  toggleModal: any;
};
export const Item = ({
  imageUrl,
  title,
  price,
  id,
  description,
  label,
  toggleModal,
}: ItemProps) => {
  const [active, setActive] = useState(false);

  const onClickModal = () => {
    setActive(true);
  };

  return (
    <div className="order-item">
      <img
        src={`https://jasteria.ru/images/${imageUrl[0]}`}
        alt={title}
        className="item-picture"
        onClick={() => {
          onClickModal();
          toggleModal();
        }}
      ></img>
      <div className="item-title-container">
        <div
          className="item-name"
          onClick={() => {
            onClickModal();
            toggleModal();
          }}
        >
          {title}
        </div>
      </div>
      <div className="item-price">{price} руб.</div>
      <Modal
        key={id}
        active={active}
        setActive={setActive}
        title={title}
        imageUrl={imageUrl}
        description={description}
        price={price}
        label={label}
        toggleModal={toggleModal}
      />
    </div>
  );
};

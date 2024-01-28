import { useState } from "react";
import "./Item.css";
import { Modal } from "../ModalWindow/ModalWindow";
export type ItemProps = {
  id: number;
  imageUrl:  Array<string>;
  title: string;
  price: number;
  season: number;
  description: string;
  typeYarn: 0;
  homePage:string
};
export const Item = ({
  imageUrl,
  title,
  price,
  id,
  description,
}: ItemProps) => {
  const [active, setActive] = useState(false);

  const onClickModal = () => {
    setActive(true);
  };

  return (
    <div 
    className="order-item"
    >
      <img
        src={
        // `https://jasteria.ru

        `http://localhost:5000/images/${imageUrl[0]}`}
        alt={title}
        className="item-picture"
        onClick={() => onClickModal()}
      ></img>
      <div className="item-title-container">
        <div className="item-name" onClick={() => onClickModal()}>
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
      />
    </div>
  );
};

import { useState } from "react";
import "./Item.css";
import { Modal } from "../ModalWindow/ModalWindow";
export type ItemProps = {
  id: any;
  imageUrl: string;
  title: string;
  price: number;
  season: number;
  images: Array<string>;
  description: string;
  typeYarn: 0;
};
export const Item = ({
  imageUrl,
  title,
  price,
  images,
  id,
  description,
}: ItemProps) => {
  const [active, setActive] = useState(false);

  const onClickModal = () => {
    setActive(true);
  };
  return (
    <div className="order-item">
      <img
        src={imageUrl}
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
        images={images}
        description={description}
        price={price}
      />
    </div>
  );
};

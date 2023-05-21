import { useState } from "react";
import "./Item.css";
import { Modal } from "../Modal/Modal";
export type ItemProps = {
  imageUrl: string;
  title: string;
  price: string;
  id: number;
  images: Array<string>;
  description: string;
  category: number;
};
export const Item = ({
  imageUrl,
  title,
  price,
  images,
  id,
  description,
}: ItemProps) => {
  const [like, setLike] = useState(false);
  const [active, setActive] = useState(false);
  const onClickLike = () => {
    setLike(!like);
  };
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
        <div className="item-name">{title}</div>
        <div
          className={like ? "item-like-active" : "item-like"}
          onClick={() => onClickLike()}
        ></div>
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

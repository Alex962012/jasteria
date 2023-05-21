import { Item, ItemProps } from "../../component/Item/Item";
import { SessionCollectionProps } from "../../component/SessonCollection/SessonCollection";
import { ItemsProps } from "../Home/Home";
import "./Catalog.css";

export const Catalog = ({ items }: ItemsProps) => {
  let res: ItemProps[] = [];
  items.map((el: SessionCollectionProps) => res.push(...el.items));
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <div className="content-order">
        {res.map((item: ItemProps, index) => (
          <Item {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

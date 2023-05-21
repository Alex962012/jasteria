import { Item, ItemProps } from "../../component/Item/Item";
import { SessionCollectionProps } from "../../component/SessonCollection/SessonCollection";
import "./Catalog.css";
const items = require("../../items.json");
let res: ItemProps[] = [];
items.map((el: SessionCollectionProps) => res.push(...el.items));

export const Catalog = () => {
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

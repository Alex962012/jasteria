import { Item, ItemProps } from "../component/Item/Item";
const items = require("../items.json");
export const Catalog = () => {
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <div className="content-order">
        {items.map((el: ItemProps) => (
          <Item {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

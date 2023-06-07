import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import "./Catalog.css";

const categories = ["Все", "ангора", "полушерсть", "меринос"];
export const Catalog = ({
  items,
  isLoading,
  activeCategory,
  onClickCategory,
}: any) => {
  console.log(isLoading);
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <div className="content-order">
        <ul className="category-container">
          {categories.map((category, i) => {
            return (
              <li
                key={i}
                onClick={() => onClickCategory(i)}
                className={
                  activeCategory === i
                    ? "category-item-active category-item"
                    : "category-item"
                }
              >
                {category}
              </li>
            );
          })}
        </ul>
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <Skeleton key={index} className="skelet" count={1} />
            ))
          : items.map((item: ItemProps, index: number) => (
              <Item {...item} key={index} />
            ))}
      </div>
    </div>
  );
};

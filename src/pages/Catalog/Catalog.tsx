import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import { SessionCollectionProps } from "../../component/SessonCollection/SessonCollection";
import { ItemsProps } from "../Home/Home";
import "./Catalog.css";
import { useState } from "react";
const categories = ["ангора", "полушерсть"];
export const Catalog = ({ items, isLoading }: ItemsProps) => {
  const [activeCategory, setActiveCategory] = useState(0);
  let res: ItemProps[] = [];
  items.map((el: SessionCollectionProps) => res.push(...el.items));
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
                className={
                  activeCategory === i
                    ? "category-item-active category-item"
                    : "category-item"
                }
                onClick={() => setActiveCategory(i)}
              >
                {category}
              </li>
            );
          })}
        </ul>
        {isLoading
          ? [...new Array(6)].map((_, index) => (
              <Skeleton key={index} count={6} />
            ))
          : res.map((item: ItemProps, index: number) => (
              <Item {...item} key={index} />
            ))}
      </div>
    </div>
  );
};

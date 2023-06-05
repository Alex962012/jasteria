import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import { Item, ItemProps } from "../../component/Item/Item";
import { SessionCollectionProps } from "../../component/SessonCollection/SessonCollection";
// import Skeleton from "../../component/Skeleton/Skeleton";
import { ItemsProps } from "../Home/Home";
import "./Catalog.css";

export const Catalog = ({ items, isLoading }: ItemsProps) => {
  let res: ItemProps[] = [];
  items.map((el: SessionCollectionProps) => res.push(...el.items));
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <div className="content-order">
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

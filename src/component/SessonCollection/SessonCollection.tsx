import { Link } from "react-router-dom";
import { Item, ItemProps } from "../Item/Item";
import "./SessonCollection.css";
import Skeleton from "react-loading-skeleton";
export type SessionCollectionProps = {
  items: Array<ItemProps>;
  isLoading: boolean;
};

export const SessionCollection = ({
  items,
  isLoading,
}: SessionCollectionProps) => {

  return (
    <div className="session-container">
      <div className="session-title-container">
        <div className="session-title">МОДЕЛИ</div>
        <Link to="/catalog">
          <div className="session-button">
            Перейти в каталог
      
          </div>
        </Link>
      </div>
      <div className="item-session-container">
        
        {isLoading
          ? [...new Array(3)].map((_, index) => (
              <Skeleton key={index} className="skelet" count={1} />
            ))
          : items.map((item: ItemProps, index: number) =>
              index > 2 ? "" : <Item key={index} {...item} />
            )}
      </div>
    </div>
  );
};

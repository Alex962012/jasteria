import { Link } from "react-router-dom";
import { Item, ItemProps } from "../Item/Item";
import "./SessonCollection.css";
import Skeleton from "react-loading-skeleton";
export type SessionCollectionProps = {
  items: Array<ItemProps>;
  isLoading: boolean;
  index: number;
};
const categoryGrosery = ["Зимняя коллекция", "Коллекция осень/весна"];
export const SessionCollection = ({
  items,
  isLoading,
  index,
}: SessionCollectionProps) => {
  return (
    <div className="session-container">
      <div className="session-title-container">
        <div className="session-title">{categoryGrosery[index]}</div>

        <Link to="/catalog">
          <div className="session-button">
            Перейти в каталог
            <svg
              className="session-button-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2" id="Layer_2">
                <path d="M15.31,6.85a1,1,0,0,0,1,1h6.51L6.17,24.5a1,1,0,0,0,1.41,1.41L24.21,9.28v6.46a1,1,0,1,0,2,0v-9a.9.9,0,0,0-.9-.9h-9A1,1,0,0,0,15.31,6.85Z" />
              </g>
            </svg>
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

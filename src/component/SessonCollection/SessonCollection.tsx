import { Link } from "react-router-dom";
import { Item, ItemProps } from "../Item/Item";
import "./SessonCollection.css";
import Skeleton from "../Skeleton/Skeleton";
export type SessionCollectionProps = {
  category: number;
  items: Array<ItemProps>;
};
const categoryGrosery = ["Зимняя коллекция", "Коллекция осень/весна"];
export const SessionCollection = ({ category, items, isLoading }: any) => {
  return (
    <div className="session-container">
      <div className="session-title-container">
        <div className="session-title">{categoryGrosery[category]}</div>

        <Link to="/catalog">
          <div className="session-button">
            SHOW MORE
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
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item: ItemProps, index: number) =>
              index > 2 ? "" : <Item {...item} key={index} />
            )}
      </div>
    </div>
  );
};

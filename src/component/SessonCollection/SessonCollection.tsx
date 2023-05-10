import { Item, ItemProps } from "../Item/Item";
import "./SessonCollection.css";
type SessionCollectionProps = {
  title: string;
  items: Array<ItemProps>;
};
export const SessionCollection = ({ title, items }: SessionCollectionProps) => {
  return (
    <div className="session-container">
      <div className="session-title-container">
        <div className="session-title">{title}</div>
        <div className="session-button">SHOW MORE</div>
      </div>
      <div className="item-session-container">
        {items.map((item) => (
          <Item {...item} />
        ))}
      </div>
    </div>
  );
};

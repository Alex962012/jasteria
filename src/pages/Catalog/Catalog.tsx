import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import "./Catalog.css";
import { CategoriesList } from "../../component/CategoriesList/CategoriesList";

export const Catalog = ({
  items,
  isLoading,
  activeYarn,
  onClickYarn,
  activeName,
  onClickName,
  activeSeason,
  onClickSeason,
}: any) => {
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <CategoriesList
        activeYarn={activeYarn}
        onClickYarn={onClickYarn}
        activeName={activeName}
        onClickName={onClickName}
        activeSeason={activeSeason}
        onClickSeason={onClickSeason}
      ></CategoriesList>
      <div className="content-order">
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

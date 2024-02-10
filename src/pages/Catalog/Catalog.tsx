import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import "./Catalog.css";
import { CategoriesList } from "../../component/CategoriesList/CategoriesList";
import { Dispatch, useContext } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { categoryContext } from "../../App";

interface ICatalog {
  isLoadingCatalog: boolean;
  setIsLoadingCatalog: Dispatch<React.SetStateAction<boolean>>;
  toggleModal: any;
  onChangeActiveName: any;
  onChangeActiveYarn: any;
  onChangeActiveSeason: any;
}

export const Catalog = ({
  isLoadingCatalog,
  toggleModal,
  onChangeActiveName,
  onChangeActiveSeason,
  onChangeActiveYarn,
}: ICatalog) => {
  const activeName = useSelector((state: RootState) => state.filter.activeName);
  const activeYarn = useSelector((state: RootState) => state.filter.activeYarn);
  const activeSeason = useSelector(
    (state: RootState) => state.filter.activeSeason
  );

  const itemsCategory = useContext(categoryContext);
  return (
    <div className="catalog-wrapper">
      <div className="order-section">
        <div className="order-section--title">
          Вы можете заказать любое изделие из каталога по своим меркам
        </div>

        <CategoriesList
          activeYarn={activeYarn}
          onClickYarn={onChangeActiveYarn}
          activeName={activeName}
          onClickName={onChangeActiveName}
          activeSeason={activeSeason}
          onClickSeason={onChangeActiveSeason}
        ></CategoriesList>

        <div className="content-order">
          {isLoadingCatalog
            ? [...new Array(3)].map((_, index) => (
                <Skeleton key={index} className="skelet" count={1} />
              ))
            : itemsCategory.map((item: ItemProps, index: number) => (
                <Item {...item} toggleModal={toggleModal} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

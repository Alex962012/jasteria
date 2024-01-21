import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import "./Catalog.css";
import { CategoriesList } from "../../component/CategoriesList/CategoriesList";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveName,
  setActiveSeason,
  setActiveYarn,
} from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";


interface ICatalog {
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const Catalog = ({ isLoading, setIsLoading }: ICatalog) => {

  const dispatch = useDispatch();
  const [itemsCategory, setItemsCategory] = useState([]);
  const activeName = useSelector((state: RootState) => state.filter.activeName);
  const activeYarn = useSelector((state: RootState) => state.filter.activeYarn);
  const activeSeason = useSelector(
    (state: RootState) => state.filter.activeSeason
  );

  const typeYarn = activeYarn !=='0' ? `yarn=${activeYarn}` : "yarn=0";
  const typeName = activeName !=='0' ? `type=${activeName}` : "type=0";
  const typeSeason = activeSeason !=='0' ? `season=${activeSeason}` : "season=0";

  const onChangeActiveName = (i: SetStateAction<string>) => {
    dispatch(setActiveName(i));
  };
  const onChangeActiveYarn = (i: SetStateAction<string>) => {
    dispatch(setActiveYarn(i));
  };
  const onChangeActiveSeason = (i: SetStateAction<string>) => {

    dispatch(setActiveSeason(i));
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetch(
      `https://jasteria.ru/api/newProducts/filter?${typeName}${
        typeName ? "&" : ""
      }${typeYarn}${typeYarn ? "&" : ""}${typeSeason}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
      });
  }, [typeYarn, typeName, typeSeason, setIsLoading]);

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
        {isLoading
          ? [...new Array(3)].map((_, index) => (
              <Skeleton key={index} className="skelet" count={1} />
            ))
          : itemsCategory.map((item: ItemProps, index: number) => (
              <Item {...item} key={index} />
            ))}
      </div>
    </div>
    </div>
  );
};

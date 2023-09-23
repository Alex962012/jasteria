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
  setFilter,
} from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";
import qs from "qs";
import { useNavigate } from "react-router-dom";
interface ICatalog {
  isLoading: boolean;
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
}

export const Catalog = ({ isLoading, setIsLoading }: ICatalog) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [itemsCategory, setItemsCategory] = useState([]);
  const activeName = useSelector((state: RootState) => state.filter.activeName);
  const activeYarn = useSelector((state: RootState) => state.filter.activeYarn);
  const activeSeason = useSelector(
    (state: RootState) => state.filter.activeSeason
  );

  const typeYarn = activeYarn > -1 ? `typeYarn=${activeYarn}` : "";
  const typeName = activeName > -1 ? `typeName=${activeName}` : "";
  const typeSeason = activeSeason > -1 ? `season=${activeSeason}` : "";

  const yarn = activeYarn > 0 ? `${activeYarn}` : "";
  const name = activeName > 0 ? `${activeName}` : "";
  const season = activeSeason > 0 ? `${activeSeason}` : "";
  const onChangeActiveName = (i: SetStateAction<number>) => {
    dispatch(setActiveName(i));
  };
  const onChangeActiveYarn = (i: SetStateAction<number>) => {
    dispatch(setActiveYarn(i));
  };
  const onChangeActiveSeason = (i: SetStateAction<number>) => {
    dispatch(setActiveSeason(i));
  };

  // useEffect(() => {
  //   const res = window.location.href.indexOf("?");

  //   if (window.location.href.substring(res + 1)) {
  //     const params = qs.parse(window.location.href.substring(res + 1));
  //     // dispatch(setFilter({ ...params }));
  //     console.log(params);
  //   }
  // }, []);

  // http://localhost:5000/newProducts/
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    fetch(
      `https://jasteria-alex962012.amvera.io/newProducts/filter?${typeName}${
        typeName ? "&" : ""
      }${typeYarn}${typeYarn ? "&" : ""}${typeSeason}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
      });
  }, [typeYarn, typeName, typeSeason, setIsLoading]);
  // useEffect(() => {
  //   const queryString = qs.stringify({
  //     yarn,
  //     name,
  //     season,
  //   });
  //   navigate(`?${queryString}`);
  // }, [navigate, name, season, yarn]);
  return (
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
          ? [...new Array(6)].map((_, index) => (
              <Skeleton key={index} className="skelet" count={1} />
            ))
          : itemsCategory.map((item: ItemProps, index: number) => (
              <Item {...item} key={index} />
            ))}
      </div>
    </div>
  );
};

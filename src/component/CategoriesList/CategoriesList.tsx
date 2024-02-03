import { Dispatch, useCallback, useEffect, useState } from "react";
import { Categories } from "../Categories/Categories";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeasons } from "../../redux/slices/seasons";
import { fetchYarns } from "../../redux/slices/yarns";
import { fetchTypes } from "../../redux/slices/types";
import { RootState } from "../../redux/store";
interface ICategoryList {
  activeYarn: string;
  onClickYarn: Dispatch<React.SetStateAction<string>>;
  activeName: string;
  onClickName: Dispatch<React.SetStateAction<string>>;
  activeSeason: string;
  onClickSeason: Dispatch<React.SetStateAction<string>>;
}

interface ICategory {
  id: number;
  title: string;
  categories: any;
  activeCategory: string;
  onClick: Dispatch<React.SetStateAction<string>>;
}
export interface IObj {
  _id: string;
  name: string;
  _v: number;
}
export const CategoriesList = ({
  activeYarn,
  onClickYarn,
  activeName,
  onClickName,
  activeSeason,
  onClickSeason,
}: ICategoryList) => {
  const seasonCategoriesArray = [{ _id: "0", name: "Все" }];
  const yarnCategoriesArray = [{ _id: "0", name: "Все" }];
  const typeCategoriesArray = [{ _id: "0", name: "Все" }];
  const { seasons } = useSelector((state: RootState) => state.seasons);
  const { types } = useSelector((state: RootState) => state.types);
  const { yarns } = useSelector((state: RootState) => state.yarns);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSeasons());
    dispatch(fetchYarns());
    dispatch(fetchTypes());
  }, [dispatch]);

  const slice = (obj: IObj) => {
    let res = { _id: "0", name: "" };
    let n = obj.name[0].toUpperCase() + obj.name.substr(1);
    res.name = n;
    res._id = obj._id;
    return res;
  };
  seasons.items.forEach((item: IObj) => {
    seasonCategoriesArray.push(slice(item));
  });
  yarns.items.forEach((item: IObj) => {
    yarnCategoriesArray.push(slice(item));
  });

  types.items.forEach((item: IObj): void => {
    typeCategoriesArray.push(slice(item));
  });

  const categoriesArray = [
    {
      id: 0,
      title: "Вид пряжи",
      categories: yarnCategoriesArray,
      activeCategory: activeYarn,
      onClick: onClickYarn,
    },
    {
      id: 2,
      title: "Сезон",
      categories: seasonCategoriesArray,
      activeCategory: activeSeason,
      onClick: onClickSeason,
    },
    {
      id: 1,
      title: "Вид изделия",
      categories: typeCategoriesArray,
      activeCategory: activeName,
      onClick: onClickName,
    },
  ];
  const [activeGroup, setActiveGroup] = useState();
  const switchGroup = useCallback((title: undefined) => {
    setActiveGroup((activeTitle) =>
      activeTitle === title ? undefined : title
    );
  }, []);

  return (
    <div className="categories-list">
      {categoriesArray.map((category: ICategory) => (
        <Categories
          key={category.id}
          activeCategory={category.activeCategory}
          onClick={category.onClick}
          title={category.title}
          categories={category.categories}
          activeGroup={activeGroup}
          switchGroup={switchGroup}
        />
      ))}
    </div>
  );
};

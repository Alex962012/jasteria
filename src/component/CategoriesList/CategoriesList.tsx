import { Dispatch, createContext, useCallback, useState } from "react";
import { Categories } from "../Categories/Categories";

export const MenuContext = createContext<any>(false);
interface ICategoryList {
  activeYarn: number;
  onClickYarn: Dispatch<React.SetStateAction<number>>;
  activeName: number;
  onClickName: Dispatch<React.SetStateAction<number>>;
  activeSeason: number;
  onClickSeason: Dispatch<React.SetStateAction<number>>;
}
interface ICategory {
  id: number;
  title: string;
  categories: Array<string>;
  activeCategory: number;
  onClick: Dispatch<React.SetStateAction<number>>;
}
export const CategoriesList = ({
  activeYarn,
  onClickYarn,
  activeName,
  onClickName,
  activeSeason,
  onClickSeason,
}: ICategoryList) => {
  const categoriesArray = [
    {
      id: 0,
      title: "Вид пряжи",
      categories: ["Все", "Ангора", "Полушерсть", "Меринос"],
      activeCategory: activeYarn,
      onClick: onClickYarn,
    },
    {
      id: 1,
      title: "Вид изделия",
      categories: ["Все", "Шапки", "Варежки", "Коточепчик", "Манишка", "Капор"],
      activeCategory: activeName,
      onClick: onClickName,
    },
    {
      id: 2,
      title: "Сезон",
      categories: ["Все", "Зима", "Осень/Весна"],
      activeCategory: activeSeason,
      onClick: onClickSeason,
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

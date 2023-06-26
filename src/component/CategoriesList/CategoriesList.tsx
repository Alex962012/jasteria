import { useState } from "react";
import { Categories } from "../Categories/Categories";

export const CategoriesList = ({
  activeYarn,
  onClickYarn,
  activeName,
  onClickName,
  activeSeason,
  onClickSeason,
}: any) => {
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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="categories-list">
      {categoriesArray.map((category: any) => (
        <Categories
          key={category.id}
          activeCategory={category.activeCategory}
          onClick={category.onClick}
          title={category.title}
          categories={category.categories}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      ))}
    </div>
  );
};

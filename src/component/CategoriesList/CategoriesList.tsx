import { Categories } from "../Categories/Categories";

export const CategoriesList = ({
  activeYarn,
  onClickYarn,
  activeProduct,
  onClickProduct,
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
      activeCategory: activeProduct,
      onClick: onClickProduct,
    },
  ];
  return (
    <div className="categories-list">
      {categoriesArray.map((category: any) => (
        <Categories
          key={category.id}
          activeCategory={category.activeCategory}
          onClick={category.onClick}
          title={category.title}
          categories={category.categories}
        />
      ))}
    </div>
  );
};

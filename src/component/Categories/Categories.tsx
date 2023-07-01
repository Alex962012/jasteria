import { Dispatch, useContext } from "react";
import "./Categories.css";
import { MenuContext } from "../CategoriesList/CategoriesList";
//вид изделия
interface ICategories {
  activeCategory: number;
  onClick: Dispatch<React.SetStateAction<number>>;
  title: string;
  categories: Array<string>;
}
export const Categories = ({
  activeCategory,
  onClick,
  title,
  categories,
}: ICategories) => {
  const onClickListItem = (i: number) => {
    setActiveGroup(undefined);
    onClick(i);
  };

  const { activeGroup, setActiveGroup } = useContext(MenuContext);
  return (
    <div className="categories-container ">
      <div
        className={
          activeCategory > 0
            ? "categories_label category-item-active category-item"
            : "categories_label category-item"
        }
        onClick={() => setActiveGroup(title)}
      >
        <div className="category-select">
          {activeCategory > 0 ? categories[activeCategory] : title}
        </div>
        <svg
          className="categories_label-icon"
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
        </svg>
      </div>
      {activeGroup === title && (
        <div className="categories_popup">
          <ul className="category-list">
            {categories.map((category: string, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => onClickListItem(i)}
                  className={
                    activeCategory === i
                      ? "category-item-active category-item"
                      : "category-item"
                  }
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {/* {activeCategory > 0 && (
        <div className="category-item-active category-item">
          {categories[activeCategory]}
          <svg
            onClick={() => onClickListItem(0)}
            className="close-modal-icon"
            data-name="Layer 1"
            height="200"
            id="Layer_1"
            viewBox="0 0 200 200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </div>
      )} */}
    </div>
  );
};

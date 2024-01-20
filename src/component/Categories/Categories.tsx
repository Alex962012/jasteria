import { Dispatch, useEffect, useRef, useState } from "react";
import "./Categories.css";
import { IObj } from "../CategoriesList/CategoriesList";

export const useClickOutside=(ref:any,callback:any)=>{
const handleClick=(e:any)=>{
  if(ref.current&&!ref.current.contains(e.target)){
    callback()
  }
}
useEffect(()=>{
  document.addEventListener('mousedown',handleClick);
  return()=>{
    document.removeEventListener("mousedown",handleClick)
  }
})
}


//вид изделия
interface ICategories {
  activeCategory: string;
  onClick: Dispatch<React.SetStateAction<string>>;
  title: string;
  categories: any;
  activeGroup: undefined;
  switchGroup: any;
}
export const Categories = ({
  activeCategory,
  onClick,
  title,
  categories,
  activeGroup,
  switchGroup,
}: ICategories) => {
  const onClickListItem = (_id: string, i: number) => {
    setTypeI(i);
    switchGroup(undefined);
    onClick(_id);
    setOpenPopup(!openPopup);
  };

  const [typeI, setTypeI] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
 
  const menuRef=useRef(null)
  useClickOutside(menuRef,()=>switchGroup(undefined))
  // console.log(menuRef)
  console.log(openPopup)
  return (
    <div className="categories-container ">
      <div
        className={"categories_label  category-item"}
        onClick={() => {
          setOpenPopup(!openPopup);
          switchGroup(title);
        }}
      >
        <div className="category-select">
          {activeCategory !== "0" ? categories[typeI].name : title}
        </div>
        {openPopup === false ? (
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
        ) : (
          <svg
            className="categories_label-icon-rotate"
            height="512px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
          </svg>
        )}
      </div>
      {activeGroup === title && (
        <div className="categories_popup">
          <ul className="category-list"  ref={menuRef}>
            {categories.map((item: IObj, i: number) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setOpenPopup(!openPopup);
                    onClickListItem(item._id, i);
                  }}
                  className={
                    activeCategory === item._id
                      ? "category-item-active category-item"
                      : "category-item"
                  }
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

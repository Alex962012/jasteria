import Skeleton from "react-loading-skeleton";
import { Item, ItemProps } from "../../component/Item/Item";
import "./Catalog.css";
import { CategoriesList } from "../../component/CategoriesList/CategoriesList";
import { useEffect, useState } from "react";

export const Catalog = ({ isLoading, setIsLoading }: any) => {
  const [itemsCategory, setItemsCategory] = useState([]);
  const [activeName, setActiveName] = useState(0);
  const [activeYarn, setActiveYarn] = useState(0);
  const [activeSeason, setActiveSeason] = useState(0);
  const typeYarn = activeYarn > 0 ? `typeYarn=${activeYarn}` : "";
  const typeName = activeName > 0 ? `typeName=${activeName}` : "";
  const typeSeason = activeSeason > 0 ? `season=${activeSeason}` : "";
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jasteria-server-production.up.railway.app/products?${typeName}${
        typeName ? "&" : ""
      }${typeYarn}${typeYarn ? "&" : ""}${typeSeason}`
    )
      .then((res) => res.json())
      .then((res) => {
        setItemsCategory(res);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  }, [typeYarn, typeName, typeSeason, setIsLoading]);
  return (
    <div className="order-section">
      <div className="order-section--title">
        Вы можете заказать любое изделие из каталога по своим меркам
      </div>
      <CategoriesList
        activeYarn={activeYarn}
        onClickYarn={setActiveYarn}
        activeName={activeName}
        onClickName={setActiveName}
        activeSeason={activeSeason}
        onClickSeason={setActiveSeason}
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

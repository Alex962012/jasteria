import { SliderForHome } from "../../component/SliderForHome/SliderForHome";
import "./Home.css";
import { ItemProps } from "../../component/Item/Item";
import { SessionCollection } from "../../component/SessonCollection/SessonCollection";

export type ItemsProps = {
  items: any;
  isLoading: boolean;
};
export const Home = ({ items, isLoading }: ItemsProps) => {
  const itemsObj = [[], []];
  const winter = (value: ItemProps) => value.season === 0;
  const spring = (value: ItemProps) => value.season === 1;
  itemsObj[0] = items.filter(winter);
  itemsObj[1] = items.filter(spring);

  return (
    <div>
      <SliderForHome></SliderForHome>
      {itemsObj.map((items: Array<ItemProps>, index: number) => (
        <SessionCollection
          items={items}
          index={index}
          key={index}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

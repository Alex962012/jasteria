import {
  SessionCollection,
  SessionCollectionProps,
} from "../../component/SessonCollection/SessonCollection";
import { SliderForHome } from "../../component/SliderForHome/SliderForHome";
import "./Home.css";
// const items = require("../../items.json");
export type ItemsProps = {
  items: Array<SessionCollectionProps>;
};
export const Home = ({ items }: ItemsProps) => {
  return (
    <div>
      <SliderForHome></SliderForHome>
      {items.map((item: SessionCollectionProps, index: number) => (
        <SessionCollection {...item} key={index} />
      ))}
    </div>
  );
};

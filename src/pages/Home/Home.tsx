import "./Home.css";

import { SessionCollection } from "../../component/SessonCollection/SessonCollection";
import { ItemsContext } from "../../App";
import { useContext } from "react";
export type ItemsProps = {
  isLoading: boolean;
};
export const Home = ({ isLoading }: ItemsProps) => {
  const items = useContext(ItemsContext);

  return (
    <div className="homepage-wrapper">
      <div className="home-image">
        <div className="home-title">
          <h1>
            Свяжу твою <br />
            мечту!
          </h1>
        </div>
        <div className="home-subtitle">
          <h2>
            Здесь вязаные <br /> аксессуары
            <br /> твоей мечты
          </h2>
        </div>
      </div>
      <div className="title-section-home">
        <div>
          <SessionCollection items={items} isLoading={isLoading} />
        </div>
        <div className="home-info">
          <div className="home-info-title">Вместе с J.Asteria будь</div>
          <div className="home-info-content">
            <div className="home-info-content-column home-info-content-column-left">
              <div className="home-info-content-img1">
                <p className="home-info-content-text">игривой</p>
              </div>
            </div>
            <div className="home-info-content-column home-info-content-column-right" >
              <div className="home-info-content-img2">
              <p className="home-info-content-text">яркой</p>
              </div>
              <div className="home-img-column">
                <div className="home-info-content-img3">
                <p className="home-info-content-text">утончённой</p>
                </div>
                <div className="home-info-content-img4">
                <p className="home-info-content-text">милой</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderForHome.css";
export const SliderForHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider variable-width",
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const images = [
    "https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1681426174_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-12.jpg",
    "https://kartinki.pibig.info/uploads/posts/2023-04/thumbs/1681426184_kartinki-pibig-info-p-kartinki-dlya-slaidera-arti-vkontakte-28.jpg",
  ];
  return (
    <div className="slider-for-home">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="cont" key={index}>
            <img src={image} alt="" className="variable-width-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

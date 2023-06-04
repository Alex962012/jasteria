import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderForHome.css";
export const SliderForHome = () => {
  const settings = {
    dots: false,

    infinite: true,
    speed: 4000,
    slidesToShow: 1,

    autoplay: true,
    autoplaySpeed: 2000,
    variableHeight: 600,
  };
  const images = [
    "https://wallpapers.com/images/featured/en3dnh2zi84sgt3t.jpg",
    "https://plugins-media.makeupar.com/smb/blog/post/2021-09-03/69e15545-d157-44bd-9b43-27d6ae2d521a.jpg",
  ];
  return (
    <div className="slider-for-home">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="cont" key={index}>
            <img src={image} alt="" style={{ width: 1120 }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./Gallery.css";

export const Gallery = (item: any) => {
  const images: any = [];
  item.item.map((el: any) =>
    images.push({
      original: "https://jasteria.ru/images/" + el,
      thumbnail: "https://jasteria.ru/images/" + el,
    })
  );
  return (
    <div className="gallery-container">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showBullets={true}
        showThumbnails={false}
        //   showNav={false}
        additionalClass="image-react-gallery"
        showFullscreenButton={false}
      />
    </div>
  );
};

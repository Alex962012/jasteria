import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={460}
    viewBox="0 0 350 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="350" height="380" />
    <rect x="0" y="388" rx="0" ry="0" width="350" height="40" />
    <rect x="0" y="434" rx="0" ry="0" width="350" height="24" />
  </ContentLoader>
);

export default Skeleton;

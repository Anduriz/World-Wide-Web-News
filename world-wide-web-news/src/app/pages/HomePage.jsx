import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { NewsCarousel } from "../components/News.Carousel";
import { NewsGrid } from "../components/NewsGrid";

export const HomePage = () => {

  const { width } = useWindowDimensions();

  return (
    <div className="justify-content-center mx-3">
      {width >= 992 && (<NewsCarousel/>)}
      <NewsGrid category="general"/>
    </div>
  );
};

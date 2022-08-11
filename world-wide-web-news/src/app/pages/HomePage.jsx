import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { NewsCarousel } from "../components/News.Carousel";
import { NewsGrid } from "../components/NewsGrid";

export const HomePage = () => {

  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 992 && (<NewsCarousel category="general"/>)}
      <NewsGrid category="general"/>
    </>
  );
};

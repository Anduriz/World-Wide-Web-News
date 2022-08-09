import React from "react";
import { NewsCarousel } from "../components/News.Carousel";
import { NewsGrid } from "../components/NewsGrid";

export const HomePage = () => {
  return (
    <div className="justify-content-center mx-5">
      {/* <div className="d-flex justify-content-center mb-4">
        <NewsCarousel/>
      </div> */}
      <NewsGrid/>
    </div>
  );
};

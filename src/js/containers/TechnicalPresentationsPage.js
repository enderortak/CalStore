import React from "react";
import GalleryTabFilter from "../components/productivityTools/GalleryTabFilter";

const TechnicalPresentationsPage = () => (
  <GalleryTabFilter filters={[{ url: "/q", name: "Internal Trainings" }, { url: "/q", name: "Tech Review" }]} />
);

export default TechnicalPresentationsPage;

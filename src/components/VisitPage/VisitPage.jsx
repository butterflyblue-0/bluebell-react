import React from "react";
import VisitCreamery from "./VisitCreamery";
import BlueBellCreamery from "./BlueBellCreamery";
import UpdateNotice from "./UpdateNotice";
import PlanVisit from "./PlanVisit";
import CreamerySlider from "./CreamerySlider";
import ColoringSection from "./ColoringSection";

const VisitPage = () => {
  return (
    <div>
      <VisitCreamery />
      <BlueBellCreamery/>
      <UpdateNotice/>
      <PlanVisit/>
      <CreamerySlider/>
      <ColoringSection/>
      {/* Add more components like <VisitDetails /> if needed later */}
    </div>
  );
};

export default VisitPage;

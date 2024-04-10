import React from "react";
import Section from "./Section";

const TotalSection = () => {
    return (
      <div className="grid grid-cols-2 gap-6">
        {/* Create a responsive grid */}
        <Section
          percentage={10}
          increase={10}
          title={"Total Projects"}
          value={"1280k"}
          color={"#009B75"}
          strokeColor={"#E6F5F1"}
        />
        <Section
          percentage={20}
          decrease={20}
          title={"Soon Expiration Projects"}
          value={"65865k"}
          color={"#FF8600"}
          strokeColor={"#FFF4E3"}
        />
        <Section
          percentage={40}
          increase={10}
          title={"Total Tasks"}
          value={"1203"}
          color={"#CF70FC"}
          strokeColor={"#F1ECFF"}
        />
        <Section
          percentage={75}
          increase={20}
          title={"Total Tickets"}
          value={"12300"}
          color={"#0080FC"}
          strokeColor={"#E3F2FF"}
        />
      </div>
    );
};

export default TotalSection;

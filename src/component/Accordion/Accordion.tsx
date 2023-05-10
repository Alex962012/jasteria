import { useState } from "react";
import "./Accordion.css";
export const Accordion = ({ title, description }: any) => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const onClickAccordion = () => {
    setActiveAccordion(!activeAccordion);
    console.log("a");
  };

  return (
    <div className="accordion-container">
      <button className="accordion" onClick={() => onClickAccordion()}>
        {title}
      </button>
      <div className="panel">
        {activeAccordion && <p className="p">{description}</p>}
      </div>
    </div>
  );
};

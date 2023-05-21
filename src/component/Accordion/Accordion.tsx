import { useState } from "react";
import "./Accordion.css";
type AccordionProps = {
  title: string;
  description: string;
};
export const Accordion = ({ title, description }: AccordionProps) => {
  const [activeAccordion, setActiveAccordion] = useState(false);
  const onClickAccordion = () => {
    setActiveAccordion(!activeAccordion);
  };

  return (
    <div className="accordion-container">
      <button className="accordion" onClick={() => onClickAccordion()}>
        {title}
        <div>{activeAccordion ? "-" : "+"}</div>
      </button>
      <div className="panel">
        {activeAccordion && <p className="p">{description}</p>}
      </div>
    </div>
  );
};

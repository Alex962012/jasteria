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
      <div className="accordion" onClick={() => onClickAccordion()}>
        {title}
        <div>{activeAccordion ? "-" : "+"}</div>
      </div>
      <div className={activeAccordion ? "active-p" : "p"}>
        <div className={activeAccordion ? "active-cont-p" : "cont-p"}>
          {description}
        </div>
      </div>
    </div>
  );
};

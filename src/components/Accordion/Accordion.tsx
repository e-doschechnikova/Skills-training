import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type AccordionPropsType = {
  titleValue: string;
  accordionCollapsed: boolean;
  onClick: (accordionCollapsed: boolean) => void;
};

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button
        onClick={() => {
          props.onClick(!props.accordionCollapsed);
        }}
      >
        click
      </button>

      {!props.accordionCollapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default Accordion;

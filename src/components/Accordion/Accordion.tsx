import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  titleValue: string;
  accordionCollapsed: boolean;
  onChange: () => void;
  items: Array<ItemType>;
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTitle title={props.titleValue} onChange={props.onChange} />

      {!props.accordionCollapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onChange: () => void;
};
type AccordionBodyPropsType = {
  items: Array<ItemType>;
  onClick: (value: any) => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle rendering");
  return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>;
}

function AccordionBody(props: AccordionBodyPropsType) {
  console.log("AccordionBody rendering");
  return (
    <ul>
      {props.items.map((i, index) => (
        <li
          onClick={() => {
            props.onClick(i.value);
          }}
          key={index}
        >
          {i.title}
        </li>
      ))}
    </ul>
  );
}

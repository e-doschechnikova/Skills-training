import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("accordion mode chenge event fired");
const onClickCallback = action("some item was clicked");
export const CollapsedMode = () => (
  <Accordion
    titleValue={"Menu"}
    accordionCollapsed={true}
    onChange={callback}
    items={[]}
    onClick={onClickCallback}
  />
);
export const UncollapsedMode = () => (
  <Accordion
    titleValue={"Users"}
    accordionCollapsed={false}
    onChange={callback}
    items={[
      { title: "Vasilisa", value: 1 },
      { title: "Miron", value: 2 },
      { title: "Makar", value: 3 },
      { title: "Evgeniya", value: 4 },
    ]}
    onClick={onClickCallback}
  />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"USERS"}
      accordionCollapsed={value}
      onChange={() => setValue(!value)}
      items={[
        { title: "Vasilisa", value: 1 },
        { title: "Miron", value: 2 },
        { title: "Makar", value: 3 },
        { title: "Evgeniya", value: 4 },
      ]}
      onClick={(id) => {
        alert(`user with ID ${id} should be happy`);
      }}
    />
  );
};

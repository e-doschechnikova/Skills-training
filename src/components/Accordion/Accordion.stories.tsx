import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Accordion } from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
};

const callback = action("accordion mode chenge event fired");
export const CollapsedMode = () => (
  <Accordion titleValue={"Menu"} accordionCollapsed={true} onClick={callback} />
);
export const UncollapsedMode = () => (
  <Accordion
    titleValue={"User"}
    accordionCollapsed={false}
    onClick={callback}
  />
);

export const ModeChanging = () => {
  const [value, setValue] = useState<boolean>(true);
  return (
    <Accordion
      titleValue={"HELLO"}
      accordionCollapsed={value}
      onClick={() => setValue(!value)}
    />
  );
};

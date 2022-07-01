import React from "react";
import { action } from "@storybook/addon-actions";
import { UncontrolledRating } from "./UncontrolledRating";

export default {
  title: "UncontrolledRating",
  component: UncontrolledRating,
};

const callback = action("rating chenged inside component");

export const EmptyRating = () => (
  <UncontrolledRating defaulValue={0} onChange={callback} />
);

export const Rating1 = () => (
  <UncontrolledRating defaulValue={1} onChange={callback} />
);
export const Rating2 = () => (
  <UncontrolledRating defaulValue={2} onChange={callback} />
);
export const Rating3 = () => (
  <UncontrolledRating defaulValue={3} onChange={callback} />
);
export const Rating4 = () => (
  <UncontrolledRating defaulValue={4} onChange={callback} />
);
export const Rating5 = () => (
  <UncontrolledRating defaulValue={5} onChange={callback} />
);

import React, { useState } from "react";

type RatingPropsType = {
  value: number;
};

export const UncontrolledRating = (props: RatingPropsType) => {
  console.log("Rating rendering");

  let [selected, setSelected] = useState(true);

  return (
    <div>
      <Star selected={props.value > 0} /> <button></button>
      <Star selected={props.value > 1} /> <button></button>
      <Star selected={props.value > 2} /> <button></button>
      <Star selected={props.value > 3} /> <button></button>
      <Star selected={props.value > 4} /> <button></button>
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");
  if (props.selected === true) {
    return (
      <span>
        <b>star </b>
      </span>
    );
  } else {
    return <span>star </span>;
  }
}

import React, { useState } from "react";
import styles from "./UncontrolledRating.module.css";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
  defaulValue?: RatingValueType;
  onChange: (value: RatingValueType) => void;
};

export const UncontrolledRating = (props: RatingPropsType) => {
  console.log("Rating rendering");

  let [value, setValue] = useState<RatingValueType>(
    props.defaulValue ? props.defaulValue : 0
  );

  return (
    <div>
      <Star
        selected={value > 0}
        setValue={() => {
          setValue(1);
          props.onChange(1);
        }}
      />
      {/* <button
        onClick={() => {
          setValue(1);
        }}
      >
        1
      </button> */}
      <Star
        selected={value > 1}
        setValue={() => {
          setValue(2);
          props.onChange(2);
        }}
      />
      {/* <button
        onClick={() => {
          setValue(2);
        }}
      >
        2
      </button> */}
      <Star
        selected={value > 2}
        setValue={() => {
          setValue(3);
          props.onChange(3);
        }}
      />
      {/* <button
        onClick={() => {
          setValue(3);
        }}
      >
        3
      </button> */}
      <Star
        selected={value > 3}
        setValue={() => {
          setValue(4);
          props.onChange(4);
        }}
      />
      {/* <button
        onClick={() => {
          setValue(4);
        }}
      >
        4
      </button> */}
      <Star
        selected={value > 4}
        setValue={() => {
          setValue(5);
          props.onChange(5);
        }}
      />
      {/* <button
        onClick={() => {
          setValue(5);
        }}
      >
        5
      </button> */}
    </div>
  );
};

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};

function Star(props: StarPropsType) {
  console.log("Star rendering");
  return (
    <span
      className={styles.starsSpan}
      onClick={() => {
        props.setValue();
      }}
    >
      {props.selected ? <b>???</b> : "???"}
    </span>
  );
}

import React, { useState } from "react";

type OnOffPropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

export const OnOff = (props: OnOffPropsType) => {
  console.log("OnOff Rendering");

  const onStyle = {
    width: "40px",
    height: "20px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "#3CB371" : "white",
    cursor: "pointer",
  };
  const offStyle = {
    width: "40px",
    height: "20px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "3px",
    padding: "2px",
    backgroundColor: props.on ? "white" : "#DC143C",
    cursor: "pointer",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "#3CB371" : "#DC143C",
    cursor: "pointer",
  };
  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onChange(false);
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

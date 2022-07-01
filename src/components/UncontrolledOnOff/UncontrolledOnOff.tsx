import React, { useState } from "react";

type OnOffPropsType = {
  onChange: (on: boolean) => void;
  defaultOn: boolean;
};

export const UncontrolledOnOff = (props: OnOffPropsType) => {
  console.log("OnOff Rendering");
  let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

  const onStyle = {
    width: "40px",
    height: "20px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: on ? "#3CB371" : "white",
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
    backgroundColor: on ? "white" : "#DC143C",
    cursor: "pointer",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "#3CB371" : "#DC143C",
    cursor: "pointer",
  };

  const onClicked = () => {
    setOn(true);
    props.onChange(true);
  };

  const offClicked = () => {
    setOn(false);
    props.onChange(false);
  };
  return (
    <div>
      <div style={onStyle} onClick={onClicked}>
        On
      </div>
      <div style={offStyle} onClick={offClicked}>
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
};

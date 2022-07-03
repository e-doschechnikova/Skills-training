import { action } from "@storybook/addon-actions";
import React, { ChangeEvent, useRef, useState } from "react";

export default {
  title: "input",
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value;
    setValue(actualValue);
  };

  return (
    <>
      <input value={value} onChange={onChange} /> - {value}
    </>
  );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  };
  return (
    <>
      <input ref={inputRef} />
      <button onClick={save}>save</button> - actual value: {value}
    </>
  );
};

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  };
  return <input value={parentValue} onChange={onChange} />;
};

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(true);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  };
  return <input type="checkbox" checked={parentValue} onChange={onChange} />;
};

export const ControlledInputWithFixedValue = () => <input value={"hello"} />;

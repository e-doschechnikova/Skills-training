import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import Rating, { RatingValueType } from "./components/Rating/Rating";
import { OnOff } from "./components/OnOff/OnOff";
import { UncontrolledAccordion } from "./components/Accordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/Rating/UncontrolledRating";

function App(props: any) {
  console.log("App rendering");

  let [ratingValue, setratingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

  return (
    <div className="App">
      {/* <PageTitle title={"This is APP component"} />
      <PageTitle title={"My friends"} /> 
     <Accordion titleValue={"Menu"} collapsed={true} /> */}

      <Accordion titleValue={"Users"} accordionCollapsed={accordionCollapsed} onClick={setAccordionCollapsed} />

      <OnOff />

      <UncontrolledAccordion titleValue={"Users"} />
      <UncontrolledAccordion titleValue={"Menu"} />

      <UncontrolledRating />
      <UncontrolledRating />

      <Rating value={ratingValue} onClick={setratingValue} />

      {/* <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={5} /> */}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default App;

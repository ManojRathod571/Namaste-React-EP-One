const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "this-is-heading" },
  "Hello React Again"
);

const subHeading = React.createElement(
  "h2",
  { id: "subHeading" },
  "Hey I am the subHeading"
);

const Info = React.createElement(
  "h2",
  { id: "info" },
  "I Tried little bit more  I am so happy with it"
);

const childOne = React.createElement("div", { id: "child-one" }, [
  heading,
  subHeading,
  Info,
]);

const childTwo = React.createElement("div", { id: "child-two" }, [
  heading,
  subHeading,
  Info,
]);

const mainDiv = React.createElement(
  "div",
  { id: "parent" },
  childOne,
  childTwo
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainDiv);

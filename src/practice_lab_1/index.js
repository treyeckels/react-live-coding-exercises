import React from "react";
import { render } from "react-dom";
import AddressBook from "./AddressBook";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <AddressBook owner="Trey" />
  </div>
);

render(<App />, document.getElementById("root"));

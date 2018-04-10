import React from "react";

const styles = {
  container: {
    display: "inline-block",
    marginRight: 10
  }
};

const Filter = props => {
  const onChange = () => {
    props.updateList(props.value);
  };

  return (
    <div style={styles.container}>
      <label>{props.label}</label>
      <input
        type="radio"
        value={props.value}
        onChange={onChange}
        checked={props.selected}
      />
    </div>
  );
};

export default Filter;

import React from "react";

class AddressBook extends React.Component {
  render() {
    return (
      <div>
        <h1>Address Book</h1>
        <h2>Hello {this.props.owner}!</h2>
      </div>
    );
  }
}

export default AddressBook;

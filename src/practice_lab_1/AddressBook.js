import React from "react";

class AddressBook extends React.Component {
  render() {
    if (!this.state.contacts.length) {
      return null;
    }

    return (
      <div>
        <h1>Address Book</h1>
        <h2>Hello {this.props.owner}!</h2>
      </div>
    );
  }
}

export default AddressBook;

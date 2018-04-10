import React from "react";
import TableRow from "./TableRow";
import Filter from "./Filter";

class AddressBook extends React.Component {
  state = {
    contacts: []
  };

  styles = {
    table: {
      width: "100%"
    }
  };

  async componentDidMount() {
    const contactsFeed = await fetch("https://randomuser.me/api/?results=10");
    const contactsObject = await contactsFeed.json();
    const contacts = contactsObject.results;
    this.setState({
      contacts,
      originalContacts: contacts
    });
  }

  render() {
    // if (!this.state.contacts.length) {
    //   return null;
    // }

    return (
      <div>
        <h1>Address Book</h1>
        <h2>Hello {this.props.owner}!</h2>
        <table style={this.styles.table}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return <TableRow key={index} data={contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddressBook;

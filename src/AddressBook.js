import React from "react";
import TableRow from "./TableRow";
import Filter from "./Filter";

class AddressBook extends React.Component {
  state = {
    contacts: [],
    originalContacts: [],
    currentFilter: "all"
  };

  styles = {
    table: {
      width: "100%"
    },
    filterContainer: {
      margin: "20px 0"
    }
  };

  updateList = currentFilter => {
    const originalContacts = this.state.originalContacts;
    let contacts;

    if (currentFilter === "all") {
      contacts = originalContacts;
    } else {
      contacts = originalContacts.filter(contact => {
        return contact.gender === currentFilter;
      });
    }

    this.setState({
      contacts,
      currentFilter
    });
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
    if (!this.state.contacts.length) {
      return null;
    }

    return (
      <div>
        <h1>Address Book</h1>
        <h2>Hello {this.props.owner}!</h2>
        <div style={this.styles.filterContainer}>
          <Filter
            label="Male"
            value="male"
            updateList={this.updateList}
            selected={this.state.currentFilter === "male"}
          />
          <Filter
            label="Female"
            value="female"
            updateList={this.updateList}
            selected={this.state.currentFilter === "female"}
          />
          <Filter
            label="All"
            value="all"
            updateList={this.updateList}
            selected={this.state.currentFilter === "all"}
          />
        </div>
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

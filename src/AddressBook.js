import React from "react";
import TableRow from "./TableRow";
import Filter from "./Filter";

class AddressBook extends React.Component {
  state = {
    contacts: [],
    originalContacts: [],
    currentFilter: "all",
    currentTheme: "light"
  };

  styles = {
    table: {
      width: "100%"
    },
    filterContainer: {
      margin: "20px 0"
    },
    light: {

    },
    dark: {
      backgroundColor: 'rgba(0,0,0,1)',
      color: 'rgba(256, 256, 256, 1)'
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

  changeTheme = currentTheme => {
    this.setState({
      currentTheme
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
      <div style={this.styles[this.state.currentTheme]}>
        <h1>Address Book</h1>
        <Filter
          label="Dark"
          value="dark"
          updateList={this.changeTheme}
          selected={this.state.currentTheme === "dark"}
        />
        <Filter
          label="Light"
          value="light"
          updateList={this.changeTheme}
          selected={this.state.currentTheme === "light"}
        />
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

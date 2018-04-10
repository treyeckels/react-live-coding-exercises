import React from "react";

const styles = {
  cell: {
    border: "1px solid rgba(0, 0, 0, .5)"
  }
};

const TableRow = props => {
  const contact = props.data;
  return (
    <tr>
      <td style={styles.cell}>
        <img src={contact.picture.thumbnail} alt="avatar" />
      </td>
      <td style={styles.cell}>
        {contact.name.title} {contact.name.first} {contact.name.last}
      </td>
      <td style={styles.cell}>{contact.email}</td>
    </tr>
  );
};

export default TableRow;

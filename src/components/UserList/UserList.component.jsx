import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Table, Form } from "react-bootstrap";

const UserList = ({ getUser, userList }) => {
  const [filteredUserList, setFilteredUserList] = useState([]);
  useEffect(() => {
    getUser()
  }, [getUser])

  useEffect(() => {
    setFilteredUserList(userList)
  }, [userList])

  const getAddressInOneLine = (address = {}) => (
    `${address.suite}, ${address.street}, ${address.city} - ${address.zipcode}`
  )

  const escapeRegex = (string) => {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  const searchUser = (value, columnName) => {
    const regexTest = new RegExp(escapeRegex(value))
    const filteredData = userList.filter((data) =>
      regexTest.test(data[columnName].toLowerCase())
    );
    setFilteredUserList(filteredData);
  };

  return (
    <>
      <Table responsive striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "name")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "username")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "email")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "address")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "phone")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "website")}
              />
            </td>
            <td>
              <Form.Control
                placeholder="search"
                onChange={(e) => searchUser(e.target.value, "company")}
              />
            </td>
          </tr>
          {filteredUserList.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{getAddressInOneLine(user.address)}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company && user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

UserList.defaultProps = {
  userList: [{}]
}

UserList.propTypes = {
  getUser: PropTypes.func.isRequired,
  userList: PropTypes.array
}

export default UserList;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import EditUser from "./EditUserAdd";

function Home() {
  const users = useSelector((state) => state.users);
  return (
    <>
      
	  <EditUser  />

      <thead>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Group</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userGroup}</td>
            <td>
              <Link to={`/edit-user/${user.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}

export default Home;

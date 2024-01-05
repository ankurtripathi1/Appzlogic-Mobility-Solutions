import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Store/UserReducer";
import EditUser1 from "./EditUserAdd";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = (userData) => {
    dispatch(addUser(userData));
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      
	  <EditUser1 onSubmit={handleAddUser} onCancel={handleCancel} />

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

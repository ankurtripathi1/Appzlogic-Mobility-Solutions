import React, { useEffect, useState } from "react";
import { addUser, editUser } from "../Store/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./Auth";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { constants } from "../Store/Constant";


function EditUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = id ? true : false; // Check if there is an ID parameter to determine if it's editing or adding

  const users = useSelector((state) => state.users);

  // Initialize state based on whether it's editing or adding
  const initialUser = isEditing
    ? users.find((user) => user.id === id)
    : {
        firstName: "",
        lastName: "",
        userAuthorizations: [],
        userGroup: constants.defaultGroup,
      };

  const [firstName, setFirstName] = useState(initialUser.firstName);
  const [lastName, setLastName] = useState(initialUser.lastName);
  const [user, setUser] = useState(initialUser.userAuthorizations);
  const [group, setGroup] = useState(initialUser.userGroup);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(
        editUser({
          id: id,
          firstName,
          lastName,
          userGroup: group,
          userAuthorizations: user,
        })
      );
    } else {
      let myuuid = uuidv4();
      dispatch(
        addUser({
          id: myuuid,
          firstName,
          lastName,
          userGroup: group,
          userAuthorizations: user,
        })
      );
    }
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
	setUser(constants.userPermit)
	setFirstName("");
	setLastName("");
	setGroup("Operator")

    console.log("Cancelled");
  };

  useEffect(() => {
    isEditing ? setUser(initialUser.userAuthorizations) : setUser(constants.userPermit);
}, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            First Name :
            <input
              type="text"
              name="First Name"
			  required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </p>
          <p>
            Last Name :
            <input
              type="text"
              name="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </p>
        </div>
        <Auth user={user} setUser={setUser} group={group} setGroup={setGroup} />
        <button type="submit">Save</button>
		<button type="reset" onClick={onCancel}>Cancel</button>
      </form>
    </>
  );
}

export default EditUser;

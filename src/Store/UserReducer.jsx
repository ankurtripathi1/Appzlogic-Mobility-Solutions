import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./UserData.jsx";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, firstName, lastName, userGroup, userAuthorizations } =
        action.payload;
      const pUser = state.find((user) => user.id === id);
      if (pUser) {
        pUser.firstName = firstName;
        pUser.lastName = lastName;
        pUser.userGroup = userGroup;
        pUser.userAuthorizations = userAuthorizations;
      }
    },
  },
});

export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;

import React from "react";
import UserItem from "./UserItem";
import Spinner from "./../layout/Spinner";
import PropTypes from "prop-types";

const Users = ({ loading, userList }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={newstyle}>
        {userList.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const newstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

Users.propTypes = {
  userList: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Users;

/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import "../Users/Users.css"

const User = ({user}) => {
  const {id, name, username, email, phone} = user
  console.log(user)
  return (
    <div>
      <div className="user ">
        <p><span>Id:</span>{id}</p>
        <p><span>Name:</span>{name}</p>
        <p><span>UserName:</span>{username}</p>
        <p><span>Email:</span>{email}</p>
        <p><span>Phone:</span>{phone}</p>
        <Link to={`/users/${id}`}>
          <button> Details </button>
        </Link>
      </div>
    </div>
  );
};

export default User;

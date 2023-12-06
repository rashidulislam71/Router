/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import User from './User';
import "../Users/Users.css"




const Users = () => {
  const users = useLoaderData()
  return (
    <div>
        <div className="users grid">
          {users.map((user)=> <User key={user.id} user={user} />)}
        </div>
    </div>
  );
};

export default Users;
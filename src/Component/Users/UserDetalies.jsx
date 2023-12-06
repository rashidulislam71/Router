import { useLoaderData } from "react-router-dom";




const UserDetalies = () => {
  const {id, name, username, email, address, company, phone, website} = useLoaderData()
  return (
    <div>
        <div>
          <div>
            <p><span>Id:</span>{id}</p>
            <p><span>Id:</span>{name}</p>
            <p><span>Id:</span>{username}</p>
            <p><span>Id:</span>{email}</p>
            <p><span>Id:</span>{phone}</p>
            <p><span>Id:</span>{address.street}</p>
            <p><span>Id:</span>{address.city}</p>
            <p><span>Id:</span>{address.zipcode}</p>
            <p><span>Id:</span>{website}</p>
            <p><span>Id:</span>{company.name}</p>
            <p><span>Id:</span>{company.catchphrase}</p>
          </div>
        </div>
    </div>
  );
};

export default UserDetalies;
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);  //users is an empty array initially so has index associated with it
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`); //arr of obj
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  //delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken, //for authorisation
          },
        }
      );
      const data = await response.json();
      console.log(`users after delete ${data}`); //arr of obj

      if (response.ok) {
        getAllUsersData(); //i.e. I am again calling this func when deletion successfully occured...so that fetch all users data firse ek br aur chl jye
      } //so that bina page refresh kiye user delete ho jye
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []); //taki bs 1st time pg refresh ho tbhi data fetch ho only...
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>
                  <h1>Name</h1>
                </th>
                <th>
                  <h1>Email</h1>
                </th>
                <th>
                  <h1>Phone</h1>
                </th>
                <th>
                  <h1>Update</h1>
                </th>
                <th>
                  <h1>Delete</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (    //we are returning a single row one by one as per map
                  <tr key={index}>
                    <td>
                      <h2>{curUser.username}</h2>
                    </td>
                    <td>
                      <h2>{curUser.email}</h2>
                    </td>
                    <td>
                      <h2>{curUser.phone}</h2>
                    </td>
                    <td>
                      <h2>
                        <Link to={`/admin/users/${curUser._id}/edit`}>  
                          Edit
                        </Link>
                      </h2>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

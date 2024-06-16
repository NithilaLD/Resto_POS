import React, { Fragment, useEffect, useState } from "react";
import InputUser from "../components/inputUser";
import EditUser from "../components/editUsers";
import "../color.css";

const AdminUserAccess = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3060/users");
      const jsonData = await response.json();
      setUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await fetch(`http://localhost:3060/user/${id}`, {
          method: "DELETE",
        });
        setUsers(users.filter((user) => user.user_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <InputUser getUsers={getUsers} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Role
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.employer_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.user_role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.user_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => deleteUser(user.user_id)}
                    className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setEditingUser(user)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingUser && (
        <EditUser
          user={editingUser}
          setUsers={setUsers}
          closeModal={() => setEditingUser(null)}
        />
      )}
    </Fragment>
  );
};

export default AdminUserAccess;

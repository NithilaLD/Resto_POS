import React, { useState } from "react";

const EditUser = ({ user, setUsers, closeModal }) => {
  const [userName, setUserName] = useState(user.user_name);
  const [userRole, setUserRole] = useState(user.user_role);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const body = { user_name: userName, user_role: userRole };
      const response = await fetch(
        `http://localhost:3060/user/${user.user_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const updatedUser = await response.json();

      setUsers((prevUsers) =>
        prevUsers.map((usr) =>
          usr.user_id === user.user_id ? updatedUser : usr
        )
      );

      closeModal();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <form onSubmit={updateUser}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="user_name"
              >
                User Name
              </label>
              <input
                type="text"
                id="user_name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="user_role"
              >
                User Role
              </label>
              <input
                type="text"
                id="user_role"
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

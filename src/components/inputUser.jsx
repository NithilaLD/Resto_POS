import React, { Fragment, useState, useEffect } from "react";

const InputUser = ({ getUsers }) => {
  const [username, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [employeeIds, setEmployeeIds] = useState([]);

  useEffect(() => {
    const fetchEmployeeIds = async () => {
      try {
        const response = await fetch("http://localhost:3060/employees");
        const jsonData = await response.json();
        setEmployeeIds(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchEmployeeIds();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (employerId === "") {
      alert("Please select a valid employer ID.");
      return;
    }

    try {
      const body = {
        user_name: username,
        user_role: userRole,
        employer_id: employerId,
      };
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setUserName("");
        setUserRole("");
        setEmployerId("");
        getUsers();
      }
      console.log(username, userRole, employerId);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="required:text-black">
        <h1 className="text-center text-black font-bold text-2xl mb-4">
          Manage Users
        </h1>
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={onSubmitForm}>
            <label >Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <br />
            <label>User Role</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter user role"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            />
            <br />
            <br />
            <label>Employee ID</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={employerId}
              onChange={(e) => setEmployerId(e.target.value)}
            >
              <option value="">Select Employee ID</option>
              {employeeIds.map((employee) => (
                <option key={employee.employer_id} value={employee.employer_id}>
                  {employee.employer_id}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default InputUser;

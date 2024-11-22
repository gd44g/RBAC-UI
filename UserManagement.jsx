
import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, deleteUser } from "../services/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", roles: [], status: "Active" });

  useEffect(() => {
    fetchUsers().then((res) => setUsers(res.data));
  }, []);

  const handleAddUser = () => {
    addUser(newUser).then(() => {
      setNewUser({ name: "", email: "", roles: [], status: "Active" });
      fetchUsers().then((res) => setUsers(res.data));
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => fetchUsers().then((res) => setUsers(res.data)));
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.status} 
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

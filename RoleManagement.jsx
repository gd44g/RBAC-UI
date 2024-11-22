
import React, { useState, useEffect } from "react";
import { fetchRoles } from "../services/api";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles().then((res) => setRoles(res.data));
  }, []);

  return (
    <div>
      <h2>Role Management</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name} - Permissions: {role.permissions.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;

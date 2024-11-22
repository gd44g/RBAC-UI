
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const fetchUsers = () => axios.get(`${API_BASE_URL}/users`);
export const fetchRoles = () => axios.get(`${API_BASE_URL}/roles`);
export const fetchPermissions = () => axios.get(`${API_BASE_URL}/permissions`);

export const addUser = (user) => axios.post(`${API_BASE_URL}/users`, user);
export const updateUser = (id, user) => axios.put(`${API_BASE_URL}/users/${id}`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/users/${id}`);

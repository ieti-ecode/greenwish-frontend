import { useState, useEffect } from "react";
import { request } from "../../api/AxiosHandler";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await request("GET", "/users");
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await request("DELETE", `/users/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError(err);
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { users: filteredUsers, loading, error, deleteUser, setSearchQuery };
};

export default useUsers;

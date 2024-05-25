import { useState, useEffect } from "react";
import { request, getIdUser } from "../../api/AxiosHandler";

const useUserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = getIdUser();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await request("GET", `/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [userId]);

  const updateUserProfile = async (updatedData) => {
    try {
      setLoading(true);
      await request("PUT", `/users/${userId}`, updatedData);
      setUser(updatedData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };


  return { user, loading, error, updateUserProfile };
};

export default useUserProfile;

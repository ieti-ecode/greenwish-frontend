import { useState, useEffect } from "react";
import { request } from "../../api/AxiosHandler";

const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchUserProfile();
  }, [userId]); 

  const updateUserProfile = async (updatedData) => {
    try {
      setLoading(true); 
      const response = await request("POST", `/users/${userId}`, updatedData);
      setUser(response.data); 
      setLoading(false); 
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { user, loading, error, updateUserProfile };
};

export default useUserProfile;

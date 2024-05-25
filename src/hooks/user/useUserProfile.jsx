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
      const response = await request("PUT", `/users/${userId}`, updatedData);
      setUser(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const uploadProfileImage = async (imageFile) => {
    try {
      if (!imageFile) {
        console.error('No hay imagen seleccionada');
        return;
      }

      const formData = new FormData();
      formData.append('image', imageFile.image);

      await request("POST", `/users/${userId}/image`, formData, 'multipart/form-data')
      .then((response) => {
        console.log('Imagen subida exitosamente');
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (err) {
      console.error('Error al subir la imagen:', err.response?.data || err.message);
    }
  };


  return { user, loading, error, updateUserProfile, uploadProfileImage };
};

export default useUserProfile;

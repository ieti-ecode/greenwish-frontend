import { useState, useEffect } from "react";

const useUserProfile = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Datos de ejemplo
    const exampleUser = {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      password: "123456",
      avatar: "https://images.vexels.com/media/users/3/135118/isolated/preview/676bf0e9f3c16649cd7f426c6dcd755a-signo-de-usuario-plano-con-fondo-redondo.png",
      puntaje: 100
    };

    const fetchUserProfile = () => {
      setTimeout(() => {
        setUser(exampleUser);
        setLoading(false);
      }, 1000);
    };

    fetchUserProfile();
    setLoading(false);
  }, []);

  const saveChanges = (updatedData) => {
    setLoading(true);
    setUser(updatedData);
    setLoading(false);
  };

  return { user, loading, error, saveChanges };
};

export default useUserProfile;

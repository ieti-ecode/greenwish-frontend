import { useState, useEffect } from 'react';

const useUserInformation = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('********');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSave = () => {
    validateName();
    validateEmail();
    validatePassword();
    if (nameValid && emailValid && passwordValid) {
      // Implement your logic to save user information
      console.log('Guardando información del usuario...');
      setIsEditing(false);
    }
  };

  const validateName = () => {
    if (name.trim() === '') {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  };

  const validateEmail = () => {
    if (!email.includes('@')) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  useEffect(() => {
    if (!nameValid) {
      setNameErrorMessage('El nombre no puede estar vacío');
    } else {
      setNameErrorMessage('El nombre es válido');
    }

    if (!emailValid) {
      setEmailErrorMessage('El correo electrónico es inválido: no contiene "@)');
    } else {
      setEmailErrorMessage('El correo electrónico es válido');
    }

    if (!passwordValid) {
      setPasswordErrorMessage('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordErrorMessage('La contraseña es válida');
    }
  }, [nameValid, emailValid, passwordValid]);

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    isEditing,
    toggleEditing,
    showPassword,
    toggleShowPassword,
    nameValid,
    emailValid,
    passwordValid,
    nameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    handleSave,
    validateName,
    validateEmail,
    validatePassword,
  };
};

export default useUserInformation;

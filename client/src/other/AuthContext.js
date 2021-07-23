import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsuscribe;
  }, []);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const value = { currentUser, signup };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

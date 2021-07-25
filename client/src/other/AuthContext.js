import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsuscribe;
  }, []);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const value = { currentUser, signup, login };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

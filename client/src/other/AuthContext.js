import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      // TODO: Find user data in database, and set current user as data from that
      db.collection('users')
        .where('uid', '==', user.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setCurrentUser(doc.data());
          });
        })
        .catch((err) => console.log(err));

      setLoading(false);
    });

    return unsuscribe;
  }, []);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  const value = { currentUser, signup, login, logout };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

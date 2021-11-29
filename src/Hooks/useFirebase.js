import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  console.log(user);
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();

  // Provider
  const googleProvider = new GoogleAuthProvider();

  // Observation user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // Registration
  const handleRegister = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to database
        // saveUser(email,name)

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // Email & password login
  const handleEmailLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Google login
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Admin set up with email
  useEffect(() => {
    fetch(`https://desolate-sands-22384.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data?.admin));
  }, [user?.email]);

  // Log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  // // save user in database
  // const saveUser =(email,displayName)={
  //   // const user={ email,}

  // }

  return {
    user,
    setUser,
    signInWithGoogle,
    isLoading,
    setIsLoading,
    handleRegister,
    handleEmailLogin,
    admin,
    logOut,
  };
};

export default useFirebase;

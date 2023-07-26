import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { SignUp } from "../../components/Sign Up/SignUp";

import {
  auth,
  signInWithGooglePopUp,
  createUserFromDoc,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";

export const SignIn = () => {

  const handleRedirect = async () =>{
    const response = await getRedirectResult(auth);
    if(response){
      const userDocRef = await createUserFromDoc(response.user);
    }
  }

  useEffect( () => {
    handleRedirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserFromDoc(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Account </button>
      <SignUp/>
    </div>
  );
};

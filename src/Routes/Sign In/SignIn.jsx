import React from "react";
import { signInWithGooglePopUp } from "../../utils/firebase/firebase.util";

export const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Account </button>
    </div>
  );
};

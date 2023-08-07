import React, { useState, useContext } from "react";
import {
  signInWithGooglePopUp,
  createUserFromDoc,
  signInAuthFromUserEmailandPassword,
} from "../../utils/firebase/firebase.util";

import { UserContext } from "../../context/user.context";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import "./SignIn.scss";

const defaultFields = {
  email: "",
  password: "",
};

export const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserFromDoc(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthFromUserEmailandPassword(
        email,
        password
      );
      setCurrentUser(user);
      alert("Successfully Signed In :)");
      resetForm();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Invalid Password");
          break;
        case "auth/user-not-found":
          alert("User Not Found");
          break;
        default:
          console.log(err);
      }
    }
  };

  const resetForm = () => {
    setFormFields(defaultFields);
  };

  const handleEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an Account?</h2>
      <span>Sign in to your Account</span>
      <form>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handleEvent}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handleEvent}
        />

        <div>
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

import React, { useState } from "react";
import {
  createAuthFromUserEmailandPassword,
  createUserFromDoc,
} from "../../utils/firebase/firebase.util";

import FormInput from "../FormInput/FormInput";
import '../Sign Up/SignUp.scss'

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPass: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPass } = formFields;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthFromUserEmailandPassword(
        email,
        password
      );

      await createUserFromDoc(user, { displayName });
      if (createUserFromDoc) {
        alert("Signed Up Successfully! ;) ");
      }
      resetForm();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use, Use a Different Account :)");
      }
      console.log(err);
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
    <div className="sign-up-container" >
      <h2>Don't Have an Account?</h2>
      <span>Sign Up for your Account</span>
      <form>
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleEvent}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPass"
          value={confirmPass}
          onChange={handleEvent}
        />

        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

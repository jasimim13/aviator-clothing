import { SignUp } from "../../components/Sign Up/SignUp";
import { SignIn } from "../../components/Sign In/SignIn";

import '../Authentication/authentication-style.scss'

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

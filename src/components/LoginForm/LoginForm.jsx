import "./styles.css";

import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  return (
    <div className="login-form">
      <h1 className="login-title">Login Form</h1>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
        className="email-input"
      />
      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
        className="password-input"
      />
      <Button name="Login" type="submit" />
    </div>
  );
}

export default LoginForm;

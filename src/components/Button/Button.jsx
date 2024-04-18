import "./styles.css";

function Button({ name, type }) {
  return (
    <button type={type} className="login-button">
      {name}
    </button>
  );
}

export default Button;

import "./styles.css";

function Button({ children, type = "button", onButtonClick }) {

  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {children}
    </button>
  );
}

export default Button;
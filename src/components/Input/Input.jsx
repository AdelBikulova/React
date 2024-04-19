import "./styles.css";

function Input({ name, type, placeholder, label, className }) {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default Input;

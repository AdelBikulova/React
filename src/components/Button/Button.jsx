import "./styles.css";

function Button({ name, type = "button", onButtonClick }) {
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {name}
    </button>
  );
}

export default Button;



// import "./styles.css";

// function Button({ name, typeб  }) {
//   return (
//     <button type={type} className="login-button">
//       {name}
//     </button>
//   );
// }

// export default Button;

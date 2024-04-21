import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const counterLikes = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const counterDislikes = () => {
    setDislikes((prevValue) => prevValue + 1);
  };

  const resetResults = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button onButtonClick={counterLikes}>Like</Button> {likes}
        <Button onButtonClick={counterDislikes}>Dislike</Button> {dislikes}
        <Button onButtonClick={resetResults}>Reset Results</Button>
      </div>
    </div>
  );
}

export default Feedback;

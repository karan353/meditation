import React, { useState } from "react";
import BoxBreathing from "./BoxBreathing";
import SmallBigCircle from "./SmallBigCircle";
import Button from "../Button";

function BreathingAnimation(props) {
  const [Animation, setAnimation] = useState(true);

  const handleClick = () => {
    setAnimation(!Animation);
  };
  return (
    <div>
      <h1 className="headerTitle">Box Breathing</h1>
      <Button ChangeAnimation={handleClick} ButtonName="Change Animation" />
      {Animation ? <BoxBreathing /> : <SmallBigCircle />}
    </div>
  );
}

export default BreathingAnimation;

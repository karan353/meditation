import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div>
      <a className="button_" href={props.page} onClick={props.ChangeAnimation}>
        {props.ButtonName}
      </a>
    </div>
  );
}

export default Button;

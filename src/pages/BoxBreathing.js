import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BreathingAnimation from "../components/BreathingAnimations/BreathingAnimation";

function BoxBreathing() {
  return (
    <>
      <div>
        <div className="text view">
          <p>
            A powerful breathing technique used by special forces and athletes
            all over the world.
          </p>
          <p>
            Has physiological and psychological benefits. It helps reduce stress
            and anxiety.
          </p>
          <p>Simply follow the circle around the box.</p>
          <p>Breath in through the nose.</p>
          <p>
            Box breathing, also referred to as square breathing, is a deep
            breathing technique that can help you slow down your breathing. It
            works by distracting your mind as you count to four, calming your
            nervous system, and decreasing stress in your body.
          </p>
          <p>
            Box breathing is a simple but powerful relaxation technique that can
            help return your breathing pattern to a relaxed rhythm. It can clear
            and calm your mind, improving your focus.
          </p>
        </div>
        <div>
          <BreathingAnimation />
        </div>
      </div>
    </>
  );
}

export default BoxBreathing;

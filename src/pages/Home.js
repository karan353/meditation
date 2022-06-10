import React from "react";
import tropic from "../assets/tropic.mp4";

function Home() {
  return (
    <>
      <video src={tropic} muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>You are not you mind</h2>
        <h3>You are the observer of your mind</h3>
        <p>
          Thoughts are constantly running but you can't control them. The way to
          end this is to become more aware of them. Once you do that, you no
          longer have to listen to them. Thoughts then can't control you.
        </p>
        <a href="#">Focus on NOW</a>
      </div>
      <ul className="social">
        <li>
          <a href="#">
            <img src="https://i.ibb.co/x7P24fL/facebook.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Home;

//  <>
//    <section className={isActive ? "showcase" : "showcase active"}>
//      <header>
//        <h2 className="logo">Meditation</h2>
//        <div
//          className={isActive ? "toggle" : "toggle active"}
//          onClick={ToggleClass}
//        ></div>
//      </header>
//      <video src={calm} muted loop autoPlay></video>
//      <div className="overlay"></div>
//      <div className="text">
//        <h2>You are not you mind</h2>
//        <h3>You are the observer of your mind</h3>
//        <p>
//          Thoughts are constantly running but you can't control them. The way
//          to end this, is to become more aware of them. Once you do that, you
//          no longer have to listen to them. Thoughts then can't control you.
//        </p>
//        <a href="#">Focus on NOW</a>
//      </div>
//      <ul className="social">
//        <li>
//          <a href="#">
//            <img src="https://i.ibb.co/x7P24fL/facebook.png" />
//          </a>
//        </li>
//        <li>
//          <a href="#">
//            <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
//          </a>
//        </li>
//        <li>
//          <a href="#">
//            <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
//          </a>
//        </li>
//      </ul>
//    </section>
//    <Menu />
//  </>;

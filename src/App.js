import "./App.css";
import { FaBehance, FaDribbble } from "react-icons/fa";
import { IoMailOutline, IoChevronForwardCircle, IoStar } from "react-icons/io5";
import { IconContext } from "react-icons";
import pic from './assets/images/bg.png';
import Card from "./components/Card";

function App() {
  return (
    <>
      <header>
        <div className="logo-wrapper">
          dev<span>page</span>
        </div>
        <div className="menu-container">
          <span>
            <IconContext.Provider
              className="icons_container"
              value={{ color: "#000", size: "18px" }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              <div className="icon">
                <FaDribbble />
              </div>
            </IconContext.Provider>
          </span>
          <span>
            <IconContext.Provider
              className="icons_container"
              value={{ color: "#000", size: "18px" }}
            >
              <div className="icon">
                <FaBehance />
              </div>
              hello@example.com
            </IconContext.Provider>
          </span>
          <span className="menu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="left_content_wrapper">
          <h2>
            <span>Design focused</span>
            <span>startup, for startups.</span>
          </h2>
          <p>
            When, while lovely valley teems with vapor around
            <br /> meridian sun strikes the upper world.
          </p>
          <div className="btn_group">
            <div className="btn btn_primary">
              Hire Me
              <IconContext.Provider
                className="icons_container"
                value={{ color: "#000", size: "25px" }}
              >
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </div>
            <div className="btn btn_secondary">Live Chat</div>
          </div>

          <div className="reviews_container">
            <p className="total_review">64+ Reviews</p>
            <IconContext.Provider
                className="icons_container"
                value={{ color: "#000", size: "18px" }}
              >
                <span><IoStar/></span>
                <span><IoStar/></span>
                <span><IoStar/></span>
                <span><IoStar/></span>
                <span><IoStar/></span>
              </IconContext.Provider>
              <p>More then 50+ people taking services.</p>
          </div>
        </div>

        <div className="right_content_wrapper">
        <img src={pic} alt="bg"/>

        </div>
      </div>


    <Card/>

    </>
  );
}

export default App;

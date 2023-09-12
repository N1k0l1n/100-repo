import './App.css';
import {IoMailOutline, IoChevronForwardCicle, IoStar, FaBehance, FaDribbble} from 'react-icons/fa';
import {IconContext} from 'react-icons';

function App() {
  return (
    <>
      <header>
        <div className='logo-wrapper'>
            dev<span>page</span>
        </div>
        <div className='menu-container'>
            <span>
              <IconContext.Provider className="icons_container" value={{color: "#000", size:"18px"}}>
                    <div className='icon'><FaBehance/></div>
                    <div className='icon'><FaDribbble/></div>
              </IconContext.Provider>
            </span>
            <span>
            <IconContext.Provider className="icons_container" value={{color: "#000", size:"18px"}}>
                    <div className='icon'><FaBehance/></div>
                    hello@example.com
              </IconContext.Provider>
            </span>
            <span className='menu'>
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>
      </header>

      <div className='content-wrapper'>
        <div className='left_content_wrapper'>
            <h2>
              <span>Design focused</span>
              <span>startup, for startups.</span>
            </h2>
          <p>When, while lovely valley teems with vapor around<br/> meridian sun strikes the upper world.</p>

        </div>
        <div className='right_content_wrapper'></div>
        </div>
    </>
  );
}

export default App;

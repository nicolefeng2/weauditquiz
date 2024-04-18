import "./Ending.css";
import whiteArrow from './assets/white_arrow.svg'
import redBanner from './assets/red_banner.png'
import { useNavigate } from "react-router-dom";

function Ending() {
  // initialize useNavigate
  const navigate = useNavigate();

  const handleSeeResults = () => {
    navigate('/result');
  }

  return (
    <div className="ending-base">
      
      <div className="ending-body">
        <div className="ending-banner-container">
          {/* <img src={redBanner} className="banner" alt="Banner" /> */}
          <p className="congrats-text"> Congrats! You finished the quiz: <br/> <p className="how-biased-text"> How Biased is AI? </p></p>
        </div>


        <div className="how-did-you-do-container">
          <p className="how-did-you-do-text"> How did you do, <br/> compared to others?</p>
        </div>
      </div>
  
      <div className="ending-button">
        <button className="ending-button-box" onClick={handleSeeResults}>
          <div className="ending-button-text">See Results</div>
          <img src={whiteArrow} className="arrow" alt="Arrow" />
        </button>
      </div>



    </div>

  )
}
export default Ending


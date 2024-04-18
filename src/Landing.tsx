import "./Landing.css";
import whiteArrow from './assets/white_arrow.svg'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

// starting page

function Landing() {
  // initialize useNavigate
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate('/flower'); // navigate to Flower.tsx
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    
    <div className="landing-base">
      
      <div className="banner">
        <div className="landing-header">
          <p className="how-biased-is-AI">How Biased are You?</p>
          <p className="take-quiz">Take the quiz and find out!</p>
        </div>
      </div>

      <div className="what-is-bias-container">
        <p className="what-is-bias-text"> 
          What exactly is <span className="bias-highlight">bias?</span>
        </p>
      </div>



      <div className="body-container">

        <div className="generic-bias-container">
          <div className="generic-bias-text-container">
            <p className="generic-bias-text">
              <span className="bias-highlight">Bias</span>
            </p>
          </div>

          <div className="generic-bias-definition-container">
            <p className="generic-bias-definition">
            A systematic discrimination based on the inappropriate use of certain characteristics.
            </p>
          </div>
        </div>
          
          
        <div className="generic-bias-container">
          <div className="generic-bias-text-container"> 
            <p className="generic-bias-text">
              <span id="gender-bias-highlight">Gender Bias</span>
              {/* <span>=</span> */}
            </p>
          </div>
          
          <div className="generic-bias-definition-container">
            <p className="generic-bias-definition">
              <span>Unfair treatment based on </span>
              <span className="text-underline">gender</span>
              <span> or gender identity whether male/female/non-binary, including </span>
              <span className="text-underline">sexism</span>
              <span> and</span>
              <span className="text-italic">&nbsp;</span>
              <span className="text-underline">misogyny</span>
            </p>
          </div>
        </div>

          
        <div className="generic-bias-container">
          <div className="generic-bias-text-container"> 
            <p className="generic-bias-text">
              <span id="racial-bias-highlight">Racial Bias</span>
              {/* <span>=</span> */}
            </p>
          </div>

          <div className="generic-bias-definition-container">
            <p className="generic-bias-definition">
              <span>Preconceived notions or discrimination based on </span>
              <span className="text-underline">race</span>
              <span> or </span>
              <span className="text-underline">ethnicity</span>
              <span>, including </span>
              <span className="text-underline-italic">systemic</span>
              <span >&nbsp;</span>
              <span className="text-underline-italic">inequities</span>
              <span className="text-italic">&nbsp;</span>
              <span>
                – often rooted in historical, social, and institutional contexts.
              </span>
            </p>
          </div>
        </div>

          
        <div className="generic-bias-container">
          <div className="generic-bias-text-container">
            <p className="generic-bias-text" id="sexual-bias-highlight">
              <span>Sexual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <br />
              <span> Orientation </span>
              <br />
              <span> Bias </span>
            </p>
          </div>

          <div className="generic-bias-definition-container">
            <p className="generic-bias-definition">
              <span>Stereotypes or discrimination based on </span>
              <span className="text-underline">sexual orientation</span>
              <span className="text-italic">&nbsp;</span>
              <span>or</span>
              <span className="text-italic">&nbsp;</span>
              <span>
                preferences. <br />
                This can include{" "}
              </span>
              <span className="text-underline">homophobia</span>
              <span>, </span>
              <span className="text-underline">biphobia</span>
              <span>, and </span>
              <span className="text-underline">transphobia</span>
              <span>.</span>
            </p>
          </div>
        </div>


      </div>


      <div className="bottom-bar">
        <div className="learn-more">
          <div className="learn-more-box">
            <a className="learn-more-text" href="https://drive.google.com/file/d/18_BAVxrvkxk0xiynMM_WCd1I-PhApt2N/view?usp=sharing" target="_blank">
                Learn more about <br/>biases here
            </a>
          </div>
        </div>

        <div className="start-quiz">
          <button className="start-box" onClick={handleStartQuiz}>
            <div className="start-text">Start the quiz</div>
            <img src={whiteArrow} className="arrow" alt="Arrow" />
          </button>
        </div>
      </div>

      

  
    </div>
  )
}
export default Landing

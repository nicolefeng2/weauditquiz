import "./BiasDistribution.css";
import "./Result.css";
import {DistrBody} from './BiasDistribution'
import whiteArrow from './assets/white_arrow.svg'
import { useNavigate } from "react-router-dom";

function Result() {
  // initialize useNavigate
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  }

  return (
    <div className="result-base">
      <div className="BiasDistribution-base">
        {/* <BiasDistribution distr="flower" button={false} />
        <BiasDistribution distr="tree" button={false} />
        <BiasDistribution distr="baby" button={false} />
        <BiasDistribution distr="ceo" button={false} />
        <BiasDistribution distr="couple" button={false} />
        <BiasDistribution distr="wedding" button={false} />
        <BiasDistribution distr="doctor" button={false} /> */}
        <DistrBody distr="flower" button={false}/>
        <DistrBody distr="tree" button={false}/>
        <DistrBody distr="baby" button={false}/>
        <DistrBody distr="ceo" button={false}/>
        <DistrBody distr="couple" button={false}/>
        <DistrBody distr="wedding" button={false}/>
        <DistrBody distr="doctor" button={false}/>

        <div className="result-quiz">
          <button className="result-box" onClick={handleBackHome}>
            <div className="result-text">Go Back Home</div>
            <img src={whiteArrow} className="arrow" alt="Arrow" />
          </button>
        </div>

      </div>

      
  
     
    </div>

  )
}
export default Result


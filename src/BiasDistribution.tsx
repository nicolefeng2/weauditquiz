import "./BiasDistribution.css";
import Box from './Box'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// EDIT POINT: When adding a new prompt, make sure to add import for "{promp}_distr" image
import baby_distr from './assets/distributions/baby_distr.png';
import ceo_distr from './assets/distributions/ceo_distr.png';
import couple_distr from './assets/distributions/couple_distr.png';
import doctor_distr from './assets/distributions/doctor_distr.png';
import flower_distr from './assets/distributions/flower_distr.png';
import tree_distr from './assets/distributions/tree_distr.png';
import wedding_distr from './assets/distributions/wedding_distr.png';

import baby from './assets/prompts/baby.png';
import ceo from './assets/prompts/ceo.jpeg';
import couple from './assets/prompts/couple.png';
import doctor from './assets/prompts/doctor.png';
import flower from './assets/prompts/flower.png';
import tree from './assets/prompts/tree.png';
import wedding from './assets/prompts/wedding.png';

import whiteArrow from './assets/white_arrow.svg'

// EDIT POINT: When adding a new prompt, make sure to add import for json input data
import flowerData from './inputs/flower.json'
import treeData from './inputs/tree.json'
import babyData from './inputs/baby.json'
import ceoData from './inputs/ceo.json'
import doctorData from './inputs/doctor.json'
import weddingData from './inputs/wedding.json'
import coupleData from './inputs/couple.json'

interface BiasDistributionProps {
  distr: string;
  button: boolean;
}
function DistrBody({ distr, button }: BiasDistributionProps){
  // colors dictionary
  const colorDict = {
    "green": '#D6F57B',
    "darkGreen": '#43A42B',
    "yellow": '#F5F17B',
    "darkYellow": '#AAAD0E',
    "orange": '#FFD6B1',
    "darkOrange": '#FF7629',
    "red": '#FFB1B1',
    "darkRed": '#FF4D4D',
  }
  // picture dictionary
  // EDIT POINT: make sure to add new prompts in here
  const chartDict = {
    "flower": flower_distr,
    "tree": tree_distr,
    "baby": baby_distr,
    "ceo": ceo_distr,
    "couple": couple_distr,
    "wedding": wedding_distr,
    "doctor": doctor_distr,
  }

  const picDict = {
    "flower": flower,
    "tree": tree,
    "baby": baby,
    "ceo": ceo,
    "couple": couple,
    "wedding": wedding,
    "doctor": doctor,
  }

  // data dictionary
  // EDIT POINT: make sure to add new prompts in here
  const dataDict = {
    "flower": flowerData,
    "tree": treeData,
    "baby": babyData,
    "ceo": ceoData,
    "couple": coupleData,
    "wedding": weddingData,
    "doctor": doctorData,
  }

  const { 
    prompt,
    topLeftBox: {
      color: topLeftColor,
      labelColor: topLeftLabelColor,
      rating: topLeftRating,
      quote: topLeftQuote,
      percent: topLeftPercent,
      yourChoice: topLeftYourChoice
    },
    topRightBox: {
      color: topRightColor,
      labelColor: topRightLabelColor,
      rating: topRightRating,
      quote: topRightQuote,
      percent: topRightPercent,
      yourChoice: topRightYourChoice
    },
    bottomLeftBox: {
      color: bottomLeftColor,
      labelColor: bottomLeftLabelColor,
      rating: bottomLeftRating,
      quote: bottomLeftQuote,
      percent: bottomLeftPercent,
      yourChoice: bottomLeftYourChoice
    },
    bottomRightBox: {
      color: bottomRightColor,
      labelColor: bottomRightLabelColor,
      rating: bottomRightRating,
      quote: bottomRightQuote,
      percent: bottomRightPercent,
      yourChoice: bottomRightYourChoice
    }
  } = dataDict[distr as keyof typeof dataDict];

  return(
      <div className="DistrBody-base">
        <div className="title-container">
          <div className="title-box">
            <p className="title-text">
              <span className="text-regular">Bias Distribution Results: </span>
              <span id="prompt-title">{prompt}</span>
            </p>
          </div>
        </div>
        <div className="pictures">
          {!button && <img src={picDict[distr as keyof typeof picDict]} className="picture-img" alt={prompt} />}
        </div>
        <div className="distr-body-container">
          <div className="chart">
            <img src={chartDict[distr as keyof typeof chartDict]} className="chart-img" alt="chart-name" />
          </div>
          <div className="stats-container">
            <div className="row">
              <div className="top-row-box">
                <Box 
                  color={colorDict[topLeftColor as keyof typeof colorDict]} 
                  labelColor={colorDict[topLeftLabelColor as keyof typeof colorDict]}
                  rating={topLeftRating}
                  quote={topLeftQuote}
                  percent={topLeftPercent}
                  yourChoice={topLeftYourChoice}
                />
              </div>
              <div className="top-row-box">
                <Box 
                  color={colorDict[topRightColor as keyof typeof colorDict]} 
                  labelColor={colorDict[topRightLabelColor as keyof typeof colorDict]}
                  rating={topRightRating}
                  quote={topRightQuote}
                  percent={topRightPercent}
                  yourChoice={topRightYourChoice}
                />
              </div>
            </div>
            <div className="row">
              <div className="bottom-row-box">
                <Box 
                  color={colorDict[bottomLeftColor as keyof typeof colorDict]} 
                  labelColor={colorDict[bottomLeftLabelColor as keyof typeof colorDict]}
                  rating={bottomLeftRating}
                  quote={bottomLeftQuote}
                  percent={bottomLeftPercent}
                  yourChoice={bottomLeftYourChoice}
                />
              </div>
              <div className="bottom-row-box">
                <Box 
                  color={colorDict[bottomRightColor as keyof typeof colorDict]} 
                  labelColor={colorDict[bottomRightLabelColor as keyof typeof colorDict]}
                  rating={bottomRightRating}
                  quote={bottomRightQuote}
                  percent={bottomRightPercent}
                  yourChoice={bottomRightYourChoice}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export {DistrBody};

function BiasDistribution({ distr, button }: BiasDistributionProps) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  // next_prompt dictionary
  // EDIT POINT: make sure to add new prompts in here for flow
  const nextPromptDict = {
    "flower": "tree",
    "tree": "baby",
    "baby": "ceo",
    "ceo": "couple",
    "couple": "wedding",
    "wedding": "doctor",
    "doctor": "ending",
  }

  // initialize useNavigate
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/${nextPromptDict[distr as keyof typeof nextPromptDict]}`); // navigate to next prompt
  }

  function NextButton() {
    return(
      <div className="next-container">
        <button className="next-box" onClick={handleSubmit}>
          <div className="next-text">Next</div>
          <img src={whiteArrow} className="arrow1" alt="Arrow" />
        </button>
      </div>
    );
  }

  return (
    <div className="BiasDistribution-base">
      {button && <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>}
      {<DistrBody distr={distr} button={button}/>}
      {button && <NextButton/>}
    </div>
  );
}
export {BiasDistribution};
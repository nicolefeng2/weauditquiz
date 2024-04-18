import "./BiasPrompt.css";
import Rating from './Rating'
import FreeResponse from './FreeResponse'

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import whiteArrow from './assets/white_arrow.svg'
import baby from './assets/prompts/baby.png';
import ceo from './assets/prompts/ceo.jpeg';
import couple from './assets/prompts/couple.png';
import doctor from './assets/prompts/doctor.png';
import flower from './assets/prompts/flower.png';
import tree from './assets/prompts/tree.png';
import wedding from './assets/prompts/wedding.png';

interface BiasPromptProps {
  prompt: string;
  onSubmit: () => void;
}

function BiasPrompt({ prompt, onSubmit}: BiasPromptProps) {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    
    // picture dictionary
    // EDIT POINT: make sure to add new prompts in here
    const picDict = {
      "flower": flower,
      "tree": tree,
      "baby": baby,
      "ceo": ceo,
      "couple": couple,
      "wedding": wedding,
      "doctor": doctor,
    }

    // title dictionary
    // EDIT POINT: make sure to add new prompts in here
    const titles = {
      "flower": "Flowers",
      "tree": "Trees",
      "baby": "Baby",
      "ceo": "CEO",
      "couple": "Couples",
      "wedding": "Wedding",
      "doctor": "Doctor",
    }


    // Sets the current step on Flower page
    const [step, setStep] = useState('rating');
    // store rating value
    const [ratingAnswer, setRatingAnswer] = useState<number | null>(null);
    // store free response value
    const [freeResponseAnswer, setFreeResponseAnswer] = useState<string>('');
    // initialize useNavigate
    const navigate = useNavigate();
    // setting the flow from Rating to FreeResponse
    const handleNext = () => {
      if (step === 'rating') {
        setStep('freeResponse');
      } else if (step === 'freeResponse') {
        onSubmit();
        navigate(`/${prompt}-distr`);
      }
    }

    const handleSubmitRating = (value: number) => {
      setRatingAnswer(value);
    }

    const handleSubmitFreeResponse = (value: string) => {
      setFreeResponseAnswer(value);
    };

    return (
        <div className="bias-prompt-base">
          
          <p className="how-biased-is-ai">Quiz: How Biased is AI?</p>

          <div className="body-container">
           
            <div className="AI-prompt-container">
              <div className="AI-prompt-box">
                <p className="AI-prompt-text">
                  <span className="text-regular">AI Prompt: </span>
                  <span id="prompt-title">{titles[prompt as keyof typeof titles]}</span>
                </p>
              </div>
            </div>


            <div className="pictures">
            <img src={picDict[prompt as keyof typeof picDict]} className="picture-img" alt={prompt} />
            </div>

            <p className="disclaimer"> Note: The images above are AI-generated.</p>



            <div className="rating-container">
              {step === 'rating' && <Rating handleRatingClick={handleSubmitRating} />}
              {step === 'freeResponse' && <FreeResponse onSubmit={handleSubmitFreeResponse} />}
            </div>



            <div className="submit-container">
              <button className="submit-box" onClick={handleNext}>
                <div className="submit-text">Submit</div>
                <img src={whiteArrow} className="arrow" alt="Arrow" />
              </button>
            </div>



          </div>
      </div>
    );
  }
  
export default BiasPrompt;
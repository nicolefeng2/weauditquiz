import "./Rating.css";
import { useState } from 'react';

interface RatingProps {
  handleRatingClick: (value: number) => void;
}

function Rating({ handleRatingClick }: RatingProps){
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const triggerHandleRatingClick = (value: number) => {
    setSelectedRating(value);
    handleRatingClick(value);
  };

  return(
    <div className="rating-container">
          
      <div className="circle-container">
        {[1, 2, 3, 4, 5].map((value, _) => (
          <span
            key={value}
            className={`circle ${selectedRating === value ? 'selected' : ''}`}
            onClick={() => triggerHandleRatingClick(value)}
          ></span>
        ))}

      </div>

      <div className="label-container">
        <span id="circle1-label"> 
          <p className="label">Totally<br /><span className="text-bold"> Unharmful<br /></span>Bias</p>
        </span>
        <span id="circle3-label"> 
          <p className="label"> Neutral </p>
        </span>
        <span id="circle5-label"> 
          <p className="label">Totally<br /><span className="text-bold"> Harmful<br /></span>Bias</p>
          </span>
      </div>

    </div>
  );
}
export default Rating;
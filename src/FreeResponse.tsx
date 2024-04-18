import "./FreeResponse.css";
import { useState } from 'react';

interface FreeResponseProps {
  onSubmit: (value: string) => void;
}

function FreeResponse({ onSubmit }: FreeResponseProps){

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Do something with the submitted value, e.g., send it to an API
    onSubmit(inputValue); // Pass the inputValue to the parent component
    // Clear the input after submission
    setInputValue('');
  };
  
  return(
    <div className="feedback-container">
      <div className="feedback-prompt-container">
        <p className="feedback-prompt">
          What type of bias did you identify? Why was it harmful/un-harmful/neutral?
        </p>
      </div>

      <div className="feedback-repsonse-container">  
        <form className="feedback-window" onSubmit={handleSubmit}>
          <input
            className="input-window"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your response here..."
          />
          {/* <button type="submit">Submit</button> */}
        </form>
      </div>
    </div>
  );
}
export default FreeResponse;
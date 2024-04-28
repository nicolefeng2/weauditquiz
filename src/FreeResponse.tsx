import "./FreeResponse.css";
import { useState } from 'react';

interface FreeResponseProps {
  onSubmit: (value: string) => void;
}

function FreeResponse({ onSubmit }: FreeResponseProps){

  const [freeResponse, setFreeResponse] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Do something with the submitted value, e.g., send it to an API
    onSubmit(freeResponse); // Pass the inputValue to the parent component
    // Clear the input after submission
    console.log(freeResponse);
    setFreeResponse('');
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
            onChange={(e) => setFreeResponse(e.target.value)}
            placeholder="Type your response here..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default FreeResponse;
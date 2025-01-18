import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  
  const [isGif, setIsGif] = useState(false);  // Default to static background (false)
  const [isButtonVisible, setIsButtonVisible] = useState(true);  // State to control button visibility

  // Function to toggle the background between GIFs
  const toggleBackground = () => {
    const newState = !isGif;
    setIsGif(newState); // Update the state
    setIsButtonVisible(false); // Hide the button after it’s clicked
    localStorage.setItem('backgroundGif', newState); // Store the background state in localStorage
    localStorage.setItem('buttonVisible', true); // Persist button visibility state in localStorage
   
  };

  // Set the background state when the page loads
  useEffect(() => {
    // Always reset button visibility on page load (clear it from localStorage)
    setIsButtonVisible(true); // Button will always be visible on refresh

    // Check if there's any saved background state in localStorage
    const savedState = localStorage.getItem('./Move.gif');
    if (savedState !== null) {
      setIsGif(JSON.parse(savedState));  // Retrieve the background state from localStorage
    } else {
      // If no state is saved in localStorage, set static background as the default
      setIsGif(false); // Start with static background
    }
  }, []); // Run only once on page load

  return (
    <>
      <div className={`background ${isGif ? 'gif-background' : 'static-background'}`}>
        {/* Conditionally render the toggle button */}
        {isButtonVisible && (
          <button onClick={toggleBackground} className="toggle-button">
           
              
               
          </button>
        )}
        
      </div>

      {/* New section with white background */}
      <div className="white-section">
        <h2>Next Section</h2>
        <p>This section has a white background.</p>
      </div>
    </>
  );
}

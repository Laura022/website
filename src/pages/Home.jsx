import React, {useState, useEffect} from 'react'
import './Home.css'


export default function Home(){
  const [isGif, setIsGif] = useState(false);  // State to toggle between GIF and static image

  // Function to toggle the background
  const toggleBackground = () => {
    setIsGif(prevState => !prevState);  // Toggle the state value
  };


  return (
    <div className={`background ${isGif ? 'gif-background' : 'static-background'}`}>
      <button onClick={toggleBackground} className="toggle-button">
        Toggle Background
      </button>
      <h1>Welcome to the Homepage!</h1>
    </div>

    )
}
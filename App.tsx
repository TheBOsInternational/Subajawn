import React, { useState } from 'react';
import './style.css';
import BackgroundText from './BackgroundText';

const demands = [
  "Unban all BOs from both stream and Discord",
  "Recognise your status as a slampig",
  "Mod Reshi",
  "4 hours of uninterrupted song requests a day",
  "Monkey stream where girls rate you",
  "Play variety (VR, Crab Game, Roblox, Minecraft, Phasmophobia, Jackbox)",
  "Make a viewer tier list",
  "Constant call-ins when at home",
  "Have bedroom door open at all times",
  "Do Uber Eats or DoorDash stream (So you actually have a job)",
  "Review sketch’s OF on a discord stream (Alternatively re-create Sketch’s OF)",
  "Do viewers control my account",
  "Gambling stream (You still have $200 on punt)",
  "Pay Wawa back for your stolen energy drinks on stream",
  "Give Aeqi his $11",
  "Confess to illegally using your mom's handicap sign to the police on stream",
  "Acknowledge that you scammed Oyeah of 1b and banned him to escape responsibility",
];

const App: React.FC = () => {
  const [currentDemand, setCurrentDemand] = useState(0);

  const handleNext = () => {
    setCurrentDemand((prevDemand) => {
      if (prevDemand >= demands.length - 1) { // Prevent going forward if index is the second last or last
        return prevDemand;
      } else {
        return (prevDemand + 1) % demands.length;
      }
    });
  };

  const handlePrevious = () => {
    setCurrentDemand((prevDemand) => {
      if (prevDemand < 1) { // Prevent going backwards if index is 1 or 0
        return prevDemand;
      } else {
        return (prevDemand - 1) % demands.length;
      }
    });
  };

  return (
    <div className="background-container">
      <BackgroundText text="Subajawn 😈" />
      <div className="main-message">
        <h1>Hello there, Jawn</h1>
        <div className="message">We are the BO's. We understand that you wish to have a clean and problem free Subajawn. Because of this we have made a list of demands, that you must fulfil.</div>
        <div className='message'> In Salami.</div>
        <div className="demands-container">
          <button onClick={handlePrevious} className="arrow-button">←</button>
          <div className="demand-text">{demands[currentDemand]}</div>
          <button onClick={handleNext} className="arrow-button">→</button>
        </div>
        <div className="demand-counter">
          {currentDemand + 1} / {demands.length}
        </div>
      </div>
    </div>
  );
};

export default App;



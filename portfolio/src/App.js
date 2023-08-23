import React, {useState} from 'react';
import './App.css';


import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';
// import SideBarComponent from './components/SideBarComponent';

// Images for items
import checkers from "./images/checkers.png";
import resumePDF from "./Simon_Resume.pdf";
import bitCoin from "./images/defender.png";
import fitFlow from "./images/fitFlowHome.png";
import mp3 from "./images/mp3Player.png";
import ppal from "./images/ppal.png";
//

const desc1 = "A simple game of checkers created using react.";

const desc2 ="A Tower Defence android game where you protect your precious graphics cards from the bitcoin miners.";

const desc3 ="A Music player application created with C# and the .Net framework. Select folders you wish to look for mp3 files and play them.";

const desc4 = "A website created for CitroHacks 2023 that uses the OpenAI api to generate weekly plans for the user. I worked on the back-end communications for this project.";

const desc5 ="A website that allows users to search and save recipes. Users can sign up and keep their list of saved recipes, and view them at any time. Worked on the user authentication between the client and server/database and the login/signup page. Created using React, Flask, Tailwind, and MongoDB."

const eduDesc = "A used item selling website built to help students find items that other students no longer need. Users can sell or give away their old school supplies to others in the local area. Users can search and filter their interests by location and communicate through live chatting to confirm their meetup location."
function App() {

  const [mode, setMode] = useState(0);
  
  const handleSetMode = (value) => {
    console.log(value);
    if(value === 2)
    {
      value = 1;
      // Open Resume file
      window.open(resumePDF);
    }  
    
    setMode(value);
  }
  return (
    <div className="App">
      <header>
        <HeaderComponent headerText="Simon Huang" arrayOfHeaders={["Home", "Projects", "Resume", "Contact"]} setMode={handleSetMode}/>
      </header>
        
      {/* <SideBarComponent arrayOfHeaders={["Home", "Projects", "Resume"]} 
                        arrayOfImages={["images/home.png", "images/projects.png", "images/resume.png"]} 
                        setMode={handleSetMode}/> */}

      {/* About Section */}  

      <div className={mode === 0? 'slideInDownItem' : 'slideOutItem'}>
        <AboutComponent/>
      </div>  
      


      
      {/* Project Section */}
      <div className={mode === 1? 'slideUpDelayedItem' : 'slideDownDelayedItem'}>
        <DisplayBoxComponent>
          <DisplayComponent
            title = "EduTrade"
            description = {eduDesc}
            gitLink = "https://github.com/Jeffuz/EduTrade"
            technologyUsed="React - Firebase/Firestore - Tailwind CSS"
            images = {[]}
            isLiveLink = {true}
            liveLink = "https://jeffuz.github.io/EduTrade/"
          />
          <DisplayComponent 
            title = "Pantry Pal" 
            description = {desc5} 
            gitLink = "https://github.com/Jeffuz/Pantry-Pals"
            technologyUsed = "React - Flask - MongoDB - Tailwind CSS"
            images = {[ppal]}
            isLiveLink = {false}/>


          <DisplayComponent 
            title = "FitFlow" 
            description = {desc4} 
            gitLink = "https://github.com/Jeffuz/FitFlow"
            technologyUsed  ="React - Flask - MongoDB - Tailwind CSS"
            images = {[fitFlow, checkers]}
            isLiveLink = {true}
            liveLink = "https://devpost.com/software/fitflow-pacuwy"/>
          
          <DisplayComponent
            title = "Mp3 Player"
            description = {desc3}
            gitLink = "https://github.com/SaltMeister/Mp3Player"
            technologyUsed="C# - .Net - WPF"
            images = {[mp3]}
            isLiveLink = {false}/>

          <DisplayComponent
            title = "Checkers"
            description = {desc1}
            gitLink = "https://github.com/SaltMeister/checkers"
            technologyUsed = "React"
            images = {[checkers]}
            isLiveLink = {true}
            liveLink = "https://saltmeister.github.io/checkers/"
            />

          <DisplayComponent
            title = "Bitcoin Defender"
            description = {desc2}
            gitLink = ""
            technologyUsed = "Java - LibGDX"
            images = {[bitCoin]}
            isLiveLink = {false}
          />
            {/* 
          <DisplayComponent title="Checkers" description={desc1} link="https://saltmeister.github.io/checkers/" />
          <DisplayComponent title="Bitcoin Defenders" description={desc2} link="https://github.com/SaltMeister/BitcoinDefender"/> */}
        </DisplayBoxComponent>

        <div className="footer">
          <p>All Rights Reserved © 2023</p>
        </div>

      </div>
      
      <div className={mode === 3? 'slideInDownItem' : 'slideOutItem'}>
        <ContactComponent/>
      </div>


    </div>
  );
}

export default App;

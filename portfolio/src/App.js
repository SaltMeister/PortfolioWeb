import React, {useState} from 'react';
import './App.css';


import AboutComponent from './components/AboutComponent';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';

const desc1 = "A simple game of checkers created using react.";
const desc2 ="An android game where you defend your graphics cards from bitcoin miners. Created using Java";
const desc3 ="A Music player created with C# and the .Net framework";
const desc4 = "A website created for CitroHacks 2023 that uses the OpenAI api to generate weekly plans for the user. Created using React, Flask, and Tailwind CSS.";
const desc5 ="A website that allows users to search and save recipes. Users can sign up and keep their data. Worked on the user authentication between the client and server/database. Created using React, Flask, Tailwind, and MongoDB."

function App() {

  const [mode, setMode] = useState(0);
  
  const handleSetMode = (value) => {
    console.log(value);
    if(value === 2)
    {
      value = 1;
      // Open Resume file
      //window.open("Simon_Resume.pdf");
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
      <div className={mode === 0? 'slideInDown' : 'slideOutItem'}>
        <AboutComponent/>
      </div>  
      


      
      {/* Project Section */}
   
        {/* <DisplayBoxComponent title="Projects">
          <DisplayComponent title="Pantry Pal" description={desc5} link="https://github.com/Jeffuz/Pantry-Pals"/>
          <DisplayComponent title="FitFlow" description={desc4} link="https://devpost.com/software/fitflow-pacuwy"/>
          <DisplayComponent title="Music Player" description={desc3} link="https://github.com/SaltMeister/Mp3Player"/>
          <DisplayComponent title="Checkers" description={desc1} link="https://saltmeister.github.io/checkers/" />
          <DisplayComponent title="Bitcoin Defenders" description={desc2} link="https://github.com/SaltMeister/BitcoinDefender"/>
        </DisplayBoxComponent>

        <DisplayBoxComponent>
          
        </DisplayBoxComponent> */}


      <footer>
        <div className="footer">
          <p>All Rights Reserved © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

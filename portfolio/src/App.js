import './App.css';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';

function App() {
  const desc1 = "A simple game of checkers created using react.";
  const desc2 ="An android game where you defend your graphics cards from bitcoin miners.";
  const desc3 ="A Music player created with C# and the .Net framework";
  const desc4 = "A website created for CitroHacks 2023 that uses the OpenAI api to generate weekly plans for the user. Created using React, Flask, and Tailwind CSS.";
  const desc5 ="A website that allows users to search and save recipes. Users can sign up and keep their data. Worked on the user authentication between the client and server/database. Created using React, Flask, Tailwind, and MongoDB."
  return (
    <div className="App">
      <header>
        <HeaderComponent headerText="Portfolio"/>
      </header>
      
      <SideBarComponent arrayOfHeaders={["Home", "Projects", "Resume"]}/>
      <DisplayBoxComponent>
        
      </DisplayBoxComponent>
      
      {/* Project Section */}
      <DisplayBoxComponent>
        <DisplayComponent title="Pantry Pal" description={desc5} link="https://github.com/Jeffuz/Pantry-Pals"/>
        <DisplayComponent title="FitFlow" description={desc4} link="https://devpost.com/software/fitflow-pacuwy"/>
        <DisplayComponent title="Checkers" description={desc1} link="https://saltmeister.github.io/checkers/" />
        <DisplayComponent title="Bitcoin Defenders" description={desc2} link="https://github.com/SaltMeister/BitcoinDefender"/>
        <DisplayComponent title="Music Player" description={desc3} link="https://github.com/SaltMeister/Mp3Player"/>
      </DisplayBoxComponent>

      {/* Resume Section */}
      <DisplayBoxComponent>

      </DisplayBoxComponent>
      <footer>

      </footer>
    </div>
  );
}

export default App;

import './App.css';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';

function App() {
  const desc1 = "A simple game of checkers created using react.";
  const desc2 ="An android game where you defend your graphics cards from bitcoin miners.";
  const desc3 ="test";
  const desc4 = "A website created for CitroHacks 2023 that uses the OpenAI api to generate weekly plans for the user. Created using React, Flask, and Tailwind CSS.";
  const desc5 ="A website that allows users to search and save recipes. Users can sign up and keep their data. Created using React, Flask, Tailwind, and MongoDB."
  return (
    <div className="App">
      <HeaderComponent headerText="Portfolio"/>
      <SideBarComponent arrayOfHeaders={["Home", "Projects", "Resume"]}/>

      <DisplayBoxComponent>
        <DisplayComponent title="Pantry Pal" description={desc5} link=""/>
        <DisplayComponent title="FitFlow" description={desc4} link="https://devpost.com/software/fitflow-pacuwy"/>
        <DisplayComponent title="Checkers" description={desc1} link="https://saltmeister.github.io/checkers/" />
        <DisplayComponent title="Bitcoin Defenders" description={desc2} link="https://github.com/SaltMeister/BitcoinDefender"/>
        <DisplayComponent title="Music Player" description={desc3} link="https://github.com/SaltMeister/Mp3Player"/>
      </DisplayBoxComponent>
    </div>
  );
}

export default App;

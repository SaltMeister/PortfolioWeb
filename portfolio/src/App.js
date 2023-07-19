import './App.css';
import DisplayBoxComponent from './components/DisplayBoxComponent';
import DisplayComponent from './components/DisplayComponent';
import HeaderComponent from './components/HeaderComponent';
import SideBarComponent from './components/SideBarComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent headerText="Portfolio"/>
      <SideBarComponent arrayOfHeaders={["Home", "Projects", "Resume"]}/>

      <DisplayBoxComponent>
        <DisplayComponent title="Test" />
        <DisplayComponent title="Text2"/>
      </DisplayBoxComponent>
    </div>
  );
}

export default App;

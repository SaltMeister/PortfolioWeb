import './App.css';
import SideBarComponent from './components/SideBarComponent';

function App() {
  return (
    <div className="App">
      <SideBarComponent arrayOfHeaders={["Home", "Projects", "Resume"]}/>
    </div>
  );
}

export default App;

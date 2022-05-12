import Tabs from "./UI/Tabs/Tabs";

import tabsInfo from './DB/TABS_DATA.json'

import './App.css';

function App() {
  return (
    <div className="App">
      <div  className="container">
        <Tabs tabsInfo={tabsInfo}/>
      </div>
    </div>
  );
}

export default App;

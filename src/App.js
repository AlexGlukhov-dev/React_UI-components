import {useState} from "react";

import Tabs from "./UI/Tabs/Tabs";

import tabsInfo from './DB/TABS_DATA.json'

import './App.css';
import Modal from "./UI/Modal";

function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <div className="App">
      <div  className="container">
        <section>
          <h3>Tabs component</h3>
        <Tabs tabsInfo={tabsInfo}/>
        </section>
        <section>
          <h3>Modal(popup) component</h3>
          <button onClick={() => setModalActive(true)}>Open modal</button>
          <Modal active={modalActive} setActive={setModalActive}>
            <p>Place content here</p>
          </Modal>
        </section>

      </div>
    </div>
  );
}

export default App;

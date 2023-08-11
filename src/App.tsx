import { useState } from "react";
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import './App.css';
import Overlay from "./components/Overlay";
import List from "./components/List";

export default function App() {
  const [show, setShow] = useState(false),
    [showCircle, setShowCircle] = useState(false),
    showModalHandler: () => void = () => setShow(true),
    hideModalHandler: () => void = () => setShow(false);

  return (
    <div className="app">
      <h1>React Animations</h1>
      <Overlay show={show} hideModalHandler={hideModalHandler} />
      <div className="buttons-wrapper">
        <button className="button" onClick={showModalHandler}>Open Modal</button>
        <button className="button" onClick={() => setShowCircle(prevShowCircle => !prevShowCircle)}>{`${showCircle ? 'Hide' : 'Show'} Circle`}</button>
      </div>
      <h3>Animating Lists</h3>
      <List />
      <Transition in={showCircle} timeout={100} mountOnEnter unmountOnExit>
        {(state: TransitionStatus) => <div
          style={{
            transform: `scale(${state === 'entered' ? 1 : 0})`,
            transition: 'all 100ms ease-in-out',
          }}
          className={`circle`}
        />}
      </Transition>
    </div>
  );
}

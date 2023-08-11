import { useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
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
      <CSSTransition
        in={showCircle}
        timeout={250}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: '',
          enterActive: 'circle-open',
          exit: '',
          exitActive: 'circle-close'
        }}
      >
        <div className='circle' />
      </CSSTransition>
    </div>
  );
}

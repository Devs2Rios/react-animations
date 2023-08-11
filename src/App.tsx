import { useState } from "react";
import './App.css';
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import List from "./components/List";

export default function App() {
  const [show, setShow] = useState(false),
    showModalHandler = () => setShow(true),
    hideModalHandler = () => setShow(false);

  return (
    <div className="app">
      <h1>React Animations</h1>
      <Modal show={show} closed={hideModalHandler} />
      <Backdrop show={show} closed={hideModalHandler} />
      <button className="button" onClick={showModalHandler}>Open Modal</button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

import { useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import './List.css';

export default function List() {
    const [items, setItems] = useState<number[]>([1, 2, 3]),
        addItemHandler = () => {
            setItems((prevItems: number[]) => [...prevItems, prevItems.length + 1]);
        },
        removeItemHandler = (index: number) => {
            setItems(prevState => {
                prevState.splice(index, 1);
                return [...prevState];
            });
        };

    return (
        <div>
            <button className="button" onClick={addItemHandler}>Add Item</button>
            <p>Click Item to Remove.</p>
            <TransitionGroup component='ul' className="list">
                {items.map((item, index) => (
                    <CSSTransition
                        key={index}
                        timeout={250}
                        classNames={{
                            enter: '',
                            enterActive: 'list-item-enter',
                            exit: '',
                            exitActive: 'list-item-exit'
                        }}
                    >
                        <li
                            className="list-item"
                            onClick={() => removeItemHandler(index)}
                        >
                            {item}
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}
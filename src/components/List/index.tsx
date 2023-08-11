import { useState } from 'react';
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
            <ul className="list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="list-item"
                        onClick={() => removeItemHandler(index)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
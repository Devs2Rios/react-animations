import { TransitionStatus } from 'react-transition-group/Transition';
import clsx from 'clsx';
import './Modal.css';

interface ModalProps {
    status: TransitionStatus;
    closed: () => void;
}

export default function Modal({ status, closed }: ModalProps) {
    return (
        <div
            className={
                clsx({
                    'modal': true,
                    'modal-open': status === 'entering',
                    'modal-closed': status === 'exiting'
                })
            }
        >
            <h1>A Modal</h1>
            <button className="button" onClick={closed}>Dismiss</button>
        </div>
    );
}
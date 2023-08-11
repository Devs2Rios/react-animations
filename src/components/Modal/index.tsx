import clsx from 'clsx';
import './Modal.css';

interface ModalProps {
    show: boolean;
    closed: () => void;
}

export default function Modal({ show, closed }: ModalProps) {
    return (
        <div className={clsx({
            'modal': true,
            'modal-open': show,
            'modal-closed': !show
        })}>
            <h1>A Modal</h1>
            <button className="button" onClick={closed}>Dismiss</button>
        </div>
    );
}
import { TransitionStatus } from 'react-transition-group/Transition';
import clsx from 'clsx';
import './Backdrop.css';

interface BackdropProps {
    status: TransitionStatus;
    closed: () => void;
}

export default function Backdrop({ status, closed }: BackdropProps) {
    return <div className={clsx({
        'backdrop': true,
        'backdrop-open': status === 'entering',
        'backdrop-closed': status === 'exiting'
    })} onClick={closed} />;
}
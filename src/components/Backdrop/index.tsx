import clsx from 'clsx';
import './Backdrop.css';

interface BackdropProps {
    show: boolean;
    closed: () => void;
}

export default function Backdrop({ show, closed }: BackdropProps) {
    return <div className={clsx({
        'backdrop': true,
        'backdrop-open': show,
        'backdrop-closed': !show
    })} onClick={closed} />;
}
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import Backdrop from '../Backdrop';
import Modal from '../Modal';

interface OverlayProps {
    show: boolean;
    hideModalHandler: () => void;
}

export default function Overlay({ show, hideModalHandler }: OverlayProps) {
    return (
        <Transition in={show} timeout={500} mountOnEnter unmountOnExit>
            {(state: TransitionStatus) =>
                <>
                    <Backdrop status={state} closed={hideModalHandler} />
                    <Modal status={state} closed={hideModalHandler} />
                </>
            }
        </Transition>
    );
}
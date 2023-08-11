import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import Backdrop from '../Backdrop';
import Modal from '../Modal';

interface OverlayProps {
    show: boolean;
    hideModalHandler: () => void;
}

const animationTime = {
    enter: 250,
    exit: 1000,
};

export default function Overlay({ show, hideModalHandler }: OverlayProps) {
    return (
        <Transition
            in={show}
            timeout={animationTime}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log('onEnter')}
            onEntering={() => console.log('onEntering')}
            onEntered={() => console.log('onEntered')}
            onExit={() => console.log('onExit')}
            onExiting={() => console.log('onExiting')}
            onExited={() => console.log('onExited')}
        >
            {(state: TransitionStatus) =>
                <>
                    <Backdrop status={state} closed={hideModalHandler} />
                    <Modal status={state} closed={hideModalHandler} />
                </>
            }
        </Transition>
    );
}
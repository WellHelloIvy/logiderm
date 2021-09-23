import React, { useEffect, useRef, useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

const ModalContext = React.createContext();
export function ModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current)
    },[]);

    return (
        <>
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
        <div ref={modalRef} />
        </>
    )
}

export function Modal({ onClose, children, className='' }) {
    const modalNode = useContext(ModalContext);
    if(!modalNode) return null;

    return ReactDOM.createPortal(
        <div id='modal'>
        <div id='modal-background' onClick={onClose} />
        <div id='modal-content' onClick={e => e.stopPropagation()} className={className}>
            {children}
        </div>
        </div>,
        modalNode
    );
}

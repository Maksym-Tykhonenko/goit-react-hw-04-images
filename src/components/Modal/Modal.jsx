import {createPortal } from 'react-dom';
//import { Component } from 'react';
import { useEffect} from 'react';
import { Overlay, ModalPopUp } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');


//export class Modal extends Component {
export function Modal({largeImg, tags, onClose}) {  
    
    //hendleBackdropClick = (e) => {
    //        if (e.currentTarget !== e.target) {
    //            this.props.onClose();
    //        };
    //};
    
    const handleBackdropClick = (e) => {
      if (e.currentTarget !== e.target) {
          onClose();
        };
    };

    useEffect(() => {
    
    const handleEscClick = (e) =>{
      if (e.code === 'Escape') {
          onClose();
      };
    };
    
    window.addEventListener('keydown', handleEscClick);
    return () => {
      window.removeEventListener('keydown', handleEscClick);
    };
    }, [onClose]);
    
    //componentDidMount(){
    //    window.addEventListener('keydown', this.hendleEscClick);
    //};
    //
    //componentWillUnmount() {
    //    window.removeEventListener('keydown', this.hendleEscClick)
    //};
//
//
    //hendleEscClick = (e) => {
    //    if (e.code === 'Escape') {
    //        this.props.onClose();
    //    };
    //};
    
    //render() {
    //    const { largeImg, tags } = this.props;
        
        return createPortal (
            <Overlay onClick={handleBackdropClick}>
                <ModalPopUp>
                    <img src={largeImg} alt={tags} />
                </ModalPopUp>
            </Overlay> , modalRoot );
    //    };
};
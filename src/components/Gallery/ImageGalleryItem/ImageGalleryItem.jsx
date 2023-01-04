import { Modal } from "components/Modal/Modal";
//import { Component } from "react";
import {useState} from "react";
import {GalleryItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export function ImageGalleryItem({
     webImg,
     tags,
     largeImg }) {
//export class ImageGalleryItem extends Component {

    const [showModal, setShowModal] = useState(false);
    //state = {
    //    showModal: false,
    //};

    const toggleModal = () => {
      setShowModal(prevShowModal => !prevShowModal);
    };
    //toggleModal = () => {
    //    this.setState(state => ({
    //        showModal: !state.showModal,
    //    }))
    //};

    //render() {
        //const { webImg, tags, largeImg } = this.props;
        //const { showModal } = this.state;

        return (
            <> 
                <GalleryItem onClick={toggleModal}>
                    <ImageGalleryItemImage src={webImg} alt={tags}/>
                        {showModal && <Modal 
                                        largeImg={largeImg} 
                                        tags={tags} 
                                        onClose={toggleModal}
                        />}
                </GalleryItem>
            </>
        );
    //};
};
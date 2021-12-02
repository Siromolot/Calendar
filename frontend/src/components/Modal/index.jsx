import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import { toggleModal, setModalData } from "../../actions/modal";


const Modal = () => {

  const {
    modalData,
  } = useSelector(state => ({
    modalData: state.modal.modalData,
  }))

  const dispatch = useDispatch();

  return (
    <div>
      <div className={'modal'} onClick={() => dispatch(toggleModal(false))} />

        {/* модальное окнос фото еды */}
        {/*{modalData.img ?*/}
        {/*    <ImageModal data={modalData} /> : null}*/}
      
      {/*<CloseIcon*/}
      {/*  className={'modal__close-button'}*/}
      {/*  style={{fontSize: 50}}*/}
      {/*  onClick={() => dispatch(toggleModal(false))}*/}
      {/*/>*/}

    </div>
  )
}

export default Modal;
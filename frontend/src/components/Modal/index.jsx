import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import { toggleModal, setModalData } from "../../actions/modal";
import CalendarItemModal from './CalendarItemModal';

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

        {/* модальное окно дня календаря */}
        {modalData.day ?
            <CalendarItemModal data={modalData.day} /> : null}
      
      {/*<CloseIcon*/}
      {/*  className={'modal__close-button'}*/}
      {/*  style={{fontSize: 50}}*/}
      {/*  onClick={() => dispatch(toggleModal(false))}*/}
      {/*/>*/}

    </div>
  )
}

export default Modal;
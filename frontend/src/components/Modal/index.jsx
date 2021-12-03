import React from 'react';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import { toggleModal, setModalData } from "../../actions/modal";
import CalendarItemModal from './CalendarItemModal';
import ThemeModal from "./ThemeModal";

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
  
      {/* модальное окно дня добавления / редактирования темы */}
      {modalData.theme && !modalData.deleting ?
        <ThemeModal dataTheme={modalData} /> : null}
  
      {/* модальное окно для удаления чего-либо */}
      {/*{modalData.deleting ?*/}
      {/*  <Deleting data={modalData} /> : null}*/}

    </div>
  )
}

export default Modal;
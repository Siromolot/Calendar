import {
  TOGGLE_MODAL,
  SET_MODAL_DATA
} from '../constants';

export const toggleModal = (bool) => {
  return {
    type: TOGGLE_MODAL,
    payload: bool
  }
}

export const setModalData = (data) => {
  return {
    type: SET_MODAL_DATA,
    payload: data
  }
}
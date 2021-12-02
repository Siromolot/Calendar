import {
  TOGGLE_MODAL,
  SET_MODAL_DATA
} from "../constants";

const initialState = {
  modal: false,
  modalData: null
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: action.payload
      };

    case SET_MODAL_DATA:
      return {
        ...state,
        modalData: action.payload
      };

    default: return state;
  }
};


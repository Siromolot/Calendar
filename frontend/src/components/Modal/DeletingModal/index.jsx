import React from 'react';
import './';
import {useDispatch} from "react-redux";
import {setModalData, toggleModal} from "../../../actions/modal";
import {Button} from "antd";
import {removeTheme} from "../../../actions/theme";

const DeletingModal = ({data}) => {
	
	console.log('data: ', data);
	
	const dispatch = useDispatch();
	
	const deleteItem = () => {
		dispatch(removeTheme(data.theme))
	};
	
	const setModal = (data) => {
		dispatch(toggleModal(true));
		dispatch(setModalData(data));
	};
	
	const cancelDeleting = () => {
		dispatch(toggleModal(false))
	}
	
	return (
		<div className={'modal__body'}>
			<p>Подтвердите удаление</p>
			
			<div className={'admin__button-block'}>
				<Button
					className={'admin__button'}
					type={'primary'}
					danger
					onClick={() => deleteItem()}
				>
					Удалить
				</Button>
				<Button
					className={'admin__button'}
					onClick={() => cancelDeleting()}
				>
					Отмена
				</Button>
			</div>
		</div>
	)
};

export default DeletingModal;
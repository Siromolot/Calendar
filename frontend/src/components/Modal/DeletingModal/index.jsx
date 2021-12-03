import React from 'react';
import './index.scss';
import '../index.scss';
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
			<div className={'deleting__block'}>
				<p>Подтвердите удаление</p>
				
				<div className={'admin__button-block'}>
					<Button
						className={'admin__button deleting__button'}
						type={'primary'}
						danger
						onClick={() => deleteItem()}
					>
						Удалить
					</Button>
					<Button
						className={'admin__button deleting__button'}
						onClick={() => cancelDeleting()}
					>
						Отмена
					</Button>
				</div>
			</div>
		</div>
	)
};

export default DeletingModal;
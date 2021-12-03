import React from "react";
import './index.scss';
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {setModalData, toggleModal} from "../../../actions/modal";

const AdminCalendarItem = ({data}) => {
	
	const dispatch = useDispatch();
	
	const setModal = (data) => {
		dispatch(toggleModal(true));
		dispatch(setModalData(data));
	};
	
	return (
		<div className={'admin-calendar-item__wrapper'}>
			<div>
				{new Date(data).getDate()}
			</div>
			
			<div>
				{data.department ?
					<div>
						<div>{data.title}</div>
						<div>
							<Button
								onClick={() => setModal({theme: data})}>Изменить</Button>
							<Button
								onClick={() => setModal({theme: data, deleting: true})}>Удалить</Button>
						</div>
					</div> :
					<div>
						<Button
							onClick={() => setModal({theme: {}})}>Добавить</Button>
					</div>}
			</div>
		</div>
	)
};

export default AdminCalendarItem;
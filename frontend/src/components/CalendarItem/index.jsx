import React from 'react';
import {
	toggleModal,
	setModalData,
} from "../../actions/modal";
import {useDispatch} from "react-redux";
import './index.scss';

const CalendarItem = ({data}) => {
	
	const dispatch = useDispatch();
	
	const currentDate = Date.now();
	
	const setModal = (dayData) => {
		dispatch(toggleModal(true));
		dispatch(setModalData(dayData));
	};
	
	return (
		<div
			className={currentDate > new Date(data.date).getTime() ?
			'calendar-item calendar-item__open-day' :
			'calendar-item calendar-item__close-day'}
			onClick={() => setModal({day: data})}
		>
			{data.day}
		</div>
	)
};

export default CalendarItem;
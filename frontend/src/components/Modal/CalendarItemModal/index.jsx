import React, {useEffect} from 'react';
import '../index.scss';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getDay} from "../../../actions/day";

const CalendarItemModal = ({data}) => {
	
	const {
		department
	} = useSelector(state => ({
		department: state.department.department
	}))
	
	const dispatch = useDispatch();
	
	const currentDay = Date.now();
	const dayIsOpen = currentDay > new Date(data.date).getTime();
	
	useEffect(() => {
		dispatch(getDay(data))
	})
	
	return (
		<div className={'modal__body'}>
			{
				department ?
					(dayIsOpen ?
						<div>Open</div> :
						<div className={'modal__closed-day'}>
							Рано заглянул сюда, не торопись&nbsp;)
						</div>) :
						<div className={'modal__closed-day'}>
							Чтобы увидеть интересности - надо сначала выбрать отдел
						</div>
			}
		</div>
	)
};

export default CalendarItemModal;
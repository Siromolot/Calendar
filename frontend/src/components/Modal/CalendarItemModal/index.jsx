import React, {useEffect} from 'react';
import '../index.scss';
import './index.scss';
import {useDispatch} from "react-redux";
import {getDay} from "../../../actions/day";

const CalendarItemModal = ({data}) => {
	
	const dispatch = useDispatch();
	
	const currentDay = Date.now();
	const dayIsOpen = currentDay > new Date(data.date).getTime();
	
	useEffect(() => {
		dispatch(getDay(data))
	})
	
	return (
		<div className={'modal__body'}>
			{
				dayIsOpen ?
					<div>Open</div> :
					<div className={'modal__closed-day'}>
						Рано заглянул сюда, не торопись&nbsp;)
					</div>
			}
		</div>
	)
};

export default CalendarItemModal;
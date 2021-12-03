import React, {useEffect} from 'react';
import '../index.scss';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getDay} from "../../../actions/theme";

const CalendarItemModal = ({data}) => {
	
	const {
		department,
		currentTheme,
	} = useSelector(state => ({
		department: state.department.department,
		currentTheme: state.theme.currentTheme,
	}))
	
	const dispatch = useDispatch();
	
	const currentDay = Date.now();
	const dayIsOpen = currentDay > new Date(data.date).getTime();
	
	useEffect(() => {
		if (department) {
			dispatch(getDay(data))
		}
	}, []);
	
	return (
		<div className={'modal__body'}>
			{
				department ?
					(dayIsOpen ?
						<div>
							<p>
							{currentTheme?.title}
							</p>
							<p>
								{currentTheme.description}
							</p>
							<p>
								{currentTheme.link}
							</p>
						</div> :
						<div className={'modal__closed-day'}>
							Рано заглянул сюда, не торопись&nbsp;)
						</div>) :
						<div className={'modal__closed-day'}>
							Чтобы увидеть интересности - надо сначала выбрать направление
						</div>
			}
		</div>
	)
};

export default CalendarItemModal;
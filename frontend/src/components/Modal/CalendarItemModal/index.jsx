import React, {useEffect} from 'react';
import '../index.scss';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {getDay} from "../../../actions/theme";

const CalendarItemModal = ({data}) => {
	
	console.log('data: ', data)
	
	const {
		department,
		currentTheme,
		isLoading,
	} = useSelector(state => ({
		department: state.department.department,
		currentTheme: state.theme.currentTheme,
		isLoading: state.theme.isLoading,
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
			{isLoading ?
				<p className={'modal__calendar-item_topic'}>
					Загрузка дня...
				</p> : null
			}
			
			{
				department ?
					(dayIsOpen ?
						currentTheme?.title ?
						<div>
								<p className={'modal__calendar-item_topic'}>
								{currentTheme?.title}
								</p>
								<p className={'modal__calendar-item_description'}>
									{currentTheme?.description}
								</p>
								<a className={'modal__calendar-item_description'}
									href={currentTheme?.link}
									target={'_blank'}
									aria-label={'to the theme link'}
									rel='noreferrer'>
									{currentTheme?.link}
								</a>
						</div> :
							<div className={'modal__closed-day'}>
								{currentTheme}
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
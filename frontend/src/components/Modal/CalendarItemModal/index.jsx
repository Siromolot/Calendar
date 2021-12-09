import React, {useEffect} from 'react';
import '../index.scss';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {clearErrorTheme, getDay} from "../../../actions/theme";

const CalendarItemModal = ({data}) => {
	
	console.log('data: ', data)
	
	const {
		department,
		currentTheme,
		isLoading,
		errorThemeLoading,
	} = useSelector(state => ({
		department: state.department.department,
		currentTheme: state.theme.currentTheme,
		isLoading: state.theme.isLoading,
		errorThemeLoading: state.theme.errorThemeLoading,
	}))
	
	const dispatch = useDispatch();
	
	const currentDay = Date.now();
	const dayIsOpen = currentDay > new Date(data.date).getTime();
	
	useEffect(() => {
		if (department && dayIsOpen) {
			dispatch(getDay(data))
		} else {
			dispatch(clearErrorTheme())
		}
	}, []);
	
	return (
		<div className={'modal__body'}>
			{errorThemeLoading.message ?
				<p className={'modal__calendar-item_topic error_mes'}>
					Упс, какая-то ошибка. Новогодняя ошибка, лол )
				</p> : null
			}
			
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
							{currentTheme?.link.split(',').map(item => (
								<p key={item}>
									<a className={'modal__calendar-item_description'}
										 href={item}
										 target={'_blank'}
										 aria-label={'to the theme link'}
										 rel='noreferrer'>
										{item}
									</a>
								</p>
							))}
							
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
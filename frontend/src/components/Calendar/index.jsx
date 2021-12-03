import React from 'react';
import CalendarItem from '../CalendarItem';
import './index.scss';

const Calendar = () => {
	
	let dates = [];
	
	for (let i = 7; i <= 30; i++ ) {
		// ToDO: пока стоит дата 1 декабря для тестов, потом поменять на 6 декабря
		const startDate = new Date("2021-12-06").getTime();
		
		const currentDateData = {
			date: new Date(startDate + (24 * 60 * 60 * 1000 * (i - 6))),
			day: i
		}
		
		dates = [...dates, currentDateData];
	}
	
	return (
		<div className={'calendar__wrapper'}>
			{dates.map(day => {
				return <CalendarItem key={day.date} data={day} />
				})}
		</div>
	)
};

export default Calendar;
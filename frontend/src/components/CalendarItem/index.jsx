import React from 'react';
import './index.scss';

const CalendarItem = ({data}) => {
	
	const currentDate = Date.now();
	
	console.log('currentDate: ', currentDate);
	console.log('data.date__: ', new Date(data.date).getTime());
	
	return (
		<div className={currentDate > new Date(data.date).getTime() ?
			'calendar-item calendar-item__open-day' :
			'calendar-item calendar-item__close-day'}>
			{data.day}
		</div>
	)
};

export default CalendarItem;
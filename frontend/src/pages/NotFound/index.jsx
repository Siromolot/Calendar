import React from "react";
import './index.scss';
import {Link} from "react-router-dom";

const NotFound = () => {
	
	return (
		<div className={'not-found__wrapper'}>
			<p className={'not-found__big_topic'}>404</p>
			<p className={'not-found__text'}>
				Такой страницы, к сожалению, нет
			</p>
			
			<p className={'not-found__text'}>
				<a href={'https://www.youtube.com/watch?v=sE3uRRFVsmc&ab_channel=FrankSinatraVEVO'}
					 aria-label={'link to song'}
					 target={'_blank'}>
					Но зато мы вместе можем послушать Френка (давай, кликай уже)
				</a>
			</p>
			
			<Link to={'/'} className={'not-found__link-back'}>
				Ну или вернуться на главную
			</Link>

		</div>
	)
};

export default NotFound;
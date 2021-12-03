import React, {useEffect} from "react";
import './index.scss';
import { getCookie } from "../../constants";
import {Link, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllDays} from "../../actions/theme";
import {logoutAction} from "../../actions/auth";
import AdminCalendarItem from "../../components/Admin/AdminCalendarItem";
import Modal from "../../components/Modal";

const Admin = () => {
	
	const dispatch = useDispatch();
	
	const token = getCookie('token');
	const department = getCookie('department');
	
	const {
		allThemes,
		modal,
	} = useSelector(state => ({
		allThemes: state.theme.allThemes,
		modal: state.modal.modal,
	}));
	
	useEffect(() => {
		if (token && department) {
			dispatch(getAllDays())
		}
	}, []);
	
	const logout = () => {
		dispatch(logoutAction())
	};
	
	let dates = [];
	
	// цикл с 7-го декабря по 30-е декабря
	for (let i = 7; i <= 30; i++ ) {
		// TODO: для тестов поставил 1-е декабря, поменять на 6-е декабря
		const startDate = new Date("2021-12-06").getTime();
		
		// создаем новую дату по итерации
		const currentDateData = {
			date: new Date(startDate + (24 * 60 * 60 * 1000 * (i - 6))),
		};
		
		// проверяем, есть ли заполненный день в сторе с такой датой
		const search = allThemes.find(item => {
			return item.date == currentDateData.date.getTime()
		});
		
		// если есть такой заполненный день, то устанавливаем его, если нет - пустую дату
		dates = [...dates, search ? search : currentDateData];
	};
	
	return (token && department ?
		<div className={'admin__wrapper'}>
			<div className={'admin__logout-block'}>
				<div className={'admin__logo-block'}>
					Кабинет {department.toUpperCase()}
				</div>
				<div>
					<Link to={'/'} className={'admin__logout-item'}>
						На сайт
					</Link>
					<Link
						onClick={() => logout()}
						to={'/auth'}
						className={'admin__logout-item'}>
						Выход
					</Link>
				</div>
			</div>
			
			{dates.map(item => {
				return <AdminCalendarItem key={item.date} data={item}/>
			})}
			
			{
				modal ? <Modal /> : null
			}
		</div> :
		<Redirect to={'/auth'} />
	)
};

export default Admin;
import React, {useEffect} from "react";
import './index.scss';
import { getCookie } from "../../constants";
import {Link, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getAllDays} from "../../actions/theme";
import {logoutAction} from "../../actions/auth";

const Admin = () => {
	
	const dispatch = useDispatch();
	
	const token = getCookie('token');
	const department = getCookie('department');
	
	useEffect(() => {
		if (token && department) {
			dispatch(getAllDays())
		}
	}, []);
	
	const logout = () => {
		dispatch(logoutAction())
	};
	
	return (token && department ?
		<div className={'admin__wrapper'}>
			<div className={'admin__logout-block'}>
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
		</div> :
		<Redirect to={'/auth'} />
	)
};

export default Admin;
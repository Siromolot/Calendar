import React from "react";
import './index.scss';
import { getCookie } from "../../constants";
import {Redirect} from "react-router-dom";

const Admin = () => {
	
	const token = getCookie('token');
	const department = getCookie('department')
	
	return (token && department ?
		<div>
			Admin panel
		</div> :
		<Redirect to={'/auth'} />
	)
};

export default Admin;
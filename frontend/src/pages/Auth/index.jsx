import React from "react";
import { Input, Form, Button} from 'antd';
import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../actions/auth";
import {getCookie} from "../../constants";
import {Link, Redirect} from "react-router-dom";

const Auth = () => {
	
	const {
		errorAuth,
		isLoading,
	} = useSelector((state) => ({
		errorAuth: state.auth.errorAuth,
		isLoading: state.auth.isLoading
	}));
	
	const token = getCookie('token');
	const department = getCookie('department')
	
	const dispatch = useDispatch();
	
	const [form] = Form.useForm();
	
	const onFinish = (values) => {
		dispatch(loginAction(values));
	};
	
	return (token && department ?
			<Redirect to={'/admin'} /> :
			
		<div className={'auth__wrapper'}>
			<Form
				form={form}
				layout={'vertical'}
				name="authForm"
				onFinish={onFinish}>
				<Form.Item
					name="login"
					className={'form__fields'}
					label='Логин'
					rules={[
						{
							required: true,
							message: 'Пожалуйста, укажите логин',
						},
					]}>
					<Input />
				</Form.Item>
				
				<Form.Item
					name="password"
					label='Пароль'
					className={'form__fields'}
					rules={[
						{
							required: true,
							message: 'Пожалуйста, укажите пароль',
						},
					]}>
					<Input.Password />
				</Form.Item>
				
				<Form.Item>
					<Button
						type='primary'
						htmlType="submit"
						size='large'
						block
					>
						Авторизоваться
					</Button>
				</Form.Item>
			</Form>
			
			<Link to={'/'}>
				Вернуться на сайт
			</Link>
		</div>
	)
};

export default Auth;
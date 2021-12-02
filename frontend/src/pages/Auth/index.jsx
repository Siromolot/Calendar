import React from "react";
import { Input, Form, Button} from 'antd';
import './index.scss';
import {useDispatch} from "react-redux";
import {loginAction} from "../../actions/auth";

const Auth = () => {
	
	const dispatch = useDispatch();
	
	const [form] = Form.useForm();
	
	const onFinish = (values) => {
		console.log('Форма отправлена!', values);
		dispatch(loginAction(values));
	};
	
	return (
		<div>
			<Form
				form={form}
				layout={'vertical'}
				name="authForm"
				onFinish={onFinish}>
				<Form.Item
					name="login"
					label={'Логин'}
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
					label={'Пароль'}
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
		</div>
	)
};

export default Auth;
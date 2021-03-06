import React from 'react';
import './index.scss';
import {Button, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import TextArea from "antd/es/input/TextArea";
import {getCookie} from "../../../constants";
import {addTheme, editTheme} from "../../../actions/theme";

const ThemeModal = ({dataTheme}) => {
	
	console.log('dataTheme: ', dataTheme);
	
	const department = getCookie('department');
	
	const dispatch = useDispatch();
	
	const [form] = Form.useForm();
	
	const onFinish = (values) => {
		console.log('DATE: ', dataTheme?.theme?.date);
		const data = {
			...values,
			department,
			date: new Date(dataTheme?.theme?.data?.date).getTime() ||
				new Date(dataTheme?.theme?.date).getTime()
		}
		
		const id = dataTheme?.theme?.id;
		
		dataTheme?.theme?.department ?
		dispatch(editTheme(data, id)) :
		dispatch(addTheme(data));
	};
	
	return (
		<div className={'modal__body'}>
			<Form
				form={form}
				layout={'vertical'}
				name="themeForm"
				onFinish={onFinish}>
				<Form.Item
					name="title"
					initialValue={dataTheme?.theme?.title || ''}
					className={'form__fields'}
					label='Тема'
					rules={[
						{
							required: true,
							message: 'Пожалуйста, укажите тему',
						},
					]}>
					<Input autoComplete={'off'}/>
				</Form.Item>
				
				<Form.Item
					name="description"
					label='Краткое описание'
					initialValue={dataTheme?.theme?.description || ''}
					className={'form__fields'}
					rules={[
						{
							required: true,
							message: 'Пожалуйста, укажите тему',
						}]}
				>
					<TextArea rows={2} autoComplete={'off'} />
				</Form.Item>
				
				<Form.Item
					name="link"
					className={'form__fields'}
					initialValue={dataTheme?.theme?.link || ''}
					label='Ссылка'
					rules={[
						{
							required: true,
							message: 'Пожалуйста, укажите ссылку',
						},
					]}>
					<Input autoComplete={'off'} />
				</Form.Item>
				
				<Form.Item>
					<Button
						type='primary'
						htmlType="submit"
						size='large'
						block
					>
						Сохранить
					</Button>
				</Form.Item>
			</Form>
		
		
		</div>
	)
};

export default ThemeModal;
import React from 'react';
import { setDepartment } from '../../actions/department';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import {useDispatch} from "react-redux";

const SelectDepartment = () => {
	
	const dispatch = useDispatch();
	
	const { Option } = Select;
	
	function handleChange(value) {
		dispatch(setDepartment(value));
	}
	
	const departments = [
		{value: 'frontend', name: 'Frontend разработка'},
		{value: 'backend', name: 'Backend разработка'},
		{value: 'mobile', name: 'Мобильная разработка'},
		{value: 'qa', name: 'Тестирование'},
	]
	
	return (
		<div className={'select__wrapper'}>
			<Select
				placeholder={'Выберите отдел'}
				className={'select'}
				onChange={handleChange}
				size="large">
				{departments.map(department => (
					<Option
						value={department.value}>
						{department.name}
					</Option>
				))}
			</Select>
		</div>
	)
};

export default SelectDepartment;
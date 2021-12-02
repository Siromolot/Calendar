import React from "react";
import './index.scss';
import {Button} from "antd";

const AdminCalendarItem = ({data}) => {
	
	return (
		<div>
			<div>
				{new Date(data).getDate()}
			</div>
			
			<div>
				{data.department ?
					<div>
						<div>{data.title}</div>
						<div>
							<Button>Изменить</Button>
							<Button>Удалить</Button>
						</div>
					</div> :
					<div>
						<Button>Добавить</Button>
					</div>}
			</div>
		</div>
	)
};

export default AdminCalendarItem;
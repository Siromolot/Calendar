import React from 'react';
import NY from '../../assets/images/darkNYtext.jpg';
import './index.scss';

const Header = () => {
	
	return (
		<div>
			<div className={'header__image-wrapper'}>
				<img
					src={NY}
					alt={'тут планировалась картинка про НГ, но чет ее нет'}
					className={'header__image'}
				/>
			</div>
		</div>
	)
};

export default Header;